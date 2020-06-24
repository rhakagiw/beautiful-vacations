/*const countdown =document.querySelector('.countdown');
//set launch date(ms)
const launchdate =new Date ('jan 1, 2019 13:00:00').getTime();
//update every second
const intvl = setInterval(() => {
    //get todays date & time(ms)
const now= new Date().getTime();
//distance from now to  the launch date
const distance = launchDate - now ;
//time calculations
const days = Math.floor(distance/(1000 * 60 *60 *24));
const hours= Math.floor(
    (distance % (1000 * 60 *60 * 24))/(1000 * 60 * 60)
);
const mins= Math.floor((distance % (1000 * 60 * 60))/(1000 * 60))
;
const seconds= Math.floor((distance % (1000 * 60))/1000);
//display result

countdown.innerHTML= `
<div> ${days} <span>Days</span><div>
<div> ${hours} <span>Hours</span><div>
<div> ${mins} <span>Mins</span><div>
<div> ${seconds} <span>Seconds</span><div>
`;
// if launch date passed
if(distance <0){

}
},1000);*/

var deadline = new Date("Jan 1, 2029 15:37:29").getTime();
var x = setInterval(function() {
var now = new Date().getTime();
var t = deadline - now;
var days = Math.floor(t / (1000 * 60 * 60 * 24));
var hours = Math.floor((t%(1000 * 60 * 60 * 24))/(1000 * 60 * 60));
var minutes = Math.floor((t % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((t % (1000 * 60)) / 1000);
document.getElementById("count-down").innerHTML = days + "d " 
+ hours + "h " + minutes + "m " + seconds + "s ";
    if (t < 0) {
        clearInterval(x);
        document.getElementById("count-down").innerHTML = "EXPIRED";
    }
}, 1000);




