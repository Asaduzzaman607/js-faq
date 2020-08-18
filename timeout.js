function doSomething(){
    console.log(3333);
}

console.log(222);
setTimeout(doSomething, 4000); // function + 1000 ms = 1 sec after it will work
console.log(444)

// setTimeout(function(){
//     console.log('lazy')
// },4000)

setTimeout(()=>{
    console.log('lazy')
},4000)

// setInterval(function() => {
//     console.log('set interval') // after a limited time it will work
    
// }, 4000);