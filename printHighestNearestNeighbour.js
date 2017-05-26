/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var inputs = readline().split(' ');
var r = parseInt(inputs[0]);
var c = parseInt(inputs[1]);
a=[]
for (var i = 0; i < r; i++) {
    var inputs = readline().split(' ');
    for (var j = 0; j < c; j++) {
        if(i!==0 && j!==0 && j!==c-1 &&i!==r-1){
            a.push(inputs[j])    
        }    
    }
}
// Write an action using print()
// To debug: printErr('Debug messages...');
m=a.sort((a,b)=>b-a)
c=inputs.join(' ').match(new RegExp(`${m}`,'g'))
print(m[0]===m[1]?-666:m[0]);