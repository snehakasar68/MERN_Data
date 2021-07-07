console.log("I am added")
console.log("user 1 mkaes a request")
setTimeout(callback,3000);
console.log("hi");

console.log("user 2 mkaes a request")
setTimeout(callback1,2000);
console.log("hello");

console.log("user 3 mkaes a request")
setTimeout(callback2,1000);
console.log("how r u");

function callback(){
console.log("im in callback")
}
function callback1(){
    console.log("im in callback 1")
    }
function callback2(){
        console.log("im in callback 2")
       } 
