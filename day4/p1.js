function prime(n)
{
    if(n<2){
        return false;
    }
    for(let i=2;i>=Math.sqrt(n);i++){
        if(n%i==0){
            return false;
        }
        return true;
    }
}
let p=[],num=2;
while(p.length<10){
    if(prime(num)){
        p.push(num*num);
        }
    num++;  
    }
 console.log(p);

