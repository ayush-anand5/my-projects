let hrs = document.querySelector(".hrs");
let min = document.querySelector(".min");
let sec = document.querySelector(".sec");


setInterval(() => {
    let currentTime = new Date();
    hrs.innerHTML = digits(currentTime.getHours()) ;
    min.innerHTML = digits(currentTime.getMinutes());
    sec.innerHTML = digits(currentTime.getSeconds());
}, 1000);

function digits(value){
    if(value<10){
        return "0"+ value;
    }else{
    return value;
}
}