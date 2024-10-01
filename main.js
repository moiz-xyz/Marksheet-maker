
let name = prompt("What is your name");
let sub1 = parseInt(prompt("Enter your marks in First subject out of 100"));
let sub2 = parseInt(prompt("Enter your marks in second subject out of 100"));
let sub3 = parseInt(prompt("Enter your marks in third subject out of 100"));
let sub4 = parseInt(prompt("Enter your marks in fourth subject out of 100"));
let sub5 = parseInt(prompt("Enter your marks in fifth subject out of 100"));
let sub6 = parseInt(prompt("Enter your marks in sixth subject out of 100"));
let totalmarks = 600;
let obtained_marks = sub1 + sub2 +sub3 + sub4 + sub5 +sub6;
let percent = obtained_marks/totalmarks *100;

let remarks1 = "Well done";
let remarks2 = "Good job";
let remarks3 = "Satisfactory";
let remarks4 = "Needs Improvmnet"
let remarks5 = "You are fail"
let remarks6 = "Your obtained marks are greator than total marks 600 iam unable to calculate it";


document.write( name + "<br>" +
    "Marks in subject 1 ="+" " +sub1 + "<br>" +
    "Marks in subject 2 ="+" " +sub2 + "<br>" +
    "Marks in subject 3 ="+" " +sub3 + "<br>" +
    "Marks in subject 4 ="+" " +sub4 + "<br>" +
    "Marks in subject 5 ="+" " +sub5 + "<br>" +
    "Marks in subject 6 ="+" " +sub6 + "<br>" +
      "<h3>" + "Total marks are 600" +"</h3>"+
     "<h3>" + "Your obtained marks are" +"</h3>" + obtained_marks +
       "<h3>" + "Your obtained percentage is" +"</h3>"+ percent + " " );

       if (percent >100){
 alert(remarks6)
 }else if (percent >= 90 && percent <=100){
    document.write(remarks1)
} else if (percent >= 80 && percent <=89){
    document.write(remarks2)
} else if( percent >= 70 && percent <=79 ){
    document.write(remarks3)
} else if (percent >= 60 && percent <=69){
    document.write(remarks4)
}  else {
        document.write(remarks5)
    } 