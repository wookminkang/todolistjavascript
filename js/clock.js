

const clock = document.querySelector("#clock");
const clock2 = document.querySelector("#clock2");


function sayHello(){
    console.log('hi');
}


function getClock(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const sec = date.getSeconds();
    
    clock.innerText = `
        ${ hours < 10 ? `0${hours}` : hours }:${ minutes < 10 ? `0${minutes}` : minutes }:${ sec < 10 ? `0${sec}` : sec}
    `;

    
    // if(sec < 10){
    //     reSec = `0${sec}`
    // }else{
    //     reSec = `${sec}`;
    // }

    // clock2.innerText = `${reSec}`;
}




getClock();
setInterval(getClock, 1000);
