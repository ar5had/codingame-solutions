/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/

var S = readline();

// Write an action using print()
// To debug: printErr('Debug messages...');
m=S.match(/\d+[a-z]+/gi)
n=s=>s.match(/\d+/gi).join``
l=s=>s.match(/[a-z]+/gi).join``

print(m.map(e=>l(e).repeat(n(e))).join``);
//1H1e2ll1o => Hello