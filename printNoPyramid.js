const n = parseInt(readline());

print(new Array(n).fill(n).map((e, i) => 
  new Array(i + 1).fill(n).join('')
).join('\n'));

// Output when n = 3
// 3
// 33
// 333