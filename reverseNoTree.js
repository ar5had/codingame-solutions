/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());

// Write an action using print()
// To debug: printErr('Debug messages...');

print(Array(N).fill(N).map((e,i)=>String(e).repeat(N-i)).join`\n`);