function newa(a){
    const arr=[];
    for(let i=0;i<a.length;i++){
        if(arr.indexOf(a[i])==-1){
            arr.push(a[i]);
        }
    }
    return arr;

}
let array1=[1,2,3,4,4,2,5];
console.log(newa(array1));
