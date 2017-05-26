/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var n = parseInt(readline());
var names = readline().split` `;

// Write an action using print()
// To debug: printErr('Debug messages...');
x='conspiracy'
for(i in names) {
j=names[i]
if(names.join` `.match(new RegExp(`${j}`,'g')).length > (~~(names.length/2)))
    x=j;
}
print(x);