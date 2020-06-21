// Assignment # 21-25
// question no 1
// var a =prompt(" Your First Name ") 
// var a1 =prompt(" Your Last Name ") 
// alert(" Hello! Welcome to my website " + a + " "  + a1 )


// question no 2
// var a =prompt("Your Favourite Phone")
// document.write( " My Favourite Phone is : " + a + "<br>" )
// function wordcount( str ) {
//     return str.length;
//  } 
// document.write("Length of String : " + (wordcount(   a) ) )


// question no 3
// var a = "Pakistan";
// document.write(" String : " + a + "<br>")
// document.write(" Index of ' k ' : " + ( a.indexOf("k")));


 // question no 4
// var a = "Hello World";
// document.write(" String : " + a + "<br>")
// document.write(" Index of ' l ' : " + ( a.indexOf("l" , 9)));


// question no 5
// var a = "Pakistani";
// document.write(" String : " + a + "<br>")
// document.write(" Character at index  ' 3 ' : " + ( a.charAt("3")));


// question no 6
// var a =prompt(" Your First Name ") 
// var a1 =prompt(" Your Last Name ") 
// alert(" Hello! Welcome to my website " + a + " "  + a1 )


// question no 7
// var city = "Hyderabad"
// var city1 = city.replace ('Hyder' ,  'Islam')
// document.write(" City : " + city + "<br>")
// document.write(" After replacement : " + city1)


// question no 8
// var message = "Ali and Sumi are best freiends. They play cricket and football together "
// var message1 = message.replace (/and/g , '&')
// document.write( message + "<br>")
// document.write(" After replacement : " + message1)


// question no 9
// var Value = "472"
// var Value1 = 472
// document.write(" Value : " +  Value   + "<br>" + " Type : String " + "<br>" )
// document.write(" Value : " +  Value1   + "<br>" + " Type : Number " )


// question no 10
// var Value = prompt("Enter value")
// var Value1 = Value.toUpperCase( " ")
// document.write(" Value : " +  Value   + "<br>"  )
// document.write(" Value : " +  Value1   + "<br>"  )


// question no 11
// var Value = "javascript"
// var Value1 = Value[0].toUpperCase() + Value.slice(1)
// document.write(" Value : " +  Value   + "<br>"  )
// document.write(" Value : " +  Value1   + "<br>"  )


// question no 12
// var num = 35.35;
// var num1 =3535 
// document.write("  Number : " +  num   + "<br>"  )
// document.write(" Result : " +  num1   + "<br>"  )



// question no 13
// var username = prompt("Enter your name : ")
// var numChars = username.length;
// for( var  i=0; i<numChars; i++)
// if (username.slice (i, i+1) ===   '\!' ){
//     alert("Please! Enter a valid username")
// } 
// else if (username.slice (i, i+1) ===   '\,' ){
//     alert("Please! Enter a valid username")
// } 
// else if (username.slice (i, i+1) ===   '\.' ){
//     alert("Please! Enter a valid username")
// } 
// else if (username.slice (i, i+1) ===   '\@' ){
//     alert("Please! Enter a valid username")
// } 


//  question no 14
// var Array = [" Cake " , " Patties ", " Lays" , " Apple pie "];
// document.write(Array)
// var yourOrder = prompt("Welcom!What do you want to order?");
//  yourOrder = yourOrder.toLocaleLowerCase();
//  var arr = ["cake", "patties", "lays", "apple pie"];
//  for (var i = 0; i <= arr.length; i++) {
//  if (yourOrder === arr[i]) {
//  alert( yourOrder + " is available in index 2 ");
//  }
// else {
//     alert(yourOrder + " is not available in bakery"  )
// }
// }


 //  question no 15
// var a = prompt("enter a password");
// var b = /^[A-Za-z0-9]/;
// if ( a.length <= 6 ){
//     alert("Password not less then 6 letters" + '\n' + "Plz! Enter a valid password ")
// }
// else if(a === b ){
//     alert ("Your password has been submitted")
//     } 


//  question no 16
// var str = "University Of Karachi "
// var array = str.split('') 
// console.log(array)


//  question no 17
// var input = prompt("Enter your word ")
// var input1 = input.slice(-1)
// document.write("  User input : " +  input   + "<br>"  )
// document.write(" Last character of input : " + input1   + "<br>"  )

 

// question no 18
// var txt = "Text : The quick brown fox jumps over the lazy dog. "
// count = 0
// for (var i = 0; i < txt.length; i++){
//     if (txt.charAt(i) === 't' ){
//         count++;
//     }
// }
// document.write( txt + "<br>")
// document.write( "The occurance of the is : " + count)



// Assignment no 26-30

// question no 1
// var a = 3.45214 
// var a1 = Math.round(a)
// var a2 = Math.ceil(a)
// var a3 = Math.floor(a)
// document.write( "Number" + a + "<br>")
// document.write( "Round off :" + a1 + "<br>")
// document.write("Ceil value : " + a2 + "<br>")
// document.write( "Floor Value : " + a3 + "<br>")


// question no 2
// var a = -2.673 
// var a1 = Math.round(a)
// var a2 = Math.ceil(a)
// var a3 = Math.floor(a)
// document.write( "Number" + a + "<br>")
// document.write( "Round off :" + a1 + "<br>")
// document.write("Ceil value : " + a2 + "<br>")
// document.write( "Floor Value : " + a3 + "<br>")


// question no 3
// var a = -4
// var a1 =Math.abs(a)
// document.write( " The absolute value of " + a  +  " is " + a1)


// question no 4
// var a = Math.random()*4 ;
// var a1 = a.toFixed()
// var b =Math.random()*4
// var b1 =b.toFixed()
// document.write( "random dice value : " + a1  + "<br>")
// document.write( "random dice value : " + b1)

// question no 5
// var headuser = prompt()
// var tailuser = prompt()
// var toss = Math.random()*2;
// var floor = Math.floor(toss)
// if (floor === 0){
// alert ("Head")
// }
// else if(floor === 1) {
//     alert("tail")
// }
// document.write( headuser + "<br>" + " random coin value    head "  + "<br>" )
// document.write( tailuser + "<br>" + " random coin value   tail"  )

// question no 6
// var a = Math.random()*100
// var a1 = Math.ceil(a)
// document.write( "random number between 1 and 100 : " +  a1 )

// question no 7
// var a = prompt( "Enter your weight")
// document.write("The weight of user is : " + a + " Kilograms.") 

// question no 8
// var a = 7;
// var a1 = prompt("Enter number between 1-10")
// if ( a1 == a){
// alert("Congratulations!")
// }
// else {
// alert("Oh! Try again... ")
// }


// Assignment no 31-35

// question no 1
// var a = new Date()
// document.write(a)


// question no 2
// var monthNames = ["Janurary" , "Feburary" , "March" , "April" , "May" , "June" , "July" , "August " , "September" , "October" , "November" , "December" ]
//  var now = new Date();
//  var theMonth = now.getMonth();
//  var nameOfMonth = monthNames[theMonth];
// document.write(nameOfMonth)


// question no 3
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
// document.write(nameOfToday)

// question no 4
// var dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
//  var now = new Date();
//  var theDay = now.getDay();
//  var nameOfToday = dayNames[theDay];
// document.write(nameOfToday)
// if (nameOfToday === "sat"){
//     alert( " Its Fun day  " )
// }


// question no 5
// var a =new Date();
// var a1 = a.getDate();
// document.write(a1)
// if ( a1 == "1-15"){
//     alert(" First fifteen days of Month")
// } 
// else{
//     alert(" Last days of month")
// }


// question no 6
// var start = new Date( "jan 01,1970")
// var end = new Date();
// diff = 0
// milliseconds = 1000;
// diff = end - start 
// document.write(  "Current Date : " + end  + "<br>")
// document.write(Math.floor(diff / milliseconds) + " Elapsed milliseconds had passed since january 1, 1970 " + "<br>")
// seconds = 1000*60;
// diff = end - start 
// document.write(Math.floor(diff / seconds) + " Elapsed seconds had passed since january 1, 1970 ")


// question no 7
// var a = prompt ("Enter time")
// if (a <= 12){
//     alert("Its noon! AM ")
// }
// else if (a >= 12) {
//     alert("its PM")
// } 
  

// question no 8
// var tarikh = new Date( "dec 31, 2020")
// document.write( "Later Date : "+ tarikh)


// question no 9
// var start = new Date( "june 18, 2015")
// var end = new Date();
// diff = 0
// days = 1000*60*60*24;
// diff = end - start
// document.write(Math.floor(diff / days) + " days has been passed since 1st Ramdaan, 2015 ")


// question no 10
// var referance = new Date( "dec 5, 2015")
// var end = new Date("jan 1, 2015" );
// diff = 0
// seconds = 1000*60;
// diff = referance - end 
// document.write(referance + "<br>")
// document.write(Math.floor(diff / seconds) + " seconds had passed since begining of 2015 ")

// question no 11
// var date = new Date()
// var date1 = new Date("june 19,  2020 12:00:00")
// document.write(date + "<br>")
// document.write( "1 hour ago it was ,  " + date1)


// question no 12
// var today = new Date();
// var a = new Date("jun 18, 1920")
// document.write( "Current Date is : "+ today  + "<br>") 
// document.write( "100 Years back, It was " + a)

// question no 13
// var a = prompt(" Enter your age ") 
// var b = 2020-a 
// document.write("Your age is : " + a + "<br>" )
// document.write("Your birth year is : " + b )

// question no 14
// document.write("K-Electric Bill <br> ")
// var a = "ABC customer"
// var b = "June"
// var c =  410 
// var d =  16 
// var e =  c*d 
// var latePayment= 350 
// var f = e + latePayment
// document.write( "Customer Name : " + a + "<br>" + "Month : " + b + "<br>" + "No of Units : " + c + "<br>" + "Charges per Unit :  " + d + "<br>" )
// document.write("Net Amount Payable (Within due date) : " + e + "<br>" + " Late Payment Charge : " + latePayment + "<br>" +  "Gross Amount Payable (After due date) : " + f)



// Assignment no 36-38

// QUESTION NO 1
// function date( Date){
// document.write(Date)
// }
// date(new Date())


// QUESTION NO 2
// function greeting( greet){
//  alert (greet)
//     }
// var a = prompt("Enter your First  Name")
// var a1 = prompt("Enter your Last  Name")
// greeting(" Hello! " + a  + " " + a1 )


// QUESTION NO 3
// function add( ){
//      alert ( n1+n2)
// }
// n1 = parseInt(prompt("Enter 1st Value"))
// n2 = parseInt(prompt("Enter 2nd Value") )   
// add (n1+n2)
          

// QUESTION NO 4
// function calc( number1, opr, number2){
// if (opr === " + "){
//     return number1 + number2
// }
// else if (opr === " - "){
//     return number1 - number2
// }
// else if (opr === " * "){
//     return number1 * number2
// }
// else if (opr === " / "){
//     return number1 / number2
// }
// }
// var result = calc (5, " + " ,  1 ) 
//   document.write(result +  "<br>")        
//   var result1 = calc (5 , " * " , 1 )
//   document.write(result1 +  "<br>")        
//   var result2 = calc (5 , " - " , 1 )
//   document.write(result2 )        


// QUESTION NO 5
// var i,type
// function square() {
// alert(n1*n1)
// }
// n1 = parseInt(prompt("Enter 1st Value"))
// square(n1*n1)


// QUESTION NO 9
// function Area(){
//     document.write("Area of rectangle is : " + c)
// }
// var a =20
// var b = 10
// var c = a*b
// Area(c)


// QUESTION NO 10
// var word = prompt("")
// var check ="";
// for (var i = word.length -1; i >= o; i--){
//     check += word[i]
// }
// if(word === check){
//     document.write(word + "is a palindrome word")
// }


// QUESTION NO 12
// function longWord(str){
// var newString = str.split(" ")
// newString.sort(function(a, b){return b.length - a.length
// })
// return newString[ 0]
// }
// console.log("Web Development Tutorial")
// console.log(longWord("Web Development Tutorial"))


// QUESTION NO 13
// function countletter(){
//     document.write("The occurance of o is :  " + count )    
// }
// var  String =  'JSResources.com ' +  'o'  
// count = 0;
// for ( i = 0; i < String.length; i++){

//     if (String.charAt(i) === 'o'){
//         count++
//     }
// }
// countletter(count)

// QUESTION NO 14
// document.write(THE GEOMETRIZER)
// function calcCircumference( ){
// document.write( "The Circumference is : " + circumference + "<br>");
// }
// var radius = 20
// var circumference =Number(2*3.14*20)
// calcCircumference( circumference)
// function calcArea( area, radius){
//     document.write( area);
//     }
//     var radius = 20
//     var area =Number(3.14*20*20)
//     calcArea( "The Area is : " + area)
















