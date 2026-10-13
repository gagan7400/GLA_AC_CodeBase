console.log("file connected")

// variable 
let  user = "raj";
// var  username  = "elon";
const price = 9000;
num = 10;
// console.log(user ,username , price ,num )

//  var keyword/:- this keyword is oldest keyword ,
// its globally scoped and functional scope variable
//reassignment and redeclration is possible in this 
// keyword 
//hoisting :- this process change the declration of the varibale to top of the file.


console.log(username);
var  username  = "elon";
console.log(username);
function sum(){
    console.log(username);
    var innerusername = "function";//this variable is not accessible outside the functiuon because of functional scoped.
    console.log(innerusername)
}
sum();
// console.log(innerusername);//it gives us error of not defined becuase of defined inside the func

username = "updated data";//reassignment 
console.log(username);

var username  = "newusername";//redeclration 
console.log(username);

// let keyword :- added in javascript in 2015 in es6 update.it declare blocked scoped variable
console.log(client);
let client = "hello";
console.log(client);
{
    let innervariable = "innerdata"
    console.log(innervariable);
}
// console.log(innervariable);
//it gives us error

//reassigment is possible in let keyword
 client = "newdata";
 console.log(client);

 //redeclaration is not possible in let keyword

//  let client = "again declare";
 //it gives us error .because blocked scoped variables are not redeclare .


//  const keyword :- added in es6 2015 , blocked scoped variable , reassignment and redeclaration is not possible in this keyword


// vairbale  name selection rules
//  cannot start with numberical value.
// do not use any special charchter except _ and $ ,
// do not use any space btw variable name.
// do not use  any reserved keyword

// data types
// primitive and non primitive data types

// primitive are
// string , number ,boolean,BigInt ,null ,undefined, symbol

// non primitive :-
//array , object, function,

// let 1a = "raj"

