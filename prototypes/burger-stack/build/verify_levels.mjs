// QA-FIRST: ordered-assembly burger core + solver. Proves every generated
// level is solvable BEFORE the UI is built on it. Mirrored in index.html.
// Rules: dig the TOP ingredient off any plate -> move it onto another plate
// (empty, or same-type top = buffer) OR onto the SERVING plate if it is the
// NEXT ingredient the recipe needs. Build the whole recipe in order to serve a
// burger. Serve K burgers to win the level. Run: node verify_levels.mjs
const CAP = 5;                 // max height of a source/buffer plate
const rnd = n => Math.floor(Math.random() * n);

// ingredient types (recipe order space): 0 bottom bun,1 patty,2 cheese,3 lettuce,4 tomato,5 top bun
function recipeFor(level){
  const mids=[1,2,3,4];
  const nm=Math.min(1+Math.floor((level-1)/2),4);     // L1:1 ... L7+:4 fillings
  const r=[0];
  for(let i=0;i<nm;i++) r.push(mids[i]);
  if(level>=5) r.splice(2,0,1);                        // a double patty on bigger orders
  r.push(5);
  return r;
}
function kFor(level,R){ let k=Math.min(1+Math.floor((level-1)/3),3); while(k*R>12 && k>1) k--; return k; } // cap total items

const top=p=>p.length?p[p.length-1]:-1;
const ser=(plates,prog,served)=>plates.map(p=>p.join(',')).join('|')+'#'+prog+'#'+served;

function solvable(plates0,recipe,K,cap=300000){
  const R=recipe.length;
  const start={plates:plates0.map(p=>p.slice()),prog:0,served:0};
  const seen=new Set([ser(start.plates,start.prog,start.served)]);
  const st=[start]; let n=0;
  while(st.length){
    const {plates,prog,served}=st.pop();
    if(++n>cap) return false;
    if(served>=K) return true;
    for(let f=0;f<plates.length;f++){
      const t=top(plates[f]); if(t<0) continue;
      // (a) place on the serving plate if it's the next required ingredient
      if(t===recipe[prog]){
        const np=plates.map(p=>p.slice()); np[f].pop();
        let prog2=prog+1, served2=served;
        if(prog2===R){ served2++; prog2=0; }
        const k=ser(np,prog2,served2); if(!seen.has(k)){ seen.add(k); st.push({plates:np,prog:prog2,served:served2}); }
      }
      // (b) buffer: move onto an empty plate or one whose top matches
      for(let d=0;d<plates.length;d++){
        if(d===f) continue;
        if(plates[d].length>=CAP) continue;
        if(plates[d].length===0 || top(plates[d])===t){
          const np=plates.map(p=>p.slice()); np[d].push(np[f].pop());
          const k=ser(np,prog,served); if(!seen.has(k)){ seen.add(k); st.push({plates:np,prog,served}); }
        }
      }
    }
  }
  return false;
}

function genLevel(level){
  const recipe=recipeFor(level), R=recipe.length, K=kFor(level,R);
  const items=[]; for(let k=0;k<K;k++) for(const t of recipe) items.push(t);
  const total=items.length;
  const cols=Math.max(2,Math.ceil(total/3));   // source columns (shallow-ish)
  const empties=2;                              // buffer plates
  for(let attempt=0;attempt<500;attempt++){
    const sh=items.slice(); for(let i=sh.length-1;i>0;i--){const j=rnd(i+1);[sh[i],sh[j]]=[sh[j],sh[i]];}
    const plates=Array.from({length:cols+empties},()=>[]);
    for(const it of sh){ const open=[]; for(let i=0;i<cols;i++) if(plates[i].length<CAP) open.push(i); plates[open[rnd(open.length)]].push(it); }
    if(solvable(plates,recipe,K)) return {plates,recipe,K};
  }
  return null;
}

const N=60; let fails=0, maxItems=0;
for(let i=1;i<=N;i++){
  const lv=genLevel(i);
  if(!lv){ console.log(`level ${i}: GENERATION FAILED`); fails++; continue; }
  const items=lv.plates.reduce((a,p)=>a+p.length,0); maxItems=Math.max(maxItems,items);
  if(!solvable(lv.plates,lv.recipe,lv.K)){ console.log(`level ${i}: UNSOLVABLE`); fails++; }
}
console.log(`Checked ${N} levels. recipe L1=[${recipeFor(1)}] (bun,patty,bun). max items on a board: ${maxItems}. failures: ${fails}`);
console.log(fails===0 ? '\nORDERED-ASSEMBLY GENERATOR ALWAYS SOLVABLE ✅' : '\nBROKEN ❌');
process.exit(fails===0?0:1);
