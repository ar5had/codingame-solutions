/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseFloat(readline());

// Write an action using print()
// To debug: printErr('Debug messages...');
f=(n,d)=>n>0?`${n} x ${d}`:'xxx' 
r=(d)=>{
a=n/d
n=n%d;
return ~~a;
}
a=[f(r(500),500),f(r(200),200),f(r(20),20),f(r(10),10),f(r(2),2),f(r(.5),.5)]

print(n===0?a.filter(e=>e!=='xxx').join`, `+'€':'IMPOSSIBLE');