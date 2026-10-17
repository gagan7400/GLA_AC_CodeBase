// // console.log("file connected")

// // // variable 
// // let  user = "raj";
// // // var  username  = "elon";
// // const price = 9000;
// // num = 10;
// // // console.log(user ,username , price ,num )

// // //  var keyword/:- this keyword is oldest keyword ,
// // // its globally scoped and functional scope variable
// // //reassignment and redeclration is possible in this 
// // // keyword 
// // //hoisting :- this process change the declration of the varibale to top of the file.


// // console.log(username);
// // var  username  = "elon";
// // console.log(username);
// // function sum(){
// //     console.log(username);
// //     var innerusername = "function";//this variable is not accessible outside the functiuon because of functional scoped.
// //     console.log(innerusername)
// // }
// // sum();
// // // console.log(innerusername);//it gives us error of not defined becuase of defined inside the func

// // username = "updated data";//reassignment 
// // console.log(username);

// // var username  = "newusername";//redeclration 
// // console.log(username);

// // // let keyword :- added in javascript in 2015 in es6 update.it declare blocked scoped variable
// // console.log(client);
// // let client = "hello";
// // console.log(client);
// // {
// //     let innervariable = "innerdata"
// //     console.log(innervariable);
// // }
// // // console.log(innervariable);
// // //it gives us error

// // //reassigment is possible in let keyword
// //  client = "newdata";
// //  console.log(client);

// //  //redeclaration is not possible in let keyword

// // //  let client = "again declare";
// //  //it gives us error .because blocked scoped variables are not redeclare .


// // //  const keyword :- added in es6 2015 , blocked scoped variable , reassignment and redeclaration is not possible in this keyword


// // // vairbale  name selection rules
// // //  cannot start with numberical value.
// // // do not use any special charchter except _ and $ ,
// // // do not use any space btw variable name.
// // // do not use  any reserved keyword

// // // data types
// // // primitive and non primitive data types

// // // primitive are
// // // string , number ,boolean,BigInt ,null ,undefined, symbol

// // // non primitive :-
// // //array , object, function,

// // // let 1a = "raj"
// // //13 oct topics 
// // // topics  :- Operator , , Scope , Type Conversion , Math Object , Boolean , Comparsion , String  Implicit cericion , Explicit conversion.

// // //2nd class :- If , else-if ,else if ladder ,Nested if , Switch, For , While ,Do while , for of ,for In, nestedloop.

// // // scope 
// // // /1 Global scope
// // // we can declare variable anywhere in the file and can access to any part of the file ,outside any block.

// // // functional scope:- when any variable is declared inside any function then ,we can access it outside that block 

// // //block scope:- when any variable is declared inside any block then we can not access it outside that block.

// // // operators :- 
// // // arithmatic operator:- +,- ,*,/, ** ,%
// let a = 10;
// let b = 20;
// console.log(a + b);
// console.log(10 + "10")//1010
// console.log(10 + "sdv")//NaN
// console.log(10 - 10)
// console.log(a ** b)
// console.log(a % b);


// // comparison 
// // < , >,<=,>=,== ,=== ,!= ,!==
// console.log(10 == "10")
// console.log(10 === "10");
// // ==  it only compare the values
// //=== :- it compare both the values and data types
// console.log(10 != '10');
// console.log(10 !== "10");

// // assignment operator
// // =,+=, -= ,**= ,%= ,/= ,++ ,--
// let x = 10;
// x += 10;//x = x +10;
// x -= 10;//x = x -10;
// x *= 10;//x = x *10;
// x /= 10;//x = x /10;
// x **= 10;//x = x **10;
// console.log(x);

// // increment++ and decrement --
// let p = 10;
// // pre increment :- first increment then print/use
// //post increment :- first print/use then increment
// // p++ ;
// console.log(p++);//10
// console.log(p);//11
// console.log(p + p++);

// // pre decrement :- first decrement then print/use
// //post decrement :- first print/use then decrement
// let y = 10;
// // y-- 
// console.log(y--);
// console.log(y);

// console.log(y-- + --y);

// // logical operator
// // &&  ,|| ,!
// console.log(true && true) //true
// console.log(true && false) //false
// console.log(false && true) //false
// console.log(false && false) //false

// console.log(true && "hello");
// console.log(false && "hello");

// console.log(true || true) //true
// console.log(true || false) //true
// console.log(false || true) //true
// console.log(false || false) //false

// console.log(true || "hello");//true
// console.log(false || "hello");//hello

// console.log(!true)
// console.log(!false)
// console.log(!0)
// console.log(!1)
// console.log(!"")
// console.log(!" ")
// console.log(!null)
// console.log(!undefined)

// // Math Object :
// console.log(Math.random() * 99999)
// console.log(Math.round(1.6))
// console.log(Math.floor(10.9))
// console.log(Math.abs(-10));
// console.log(Math.trunc(4.3))
// console.log(Math.ceil(2.1));
// console.log(Math.sqrt(144))
// console.log(Math.SQRT2)
// console.log(Math.pow(2, 3))
// console.log(Math.PI)
// console.log(Math.min(12, 1, 3, 1,))
// console.log(Math.max(1, 2, 3, 2, 3, 2))
//     ;

// // type coversion :- 
// // Implicit cerison  
// //explicit  conversion 
// console.log(10 - "10")//it convert into number
// console.log(10 + "10")//into string
// console.log(10 == "10");


// // explicit conversion
// // Number , String ,Boolean 
// console.log(Number("354"))
// console.log(Number("dfbsdf"));
// console.log(Boolean("hello"));
// console.log(Boolean(null))
// console.log(Boolean(undefined));
// console.log(String(88));
// console.log(String(true));
// console.log(String([1, 2, 3]));

// // string 
// // "dffdsj" 'sdhhd' ,`kjvsf`;
// console.log('object')

// let str = "javascript";
// // string methods 
// console.log(str[0]);
// console.log(str.at(0))
// console.log(str.charCodeAt(1))//it find the ascci code of the value present at given index.
// console.log(str.charAt(0));
// console.log(str.indexOf("a"));
// console.log(str.lastIndexOf("a"));//-1 when the value is not present 
// console.log(str.startsWith("java"))
// console.log(str.endsWith("java"))
// console.log(str.includes("java"));
// let data = "hello";
// console.log(data.length)
// console.log(data.trim());
// console.log(data.trimStart());
// console.log(data.trimEnd());
// console.log(data.slice(0, 11))//startindex ,endindex+1 , it copy the give index values;
// console.log(data.substring(0, 11));
// // console.log(data.replace("a","k"));
// console.log(data.replaceAll("a", "k"));
// console.log(data.padEnd(10));
// console.log(data.padStart(10));
// console.log(data.toUpperCase());
// console.log(data.toLowerCase());


// let para = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos, in?"
// console.log(para.indexOf("dolor"));
// console.log(para.includes("dolor"));
// console.log(para.split("l"));


// // ternary operator 
// //  condition ? "true" :"false";
// let check = !true ? "it depend" : " it not depend";
// console.log(check);

// // if , if else , else-if ladder , nested if 
// if (true) {
//     console.log("condition is true ")
// }

// if (true) {
//     console.log("condition is true")
// } else {
//     console.log("condition is not true")
// };

// let age = prompt("pls enter your age")
// console.log(Number(age))
// if (age >= 18) {
//     console.log("able to vote")
// } else {
//     console.log("not able to vote")
// };
// //take a number input and print its absolute positive value.
// let f = prompt("enter any number")
// if (f > 0) {
//     console.log(f)
// } else {
//     console.log(-f)
// };

// let a1 = prompt("a1")
// let a2 = prompt("a2")
// if (a1 > a2) {
//     console.log(a1 + " is larger than " + a2)
// } else {
//     console.log(a2 + " is larger than " + a1)
// }

// // else if ladder  
// if (true) {
//     console.log('condition first is true')
// } else if (true) {
//     console.log("condition second is true")
// } else if (false) {
//     console.log("condition third is true")
// } else {
//     console.log("all conditions are false")
// }

let p1 = 100;
let p2 = 120;
let p3 = 130;
if (p1 == p2 && p2 == p3 && p3 == p1) {
    console.log("all are equal values");
} else if (p1 > p2 && p1 > p3) {
    console.log(p1 + " is greater than " + p2 + " and " + p3)
} else if (p2 > p1 && p2 > p3) {
    console.log(p2 + " is greater than " + p1 + " and " + p3)
} else {
    console.log(p3 + " is greater than " + p1 + " and " + p2)
}

// check the number is divisible by 5 or 11 , if not divisible then print "not divisible"  and if divisible then print "its divisible";

// nested if
if (true) {
    if (true) {
        if (true) {
            console.log("inner condition is true")
        } else {
            console.log('innner condition is false')
        }
    } else {
        console.log("first inner condition is false")
    }
} else {
    console.log("outsider condition is false");
}


// example of nested if
// let ag = prompt("pls enter your age");
// if(ag >=18){
//    let nationality = prompt("enter your nationality");
//    if(nationality == "indian"){
//       let crime  = confirm("any crime case in past 5 years");
//       if(crime == false){
//         console.log("able to vote")
//       }else{
//         console.log("not able to vote because of crime case")
//       }
//    }else{
//     console.log("nationality is not equal to indian")
//    }
// }else{
//     console.log("not able to vote")
// }

// switch 
let statement = "statement4";
switch (statement) {
    case "statement1": console.log("statement 1 is true"); break
    case "statement2": console.log("statement 2 is true"); break
    case "statement3": console.log("statement 3 is true"); break
    default: console.log("no one is correct")
}
;

// greeting message
let day = "dfhskv";
switch (day) {
    case "morning": console.log("hello good morning"); break
    case "afternoon": console.log("hello good afternoon"); break
    case "evening": console.log("hello good evening"); break
    default: console.log("good");
}

// loop  
// for loop :- 
for (let i = 10; i >= 1; i--) {
    console.log(i)
}
//print hello world 10 times
for (let p = 91; p <= 100; p++) {
    console.log("hello world")
}






