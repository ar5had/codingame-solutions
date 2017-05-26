/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var B = readline();

// Write an action using print()
// To debug: printErr('Debug messages...');

print(B.split('').map(e=>(+e===0?1:0)).join``);