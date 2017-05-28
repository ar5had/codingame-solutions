_=readline
c=+_()
e=+_()
s=1
print(c,e)
while(c>1&&e>1){s+=c
c/=e
if(c==1) break
}print(e>1?~~s:e==0?c:'IMPOSSIBLE')