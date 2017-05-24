/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline());

// Write an action using print()
// To debug: printErr('Debug messages...');

print(new Array(n).fill(n).map((e, i) => {
  return new Array(i + 1).fill(n).join('')
}).join('\n'));

// Output
// 3
// 33
// 333