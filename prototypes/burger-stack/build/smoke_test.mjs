// Headless smoke test for Burger Stack. Covers: (1) new-player onboarding +
// auto level 1, (2) returning-player menu + home-phase null-guard, and
// (3) a SOLVER-DRIVEN full playthrough -> serve -> win (via the window.__bs seam).
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const code = fs.readFileSync(path.join(__dirname,'index.html'),'utf8').split('<script>')[1].split('</script>')[0];
const SAVE_KEY = 'burgerstack_v2';

function uni(){const f=function(){return uni();};return new Proxy(f,{get:(t,p)=>{if(p==='value'||p==='currentTime')return 0;if(p==='state')return 'running';return uni();},set:()=>true,apply:()=>uni()});}

function makeEnv(seedSave){
  const store={}; if(seedSave) store[SAVE_KEY]=JSON.stringify(seedSave);
  const localStorage={getItem:k=>k in store?store[k]:null,setItem:(k,v)=>store[k]=String(v),removeItem:k=>{delete store[k];}};
  const noop=()=>{}; const els={};
  function mkEl(id){const e={id,_h:{},style:{},_cls:new Set(),children:[],
    set textContent(v){this._tc=v;},get textContent(){return this._tc||'';},
    set innerHTML(v){this._html=v;this.children=[];},get innerHTML(){return this._html||'';},
    set className(v){this._cn=v;},get className(){return this._cn||'';},
    classList:{add:c=>e._cls.add(c),remove:c=>e._cls.delete(c),contains:c=>e._cls.has(c)},
    appendChild:c=>{e.children.push(c);return c;},addEventListener:(ev,fn)=>{e._h[ev]=fn;},
    getContext:()=>uni(),getBoundingClientRect:()=>({left:0,top:0,width:540,height:820}),
    get clientWidth(){return 540;},get clientHeight(){return 820;},
    set onclick(fn){e._h.click=fn;},get onclick(){return e._h.click;},width:540,height:820,disabled:false};
    return e;}
  const document={getElementById:id=>els[id]||(els[id]=mkEl(id)),createElement:t=>mkEl('_'+t+Math.random())};
  let rafQ=[];const requestAnimationFrame=cb=>{rafQ.push(cb);return rafQ.length;};
  let clock=1000; const performance={now:()=>clock};                 // monotonic, like a real browser
  function pump(n){for(let i=0;i<n;i++){clock+=16;const q=rafQ;rafQ=[];q.forEach(cb=>cb(clock));}}
  const window={addEventListener:noop,devicePixelRatio:1,innerWidth:540,innerHeight:820,AudioContext:function(){return uni();}};
  const confirm=()=>true;
  const setTimeout=fn=>{try{fn();}catch(e){throw e;}return 0;};const setInterval=()=>0,clearInterval=noop,clearTimeout=noop;
  const fn=new Function('document','window','localStorage','performance','requestAnimationFrame','setTimeout','setInterval','clearInterval','clearTimeout','confirm','console',code);
  return { run:()=>fn(document,window,localStorage,performance,requestAnimationFrame,setTimeout,setInterval,clearInterval,clearTimeout,confirm,console),
    els, pump, win:window, shown:id=>els[id]&&els[id]._cls.has('show'),
    clk:id=>els[id]&&els[id]._h.click&&els[id]._h.click(),
    pd:(x,y)=>els['c']._h.pointerdown({clientX:x,clientY:y}) };
}

const res=[];let threw=null;
function step(name,fn){ if(threw)return; try{fn();res.push('  ✓ '+name);}catch(e){res.push('  ✗ '+name+' — '+e.message);threw=e;} }

res.push('Scenario 1 — new player (onboarding + auto level 1):');
{ const E=makeEnv(null);
  step('boot',()=>E.run());
  step('onboarding shown, not daily',()=>{ if(!E.shown('tutOv'))throw new Error('no onboarding'); if(E.shown('dailyOv'))throw new Error('daily on first run'); });
  step('render frames in level 1',()=>E.pump(4));
  step('click through onboarding',()=>{ for(let i=0;i<5;i++)E.clk('tutNext'); if(E.shown('tutOv'))throw new Error('not dismissed'); });
  step('a plate tap-move',()=>{ E.pd(40,700); E.pd(500,700); E.pump(10); }); }

res.push('\nScenario 2 — returning player (menu + null-guard):');
{ const E=makeEnv({onboarded:true});
  step('boot',()=>E.run());
  step('onboarding NOT replayed',()=>{ if(E.shown('tutOv'))throw new Error('replayed'); });
  step('daily shown',()=>{ if(!E.shown('dailyOv'))throw new Error('no daily'); });
  step('HOME-phase frames, G null — loop survives',()=>E.pump(6));
  step('claim daily + start level',()=>{ E.clk('dailyClaim'); E.clk('btnPlay'); E.pump(3); });
  step('boosters + shop + metrics + mute',()=>{ E.clk('bUndo'); E.clk('bOutlet'); E.clk('bHint'); E.pump(2); E.clk('btnShop'); E.els['shopList'].children[0].children[0]._h.click(); E.clk('shopClose'); E.clk('btnMetrics'); E.clk('metricsClose'); E.clk('btnMute'); }); }

res.push('\nScenario 3 — SOLVER-DRIVEN full playthrough -> serve -> win:');
{ const E=makeEnv(null);
  step('boot + dismiss onboarding (in level 1)',()=>{ E.run(); for(let i=0;i<5;i++)E.clk('tutNext'); E.pump(3); });
  step('solve the level via the test seam',()=>{
    const bs=E.win.__bs; if(!bs)throw new Error('no test seam'); const G0=bs.G; if(!G0)throw new Error('not in a level');
    let guard=0;
    while(bs.G.served<bs.G.K && guard++<400){ E.pump(14); if(bs.G.served>=bs.G.K)break; bs.step(); E.pump(14); }
    if(bs.G && bs.G.served<bs.G.K) throw new Error('did not serve all '+bs.G.K+' (served '+bs.G.served+')');
  });
  step('win sequence resolves to result overlay',()=>{ E.pump(80); if(!E.shown('winOv'))throw new Error('winOv not shown after solve'); });
  step('continue to next order',()=>{ E.clk('winNext'); }); }

res.push(threw?'\nSMOKE FAILED ❌':'\nALL SMOKE STEPS PASSED ✅');
console.log(res.join('\n'));
process.exit(threw?1:0);
