/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var l = readline();

// Write an action using print()
// To debug: printErr('Debug messages...');
a = new Array(l.length).fill(1).map((e,i)=> t = i===0?l:l.slice(-i)+l.slice(0,l.length-i))
a.push(l)
print(a.join`\n`);

// Codingame
// eCodingam
// meCodinga
// ameCoding
// gameCodin
// ngameCodi
// ingameCod
// dingameCo
// odingameC
// Codingame