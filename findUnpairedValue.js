/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
var inputs = readline().split(' ')

inputs = inputs.filter(a => inputs.indexOf(a) === inputs.lastIndexOf(a))
print(inputs[0])

// or

/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var N = parseInt(readline());
var inputs = readline().split(' ');
var set = new Set();
for (var i = 0; i < N; i++) {
    var value = parseInt(inputs[i]);
    if(set.has(value)) set.delete(value)
    else
    set.add(value)
    
}

// Write an action using print()
// To debug: printErr('Debug messages...');
for(i of set)
print(i);