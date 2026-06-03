// QA tool: proves every Bolt Up level is solvable, modelling the rust-cascade.
// Run: node verify_levels.mjs   (exit 0 = all solvable)
const CAP = 4;

// Candidate levels — must match the LEVELS array embedded in index.html.
// Bolt = [colorIdx, rusted?]. Rods listed bottom -> top.
const LEVELS = [
  // L1 — pure sort, 3 colours, 2 empty rods
  [
    [[0],[0],[0],[2]],
    [[1],[1],[1],[0]],
    [[2],[2],[2],[1]],
    [],
    [],
  ],
  // L2 — introduces rust, 3 colours, 3 empty rods
  [
    [[2],[0],[1],[2]],
    [[2],[1],[0],[2]],
    [[1,1],[0,1],[0],[1]],
    [],
    [],
    [],
  ],
  // L3 — full cascade, 4 colours (R=0,A=1,G=2,B=3), 3 empty rods.
  // Colour A is fully free so it can complete first; the two rusted bolts
  // sit at the bottom of rod3 and free over two successive completions.
  [
    [[2],[3],[0],[1]],       // G,B,R,A
    [[0],[3],[2],[1]],       // R,B,G,A
    [[3],[2],[0],[1]],       // B,G,R,A
    [[2,1],[3,1],[0],[1]],   // G(rust),B(rust),R,A
    [],
    [],
    [],
  ],
];

const top = r => r.length ? r[r.length-1] : null;
const movableTop = r => (r.length && !top(r).r) ? top(r) : null;
const isComplete = r => r.length===CAP && r.every(b=>b.c===r[0].c && !b.r);
const isWon = rods => rods.every(r=>r.length===0 || isComplete(r));

function canMove(rods,from,to){
  if(from===to) return false;
  const s=rods[from], d=rods[to];
  const mb=movableTop(s);
  if(!mb) return false;
  if(d.length>=CAP || isComplete(d)) return false;
  if(d.length===0) return true;
  const dt=top(d);
  if(dt.r) return false;
  return dt.c===mb.c;
}
function applyMove(rods,from,to){
  const next = rods.map(r=>r.map(b=>({c:b.c,r:b.r})));
  const b=next[from].pop(); next[to].push(b);
  if(isComplete(next[to])){
    next.forEach((rod,ri)=>{
      if(ri===to) return;
      for(let k=rod.length-1;k>=0;k--){ if(rod[k].r){ rod[k].r=false; break; } }
    });
  }
  return next;
}
const key = rods => rods.map(r=>r.map(b=>b.c+(b.r?'R':'')).join(',')).join('|');

function solvable(level){
  const start = level.map(r=>r.map(b=>({c:b[0], r:!!b[1]})));
  const seen=new Set([key(start)]);
  const stack=[start];
  let visited=0;
  while(stack.length){
    const rods=stack.pop(); visited++;
    if(isWon(rods)) return {ok:true, visited};
    for(let a=0;a<rods.length;a++) for(let b=0;b<rods.length;b++){
      if(canMove(rods,a,b)){
        const nx=applyMove(rods,a,b); const k=key(nx);
        if(!seen.has(k)){ seen.add(k); stack.push(nx); }
      }
    }
    if(visited>2_000_000) return {ok:false, visited, note:'search exhausted'};
  }
  return {ok:false, visited};
}

// sanity: colour counts must be a multiple of CAP, or the level can never be won
function countsOk(level){
  const c={};
  level.flat().forEach(b=>{ c[b[0]]=(c[b[0]]||0)+1; });
  return Object.entries(c).every(([,n])=>n%CAP===0) ? null : c;
}

let allOk=true;
LEVELS.forEach((lv,i)=>{
  const bad=countsOk(lv);
  if(bad){ console.log(`L${i+1}: FAIL colour counts not multiples of ${CAP}:`, bad); allOk=false; return; }
  const r=solvable(lv);
  console.log(`L${i+1}: ${r.ok?'SOLVABLE':'UNSOLVABLE'}  (states explored: ${r.visited})`);
  if(!r.ok) allOk=false;
});
console.log(allOk ? '\nALL LEVELS SOLVABLE ✅' : '\nSOME LEVELS BROKEN ❌');
process.exit(allOk?0:1);
