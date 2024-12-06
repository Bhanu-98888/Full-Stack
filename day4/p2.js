let experience = 4,per=9;
const salary = 200;
if(experience>5&& per>8){
    console.log("employee gets salary hike of 20%",salary*.2);
}
else if((experience>3&&experience<=5)&&per>7){
    console.log("employee gets salary hike of 10%",salary*.1);
}
else if(experience<3){
    console.log("employee gets salary hike of 5%",salary*.05);
}