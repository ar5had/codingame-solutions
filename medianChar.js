/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var ms = readline().toUpperString().split``;

// Write an action using print()
// To debug: printErr('Debug messages...');

c = e => e.charCodeAt(0)

all = m => m.reduce((t,e)=>t+=c(e),0)

print(String.fromCharCode(all(ms)/ms.length));