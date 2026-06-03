// QA-FIRST: fuzz-test the Cable Sort level generator + solver before the game
// is built on it. Generator must NEVER emit an unsolvable board.
// Run: node verify_levels.mjs  (exit 0 = all solvable). Mirrored in index.html.
const CAP = 4;
const rnd = n => Math.floor(Math.random() * n);
const clone = rods => rods.map(r => r.slice());

const top = r => (r.length ? r[r.length - 1] : -1);
const isComplete = r => r.length === CAP && r.every(c => c === r[0]);
const won = rods => rods.every(r => r.length === 0 || isComplete(r));

function canMove(rods, from, to) {
  if (from === to) return false;
  const s = rods[from], d = rods[to];
  if (!s.length) return false;
  if (d.length >= CAP || isComplete(d)) return false;
  if (d.length === 0) return true;
  return top(d) === top(s);
}
function applyMove(rods, from, to) {
  const n = clone(rods);
  n[to].push(n[from].pop());
  return n;
}
const ser = rods => rods.map(r => r.join(',')).join('|');

function solvable(start, cap = 150000) {
  const seen = new Set([ser(start)]);
  const st = [clone(start)];
  let n = 0;
  while (st.length) {
    const rods = st.pop();
    if (++n > cap) return false;
    if (won(rods)) return true;
    for (let a = 0; a < rods.length; a++)
      for (let b = 0; b < rods.length; b++)
        if (canMove(rods, a, b)) {
          const nx = applyMove(rods, a, b), k = ser(nx);
          if (!seen.has(k)) { seen.add(k); st.push(nx); }
        }
  }
  return false;
}

// generator (identical to index.html)
function genLevel(idx) {
  const colors = Math.min(3 + Math.floor((idx - 1) / 4), 6);
  const empties = idx > 12 ? 1 : 2;
  const steps = 14 + idx * 3;
  const solved = () => {
    const r = [];
    for (let c = 0; c < colors; c++) r.push(Array.from({ length: CAP }, () => c));
    for (let e = 0; e < empties; e++) r.push([]);
    return r;
  };
  for (let attempt = 0; attempt < 300; attempt++) {
    let s = solved();
    for (let i = 0; i < steps; i++) {
      const srcs = s.map((r, j) => (r.length ? j : -1)).filter(j => j >= 0);
      const from = srcs[rnd(srcs.length)];
      const dsts = s.map((r, j) => (j !== from && r.length < CAP ? j : -1)).filter(j => j >= 0);
      if (!dsts.length) continue;
      s[dsts[rnd(dsts.length)]].push(s[from].pop());
    }
    if (!won(s) && solvable(s)) return s;
  }
  return solved();
}

const N = 100;
let fails = 0;
for (let i = 1; i <= N; i++) if (!solvable(genLevel(i))) { console.log(`level ${i}: UNSOLVABLE`); fails++; }
console.log(`Generated & checked ${N} cable levels (difficulty 1..${N}). unsolvable: ${fails}`);
console.log(fails === 0 ? '\nGENERATOR ALWAYS SOLVABLE ✅' : '\nBROKEN ❌');
process.exit(fails === 0 ? 0 : 1);
