// x = Math.PI;
// console.log(x)

// let koha;
// koha = new Date(2021, 0, 12, 8, 7, 2)

// var intervali = setInterval(test, 6000);

// function test() {
//     alert("Hello Jcoders");
// }


// const User = "aris"
// function greet(userName) {
//     alert("Welcome " + userName);
// }
// setTimeout(greet, 8000, User);


let intervalid;


function shfaqOren() {
    const clock = new Date();
    const ora = clock.toLocaleTimeString();
    document.getElementById('ora').innerHTML = ora;
    // document.getElementsByClassName()
    // document.querySelector
}

function startInterval(){
    shfaqOren();
    intervalId = setInterval(shfaqOren, 1000);
}
function stopInterval(){
        clearInterval(intervalid)
        
}
        
