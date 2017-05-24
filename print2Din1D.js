// s="gmae"
s="ciaonmdge"
// c i a
// o n m
// d g e
c=Math.sqrt(s.length)//2
S=''
for(i=0;i<c;i++){for(j=0;j<c;j++)
S+=s[i+j*c]}
console.log(S)