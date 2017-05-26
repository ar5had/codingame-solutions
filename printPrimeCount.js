N=+readline()
z=Array(N).fill(0)
d=(m,n=0,c=0)=>n>m?c==2:d(m,++n,m%n==0?++c:c)
console.log(z.reduce((t,e,i)=>d(i+1)?++t:t))

// prime function => d=(m,n=0,c=0)=>n>m?c==2:d(m,++n,m%n==0?++c:c)