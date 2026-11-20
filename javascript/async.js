// // // syncronous code , asyncronous code 
// // console.log("first")
// // for (let i = 1; i <= 999999999; i++) {
// //     let k = 0;
// //     k++
// // }
// // setTimeout(() => {
// //     console.log("timeout")
// // }, 0);
// // new Promise((res, rej) => {
// //     res("passed")
// // }).then((r) => { console.log(r) });
// // console.log("last");


// // timers and timeouts
// // setTimeout(callback ,timeout ,args)
// // let timeout = setTimeout((a) => {
// //     console.log("timeout", a)
// // }, 0, "hello");//1s
// // // stop timeout
// // console.log("last line")
// // let count = 0;
// // let interval = setInterval(() => {
// //     console.log("interval")
// //     document.querySelector("button").textContent = ++count
// //     if (count == 300) {
// //         clearInterval(interval)
// //     }
// // }, 10);
// //rgb(12,34,56)
// // let interval = setInterval(() => {
// //     document.querySelector("body").style.background  = `rgb(${Math.random()*88} , ${Math.random()*233}, ${Math.random()*111})`
// // }, 100);

// // function stop() {
// //     // clearTimeout(timeout);
// //     clearInterval(interval);
// // }

// // Promise;
// let pro = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // reject("failed");
//         resolve("passed");
//     }, 1000);
// })
// console.log(pro);
// // then ,catch
// pro.then((result) => { console.log(result) });
// pro.catch((err => { console.log(err) }));

// // async function fun() {
// //     return "helloworld"
// // }
// // console.log(fun())
// // fun().then((res) => {
// //     console.log(res)
// // });

// // let data = fetch("https://jsonplaceholder.typicode.com/posts");
// // console.log(data);

// let pro1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("passed1");
//         // reject("failed1");
//     }, 2000);
// })
// let pro2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject("fail2");
//         // resolve("passed2");
//     }, 1000);
// })
// // let pass = (result) => { console.log(result) }
// // let fail = (err) => { console.log(err) }
// // Promise.all([pro1, pro2]).then(pass).catch(fail);
// // Promise.allSettled([pro1, pro2]).then(pass).catch(fail);
// // Promise.any([pro1, pro2]).then(pass).catch(fail);
// // Promise.race([pro1, pro2]).then(pass).catch(fail);

let pro2 = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject("failed2");
    }, 1000);
})
async function normal() {
    try {
        let data = await pro2;
        console.log(data);
    } catch (error) {
        console.log(error)
    }
}
console.log(normal());//it return us a promise ;
console.log("last line");

// fetch api/method  is webAPI ,browser feature
// fetch(url ,options):it always return promise
let api = "https://jsonplaceholder.typicode.com/posts"
// get method :
// fetch(api, {
//     method: "GET",
//     // body: "data to be send",
//     headers: {
//         "Authorization": "Bearer Token"
//     }
// }).then((res) => { console.log(res) }).catch((err) => {
//     console.log(err)
// });
fetch(api).then((result) => { return result.json() }).then((res) => { console.log(res) }).catch((err) => {
    console.log(err)
});

// present students :- 8,12,25,70,65,34,55,57,27,47,45,48,53,60,63,13,3,58,37,2,26,61,29,35