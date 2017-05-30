/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
o=[0,0,0,0,0,0,0,0,0,0];
var inputs = readline().split(' ').sort().map(a=>o[a]++);
o.slice(1,10).map((a,i)=>print((i+1)+':'+'*'.repeat(+a)));