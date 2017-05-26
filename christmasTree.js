n=5
for(i=1;i<=n;i++) {
console.log('.'.repeat(n-i)+'*'.repeat(2*i-1)+'.'.repeat(n-i))
}
console.log('.'.repeat(n-1)+'*'.repeat(1)+'.'.repeat(n-1))