const { setImmediate } = require("timers");

setTimeout(() => {
    console.log("3");
},0 );

setImmediate(()=>{
    console.log("2");
})
console.log("1");