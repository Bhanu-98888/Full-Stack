const student=[];
function studetails(id,name,age,course,year,adminStatus){
    student.push({
        id: id,
        personalinfo: {name,age},
        academicinfo: {year,course},
        adminstrativeinfo: {adminStatus}
    });
}