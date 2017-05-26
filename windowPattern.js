/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline());

// Write an action using print()
// To debug: printErr('Debug messages...');

t=2*n+3
for(i=0;i<t;i++){
    if(i===0 || i===t-1)
    print("-".repeat(t));
    else if(i===~~(t/2)){
        print("|"+"-".repeat(n)+"+"+"-".repeat(n)+"|")    
    }
    else {
         print("|"+".".repeat(n)+"|"+".".repeat(n)+"|")    
        }}