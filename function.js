// console.log("One")
// for(i=1;i<10;i++) {
//     console.log("Two")
// }
// console.log("Two")
// setTimeout(()=>{
//     console.log("Two")
// },1000)
// console.log("Three")

// setTimeout(()=>{
// console.log("One")
// setTimeout(()=>{
//     console.log("Two")
//     setTimeout(()=>{
//         console.log("Three")
//         setTimeout(()=>{
//             console.log("Four")
//             setTimeout(()=>{
//                 console.log("Five")
//                 setTimeout(()=> {
//                     console.log("Six")
//                     setTimeout(() => {
//                         console.log("Seven")
//                     },1000)
//                 },1000)
//             },1000)
//         },1000)
//     },1000)
// },1000)
// },1000)

// const mypromise=new Promise((resolve,reject)=>{
//     const username="AbhiY11";
//     const password="1234";
//     if(username=="AbhiY11" && password=="12345") {
//         resolve("success");
//     }
//     else{
//         reject("username or password incorrect")
//     }
// })

//     mypromise.then((msg)=>{
// console.log(msg)
//     }).catch((msg)=>{
// console.log(msg)
//     }).finally(()=>{
//         console.log("All done")
//     })


// const mypromise=new Promise((resolve,reject)=>{
    
//     const num=4;
//     if(num%2==0) {
//         resolve("even");
//     }
//     else{
//         reject("odd")
//     }
// })

// //     mypromise.then((msg)=>{
// // console.log(msg)
// //     }).catch((msg)=>{
// // console.log(msg)
// //     }).finally(()=>{
// //         console.log("All done")
// //     })


// async function handleData() {
//     try{
//         console.log("before")
//         const q=await mypromise;
//         console.log(q)
//     }catch(err) {
//         console.log(err)
//     }
//     finally{
//         console.log("All done")
//     }
// }
// handleData();

// const async