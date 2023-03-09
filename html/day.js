
// // 
// function add(){let num1= parseInt(document.getElementById("num1").value) // this helps to use numbers as a number instead of string 
// let num2= parseInt(document.getElementById("num2").value) // no parseInt()means number is a string 
// let result= num1+num2 // also can be used as parseInt() but we prefer the cause it will work as a string in other scopes 
// document.getElementById("result").innerHTML="Result="+result;
// }
// function sayHi(){
//     console.log("hi")
// }
// function sayHello(){
//     console.log(" hello ")

// }
// sayHello()// jun first ma call garyo tei first ma aaucha
// //button attribute gives the addition of the inputs

// sayHi()
//day2
// add() // calling the function
// function sub()
// {
//     let num1= parseInt(document.getElementById("num1").value) // this helps to use numbers as a number instead of string 
// let num2= parseInt(document.getElementById("num2").value) // no parseInt()means number is a string 
// let result= num1 -num2 // also can be used as parseInt() but we prefer the cause it will work as a string in other scopes 
// document.getElementById("result").innerHTML="Result="+result;
// }
// sub()

// function div()
// {
//     let num1= parseInt(document.getElementById("num1").value) // this helps to use numbers as a number instead of string 
// let num2= parseInt(document.getElementById("num2").value) // no parseInt()means number is a string 
// let result= num1 /num2 // also can be used as parseInt() but we prefer the cause it will work as a string in other scopes 
// document.getElementById("result").innerHTML="Result="+result;
// }
// div()
// function mul()
// {
//     let num1= parseInt(document.getElementById("num1").value) // this helps to use numbers as a number instead of string 
// let num2= parseInt(document.getElementById("num2").value) // no parseInt()means number is a string 
// let result= num1 *num2 // also can be used as parseInt() but we prefer the cause it will work as a string in other scopes 
// document.getElementById("result").innerHTML="Result="+result;
// }
// mul()
// function check(){ //checking your age 
//     var age= parseInt(document.getElementById("age").value)
//     if(age >=18){
//         document.getElementById("result").innerHTML="you can vote=";

//     } else 
//     {
//         document.getElementById("result").innerHTML="you cannot vote";

//     }
//     document.getElementById("age").value =''
// }//shorter solution
// function check(){ //checking your age 
//     let age= parseInt(document.getElementById("age").value)
//     const ageElement=document.getElementById("age").value
    
//     const resultElement =document.getElementById("result")
//     if(age >=18){
//       resultElement.innerHTML="you can vote";

//     } else 
//     {
//         resultElement.innerHTML="you cannot vote";

//     }
//     ageElement.value =''
// }

// getayy 
// function getFullDay(){
//     const dayElement= document.getElementById("getday")
//     const resultElement= document.getElementById("result")
//     switch(dayElement.value.toLowerCase()){
//         case "sunday":
//             resultElement.innerHTML="WEEKEND!!"
//             break;
//         case "friday":
//             resultElement.innerHTML="WEEKEND!!"
//             break;
        
//         case "saturday":
            

//             resultElement.innerHTML="WEEKEND!!"
//             break;

//         case "monday":
//         case "tuesday":
//         case "wednesday":
//         case "thursday":
           

//             resultElement.innerHTML="WEEKDAY!!"
//             break;
        
//         default:
//             resultElement.innerHTML="invalid day!"


//     }
//  dayElement.value=''
// }
// function check(){ //checking your age 
//     const ageElement=document.getElementById("age")
//     let age= parseInt(ageElement.value)
//     const resultElement =document.getElementById("result")
//     if(age>=0 &&age <=18){
//       resultElement.innerHTML="A";

//     }else  if( age <=35 )
//     {
//         resultElement.innerHTML="B";

//     }else  if( age <=60 )
//     {
//         resultElement.innerHTML="C";

//     }else if    (age >60 )
//     {
//         resultElement.innerHTML="D";

    
//     }
//     else if( age <0)
//     {
//         resultElement.innerHTML='invalid age'
//     }

//     ageElement.value =''
// }

// function group(){ //checking your age 
//     let age= parseInt(document.getElementById("age").value)
//     const ageElement=document.getElementById("age").value
    
//     const resultElement =document.getElementById("result")
//     if(age <=18){
//       resultElement.innerHTML="child";

//     }
//     else if   (age >60 )
//     {
//         resultElement.innerHTML="old";

    
//     }else  if(age >=18 )
//     {
//         resultElement.innerHTML="young";

//     }

//     ageElement.value =''
// }

function day(){
    const dayElement = document.getElementById("get day")
    const resultElement= document.getElementById("result")
    switch(getElement.value.toLowercase()){
    case"sunday":
    case" saturday":
    case "friday":
    resultElement.innerHTML=" WEEKEND!!!"
    break ;
    case "monday":
    case"tuesday":
    case "wednesday":
    case "thursday":
    resultElement.innerHTML=" REGULAR WEEK DAYS!";
    break;
    default:
    resultElement.innerHTML=" invalid input please try again!"

        }
        resultElement.value=""

}