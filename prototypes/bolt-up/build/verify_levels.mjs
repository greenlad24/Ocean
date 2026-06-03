// QA tool: fuzz-tests the Bolt Up level GENERATOR + rust-cascade solver.
// The generator must NEVER emit an unsolvable board. Run: node verify_levels.mjs
// This logic is mirrored exactly inside index.html.
const CAP = 4;
const rnd = n => Math.floor(Math.random() * n);
const clone = rods => rods.map(r => r.map(b => ({ c: b.c, r: b.r })));

const top = r => (r.length ? r[r.length - 1] : null);
const movableTop = r => (r.length && !top(r).r ? top(r) : null);
const isComplete = r => r.length === CAP && r.every(b => b.c === r[0].c && !b.r);
const won = rods => rods.every(r => r.length === 0 || isComplete(r));

function canMove(rods, from, to) {
  if (from === to) return false;
  const s = rods[from], d = rods[to];
  const mb = movableTop(s);
  if (!mb) return false;
  if (d.length >= CAP || isComplete(d)) return false;
  if (d.length === 0) return true;
  const dt = top(d);
  if (dt.r) return false;
  return dt.c === mb.c;
}
function applyMove(rods, from, to) {
  const n = clone(rods);
  n[to].push(n[from].pop());
  if (isComplete(n[to])) {
    n.forEach((rod, ri) => {
      if (ri === to) return;
      for (let k = rod.length - 1; k >= 0; k--) { if (rod[k].r) { rod[k].r = false; break; } }
    });
  }
  return n;
}
const ser = rods => rods.map(r => r.map(b => b.c + (b.r ? 'R' : '')).join(',')).join('|');

function solvable(start, cap = 200000) {
  const seen = new Set([ser(start)]);
  const stack = [clone(start)];
  let n = 0;
  while (stack.length) {
    const rods = stack.pop();
    if (++n > cap) return false;
    if (won(rods)) return true;
    for (let a = 0; a < rods.length; a++)
      for (let b = 0; b < rods.length; b++)
        if (canMove(rods, a, b)) {
          const nx = applyMove(rods, a, b), k = ser(nx);
          if (!seen.has(k)) { seen.add(k); stack.push(nx); }
        }
  }
  return false;
}

// ---- the generator (identical copy lives in index.html) ----
function genLevel(idx) {
  const colors = Math.min(3 + Math.floor((idx - 1) / 5), 5); // 3..5
  const empties = 2;
  const rustN = idx < 3 ? 0 : Math.min(Math.floor((idx - 2) / 3), colors);
  const steps = 16 + idx * 3;

  const solved = () => {
    const r = [];
    for (let c = 0; c < colors; c++) r.push(Array.from({ length: CAP }, () => ({ c, r: false })));
    for (let e = 0; e < empties; e++) r.push([]);
    return r;
  };

  for (let attempt = 0; attempt < 300; attempt++) {
    // scatter: move random tops to random non-full other rods (ignore colour)
    let s = solved();
    for (let i = 0; i < steps; i++) {
      const srcs = s.map((r, j) => (r.length ? j : -1)).filter(j => j >= 0);
      const from = srcs[rnd(srcs.length)];
      const dsts = s.map((r, j) => (j !== from && r.length < CAP ? j : -1)).filter(j => j >= 0);
      if (!dsts.length) continue;
      s[dsts[rnd(dsts.length)]].push(s[from].pop());
    }
    if (won(s) || !solvable(s)) continue;           // need a genuinely scrambled, solvable base
    if (rustN === 0) return s;
    // try to add rust without breaking solvability
    for (let rt = 0; rt < 12; rt++) {
      const cand = clone(s);
      const spots = [];
      cand.forEach((rod, ri) => rod.forEach((_, bi) => { if (rod.length > 1) spots.push([ri, bi]); }));
      for (let k = spots.length - 1; k > 0; k--) { const j = rnd(k + 1);[spots[k], spots[j]] = [spots[j], spots[k]]; }
      let placed = 0;
      for (const [ri, bi] of spots) { if (placed >= rustN) break; cand[ri][bi].r = true; placed++; }
      if (solvable(cand)) return cand;
    }
    return s; // fall back to solvable no-rust base
  }
  return solved(); // ultimate fallback (already solved = trivially solvable)
}

// ---- fuzz ----
const N = 80;
let fails = 0, withRust = 0, maxStates = 0;
for (let i = 1; i <= N; i++) {
  const lv = genLevel(i);
  if (lv.some(r => r.some(b => b.r))) withRust++;
  const ok = solvable(lv);
  if (!ok) { console.log(`level ${i}: UNSOLVABLE`); fails++; }
}
console.log(`Generated & checked ${N} levels (difficulty 1..${N}).`);
console.log(`  with rust: ${withRust}   unsolvable: ${fails}`);
console.log(fails === 0 ? '\nGENERATOR ALWAYS SOLVABLE ✅' : '\nGENERATOR PRODUCED BROKEN LEVELS ❌');
process.exit(fails === 0 ? 0 : 1);
