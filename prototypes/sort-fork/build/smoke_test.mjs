// Headless smoke test: run Cable Sort's real JS against a DOM/audio shim and
// exercise every major interaction, asserting nothing throws.
import fs from 'fs';
import path from 'path';
import {fileURLToPath} from 'url';
const __dirname = path.dirname(fileURLToPath(import.meta.url));
const code = fs.readFileSync(path.join(__dirname,'index.html'),'utf8').split('<script>')[1].split('</script>')[0];

const store={};
const localStorage={getItem:k=>k in store?store[k]:null,setItem:(k,v)=>store[k]=String(v),removeItem:k=>{delete store[k];}};
const noop=()=>{};
const ctxProxy=()=>new Proxy({},{get:(t,p)=>p in t?t[p]:(typeof p==='string'?(()=>{}):undefined),set:(t,p,v)=>{t[p]=v;return true;}});
// universal callable proxy: any property is itself, any call returns itself
function uni(){const f=function(){return uni();};return new Proxy(f,{get:(t,p)=>{if(p==='value'||p==='currentTime')return 0;if(p==='state')return 'running';return uni();},set:()=>true,apply:()=>uni()});}
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
let _t=1e3;const performance={now:()=>(_t+=16)};
const window={addEventListener:noop,devicePixelRatio:1,innerWidth:540,innerHeight:820,AudioContext:function(){return uni();}};
const confirm=()=>true;
const setTimeout=fn=>{try{fn();}catch(e){throw e;}return 0;};const setInterval=()=>0;const clearInterval=noop;const clearTimeout=noop;

const res=[];function step(n,fn){try{fn();res.push('  ✓ '+n);}catch(e){res.push('  ✗ '+n+' — '+e.message);throw e;}}
const fn=new Function('document','window','localStorage','performance','requestAnimationFrame','setTimeout','setInterval','clearInterval','clearTimeout','confirm','console',code);
let threw=null;
try{
  step('boot',()=>fn(document,window,localStorage,performance,requestAnimationFrame,setTimeout,setInterval,clearInterval,clearTimeout,confirm,console));
  const clk=id=>els[id]._h.click&&els[id]._h.click();
  step('daily shown on boot',()=>{if(!els['dailyOv']._cls.has('show'))throw new Error('daily not shown');});
  step('claim daily',()=>clk('dailyClaim'));
  step('shop open + buy (nested btn) + close',()=>{clk('btnShop');const b=els['shopList'].children[0].children[0];b._h.click();clk('shopClose');});
  step('metrics open/close',()=>{clk('btnMetrics');if(!els['metricsBody'].innerHTML)throw new Error('no metrics');clk('metricsClose');});
  step('mute toggle',()=>clk('btnMute'));
  step('start level',()=>clk('btnPlay'));
  step('render frames',()=>pump(3));
  const pd=els['c']._h.pointerdown;
  step('tap-move + settle',()=>{pd({clientX:40,clientY:400});pd({clientX:500,clientY:400});pump(10);});
  step('undo booster',()=>clk('bUndo'));
  step('spare-outlet booster',()=>clk('bOutlet'));
  step('hint booster',()=>clk('bHint'));
  step('render after boosters',()=>pump(3));
  step('give up (life loss, home)',()=>{clk('btnPlay');els['failGive']._h.click();});
  step('drain lives -> out-of-lives overlay, then ad refill',()=>{for(let i=0;i<7;i++){clk('btnPlay');if(els['failGive']._h.click)els['failGive']._h.click();}clk('btnPlay');if(els['lifeAd']._h.click)els['lifeAd']._h.click();});
  res.push('\nALL SMOKE STEPS PASSED ✅');
}catch(e){threw=e;res.push('\nSMOKE FAILED ❌');}
console.log(res.join('\n'));
process.exit(threw?1:0);
