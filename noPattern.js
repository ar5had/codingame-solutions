/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline());

// Write an action using print()
// To debug: printErr('Debug messages...');
f=e=>Array(e).fill().map((e,i)=>i+1).join``

new Array(n).fill().map((e,i)=>{
    s='+'.repeat(i)
    d=n-i;
    print(s+f(d))    
    } )