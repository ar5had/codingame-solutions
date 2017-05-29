u=readline(r="VALID")
l=u.length
print(/^[a-z0-9]+$/i.test(u)&&l>2&&l<21?r:"IN"+r)