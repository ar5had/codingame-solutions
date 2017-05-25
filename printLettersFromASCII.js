s=readline()
a=s.match(/.{1,3}/g)
print(s.length%3==0?a.reduce((t,e)=>t+String.fromCharCode(+e),''):'ERROR')