let user=[];
for(let i=0;i<=5;i++){
    let email=prompt("enter email: ");
    let password = prompt("enter password:");
    user.push({email:email,password:password})
}
console.log(user);
