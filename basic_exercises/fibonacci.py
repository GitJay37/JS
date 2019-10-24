a = 1
b = 1
print(a)
print(b)
i = 0
lim = 10
while (i < lim):
    sum = a+b
    a = b
    b = sum
    print(sum)
    i += 1

