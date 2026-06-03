// Headless smoke test: runs the real game JS against a DOM/audio shim.
// Covers BOTH boot paths: (1) brand-new player -> onboarding + auto level 1,
// (2) returning player -> menu + the home-phase null-guard regression.
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const code = fs.readFileSync(path.join(__dirname,'index.html'),'utf8').split('<script>')[1].split('</script>')[0];
const SAVE_KEY = 'cablesort_surge_v1';

// universal callable proxy for canvas ctx + audio nodes
function uni(){const f=function(){return uni();};return new Proxy(f,{get:(t,p)=>{if(p==='value'||p==='currentTime')return 0;if(p==='state')return 'running';return uni();},set:()=>true,apply:()=>uni()});}

function makeEnv(seedSave){
  const store={};
  if(seedSave) store[SAVE_KEY]=JSON.stringify(seedSave);
  const localStorage={getItem:k=>k in store?store[k]:null,setItem:(k,v)=>store[k]=String(v),removeItem:k=>{delete store[k];}};
  const noop=()=>{};
  const els={};
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
  function pump(n){for(let i=0;i<n;i++){const q=rafQ;rafQ=[];q.forEach(cb=>cb(performance.now()+i*16));}}
  let _t=1000;const performance={now:()=>(_t+=16)};
  const window={addEventListener:noop,devicePixelRatio:1,innerWidth:540,innerHeight:820,AudioContext:function(){return uni();}};
  const confirm=()=>true;
  const setTimeout=fn=>{try{fn();}catch(e){throw e;}return 0;};const setInterval=()=>0,clearInterval=noop,clearTimeout=noop;
  const fn=new Function('document','window','localStorage','performance','requestAnimationFrame','setTimeout','setInterval','clearInterval','clearTimeout','confirm','console',code);
  return {
    run:()=>fn(document,window,localStorage,performance,requestAnimationFrame,setTimeout,setInterval,clearInterval,clearTimeout,confirm,console),
    els, pump,
    shown:id=>els[id] && els[id]._cls.has('show'),
    clk:id=>els[id]&&els[id]._h.click&&els[id]._h.click(),
    pd:(x,y)=>els['c']._h.pointerdown({clientX:x,clientY:y}),
  };
}

const res=[];let threw=null;
function step(name,fn){ if(threw)return; try{fn();res.push('  ✓ '+name);}catch(e){res.push('  ✗ '+name+' — '+e.message);threw=e;} }

// ---- Scenario 1: brand-new player ----
res.push('Scenario 1 — brand-new player (onboarding + auto level 1):');
{ const E=makeEnv(null);
  step('boot',()=>E.run());
  step('onboarding shown on boot, NOT daily',()=>{ if(!E.shown('tutOv'))throw new Error('onboarding not shown'); if(E.shown('dailyOv'))throw new Error('daily should not show on first run'); });
  step('auto-started in level 1 (render frames, no menu gate)',()=>E.pump(4));
  step('click through onboarding -> dismissed',()=>{ for(let i=0;i<5;i++)E.clk('tutNext'); if(E.shown('tutOv'))throw new Error('onboarding not dismissed'); });
  step('play a tap-move + settle',()=>{ E.pd(40,400); E.pd(500,400); E.pump(12); });
}

// ---- Scenario 2: returning player ----
res.push('\nScenario 2 — returning player (menu + null-guard regression):');
{ const E=makeEnv({onboarded:true});
  step('boot',()=>E.run());
  step('onboarding NOT replayed',()=>{ if(E.shown('tutOv'))throw new Error('onboarding replayed for returning player!'); });
  step('daily shown for returning player',()=>{ if(!E.shown('dailyOv'))throw new Error('daily not shown'); });
  step('HOME-phase frames with G null — loop must survive',()=>E.pump(6));
  step('claim daily',()=>E.clk('dailyClaim'));
  step('start level from menu',()=>E.clk('btnPlay'));
  step('render + tap-move + settle',()=>{ E.pump(3); E.pd(40,400); E.pd(500,400); E.pump(12); });
  step('boosters: undo / spare-outlet / hint',()=>{ E.clk('bUndo'); E.clk('bOutlet'); E.clk('bHint'); E.pump(3); });
  step('shop buy (nested btn) + close',()=>{ E.clk('btnShop'); E.els['shopList'].children[0].children[0]._h.click(); E.clk('shopClose'); });
  step('metrics open/close + mute',()=>{ E.clk('btnMetrics'); if(!E.els['metricsBody'].innerHTML)throw new Error('no metrics'); E.clk('metricsClose'); E.clk('btnMute'); });
  step('give up (life loss) then drain lives -> out-of-lives + ad refill',()=>{ E.clk('failGive'); for(let i=0;i<7;i++){ E.clk('btnPlay'); if(E.els['failGive']._h.click)E.els['failGive']._h.click(); } E.clk('btnPlay'); if(E.els['lifeAd']._h.click)E.els['lifeAd']._h.click(); });
}

res.push(threw?'\nSMOKE FAILED ❌':'\nALL SMOKE STEPS PASSED ✅');
console.log(res.join('\n'));
process.exit(threw?1:0);
