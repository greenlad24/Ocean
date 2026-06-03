// Headless smoke test: run Bolt Up's real JS against a DOM shim and exercise
// every major interaction, asserting nothing throws.
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const html = fs.readFileSync(path.join(__dirname,'index.html'),'utf8');
const code = html.split('<script>')[1].split('</script>')[0];

const store = {};
const localStorage = { getItem:k=>k in store?store[k]:null, setItem:(k,v)=>store[k]=String(v), removeItem:k=>{delete store[k];} };

const noop = ()=>{};
function ctxProxy(){ return new Proxy({}, { get:(t,p)=> (p in t)?t[p]:(typeof p==='string'? (()=>{}) : undefined), set:(t,p,v)=>{t[p]=v;return true;} }); }

const els = {};
function mkEl(id){
  const e = {
    id, _h:{}, style:{}, _cls:new Set(), children:[],
    set textContent(v){ this._tc=v; }, get textContent(){ return this._tc||''; },
    set innerHTML(v){ this._html=v; this.children=[]; }, get innerHTML(){ return this._html||''; },
    classList:{ add:c=>e._cls.add(c), remove:c=>e._cls.delete(c), contains:c=>e._cls.has(c) },
    appendChild:c=>{ e.children.push(c); return c; },
    addEventListener:(ev,fn)=>{ e._h[ev]=fn; },
    getContext:()=>ctxProxy(),
    getBoundingClientRect:()=>({left:0,top:0,width:520,height:800}),
    get clientWidth(){return 520;}, get clientHeight(){return 800;},
    set onclick(fn){ e._h.click=fn; }, get onclick(){ return e._h.click; },
    width:520, height:800, disabled:false,
  };
  return e;
}
const document = {
  getElementById:id=> els[id]||(els[id]=mkEl(id)),
  createElement:tag=>mkEl('_'+tag+Math.random()),
};
let rafQ=[]; const requestAnimationFrame=cb=>{ rafQ.push(cb); return rafQ.length; };
function pump(frames){ for(let i=0;i<frames;i++){ const q=rafQ; rafQ=[]; q.forEach(cb=>cb(performance.now()+i*16)); } }
let _t=1000; const performance={ now:()=>(_t+=16) };
const window={ addEventListener:noop, devicePixelRatio:1, innerWidth:520, innerHeight:800 };
const confirm=()=>true;
const setTimeout=(fn)=>{ try{fn();}catch(e){ throw e; } return 0; }; // run immediately
const setInterval=()=>0; const clearInterval=noop; const clearTimeout=noop;

const results=[];
function step(name, fn){ try{ fn(); results.push('  ✓ '+name); }catch(e){ results.push('  ✗ '+name+' — '+e.message); throw e; } }

const fn = new Function('document','window','localStorage','performance','requestAnimationFrame',
  'setTimeout','setInterval','clearInterval','clearTimeout','confirm','console', code);

let threw=null;
try {
  step('boot (IIFE)', ()=> fn(document,window,localStorage,performance,requestAnimationFrame,setTimeout,setInterval,clearInterval,clearTimeout,confirm,console));
  const clk = id => els[id]._h.click && els[id]._h.click();
  step('daily overlay shown on boot', ()=>{ if(!els['dailyOv']._cls.has('show')) throw new Error('daily not shown'); });
  step('claim daily', ()=> clk('dailyClaim'));
  step('open shop + buy coins (nested button)', ()=>{ clk('btnShop'); const list=els['shopList']; if(!list.children.length) throw new Error('shop empty'); const btn=list.children[0].children[0]; btn._h.click(); clk('shopClose'); });
  step('open metrics', ()=>{ clk('btnMetrics'); if(!els['metricsBody'].innerHTML) throw new Error('no metrics'); clk('metricsClose'); });
  step('start level', ()=>{ clk('btnPlay'); });
  step('render frames', ()=> pump(3));
  // simulate a move: tap rod 0 then an empty rod (last). canvas pointerdown handler:
  const pd = els['c']._h.pointerdown;
  step('tap-move (rod0 -> empty) + settle', ()=>{
    // rod centers: margin + gap*(i+0.5). With 520 wide, ~5 rods. Tap far-left then far-right.
    pd({clientX:40, clientY:400});
    pd({clientX:500, clientY:400});
    pump(8); // let the hop animation finish -> settle()
  });
  step('use undo booster', ()=> clk('bUndo'));
  step('use derust booster (may no-op)', ()=> clk('bDerust'));
  step('use spare-rod booster', ()=> clk('bRod'));
  step('give up from a level (loses a life, returns home)', ()=>{ clk('btnPlay'); els['failGive']._h.click(); });
  step('drain lives then Play opens out-of-lives overlay', ()=>{
    for(let i=0;i<7;i++){ clk('btnPlay'); if(els['failGive']._h.click) els['failGive']._h.click(); }
    clk('btnPlay'); // with 0 lives this should open lifeOv, not crash
  });
  step('refill via ad path', ()=>{ if(els['lifeAd']._h.click) els['lifeAd']._h.click(); });
  results.push('\nALL SMOKE STEPS PASSED ✅');
} catch(e){ threw=e; results.push('\nSMOKE TEST FAILED ❌'); }

console.log(results.join('\n'));
process.exit(threw?1:0);
