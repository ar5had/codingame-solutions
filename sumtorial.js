/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());

// Write an action using print()
// To debug: printErr('Debug messages...');

print(new Array(N).fill(5).reduce((t,e,i) =>t+=i+1,0));