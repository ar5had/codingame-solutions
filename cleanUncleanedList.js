/**
 * Auto-generated code below aims at helping you parse
 * the standard input according to the problem statement.
 **/
cn = []
un=[]
z=[]
m=(e)=>e.toLowerCase().replace(/^[a-b]/,'').replace(/ /g,'')
var N = parseInt(readline());
for (var i = 0; i < N; i++) {
    k=readline()
    cn.push(k);
    z.push(m(k))
}
var M = parseInt(readline());
for (var i = 0; i < M; i++) {
    un.push(readline());
}
for (var i = 0; i < M; i++) {
    c=z.indexOf(m(un[i]))
    // print(z)
    print(cn[c]);
}