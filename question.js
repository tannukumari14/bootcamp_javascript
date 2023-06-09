//const x=[1,2,3]
//const[y,z,a]=x;
//console.log(a)

//const arr=[10,12,14,90,87]
//let sum=arr.reduce(
//	(r,x)=>r+x
//);
//console.log(sum)

//t=int(input())
//for i  in range(t):
    n = int(input())
    a =  sorted(list(map(int,input().split())))
    ans = []
    for i in range(n):
        if i%2 == 0:
            ans.append(a.pop(0))
        else:
            ans.append(a.pop())
    print(*ans)        
