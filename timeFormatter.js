
var n = 7890320;

a=(b,n)=>b.toString().length<n?'0'.repeat(n-b.toString().length)+b:b
b=c=>{e=~~(n/c);n=n%c;return e}
h=b(3600000)
m=b(60000)
s=b(1000)
i=b(1)
console.log(a(h,2),a(m,2),a(s,2),a(i,3));
