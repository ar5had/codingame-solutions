/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
[m1,s1]= inputs[0].split`:`;
[m2,s2]= inputs[1].split`:`;
l1=m1*60 + +s1
l2=m2*60 + +s2
// Write an action using print()
// To debug: printErr('Debug messages...');
printErr(l1,l2)
l3=l2-l1
m3=~~(l3/60)
l3%=60
s=(e,n)=>e.toString().length<n?s('0'+e,n):e
print(`${m3}:${s(l3,2)}`);
// 0:00 0:01 => 0:01