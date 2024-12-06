function checkinv(name,quantity){
    if(quantity<10){
        console.log("restock imediately");
    }
    else if(quantity>=10&& quantity<=20){
        console.log("stock is low");
    }
    else{
        console.log("no alter needed");
    }
}
const quantity=44;
checkinv();