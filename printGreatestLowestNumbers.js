/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
// no of total digits
var n = parseInt(inputs[0]);
// no of distinct digits
var m = parseInt(inputs[1]);

// Write an action using print()
// To debug: printErr('Debug messages...');
d='1023456789'
ld='9876543210'
s=d.slice(0,m)
l=ld.slice(0,m)
printErr(n,m)
print(n===1?0:s[0]+('0').repeat(n-m)+s.slice(1),l[0]+('9').repeat(n-m)+l.slice(1));