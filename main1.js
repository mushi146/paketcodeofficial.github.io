


countdown();
var mins = 5;

// calculate the seconds (don't change this! unless time progresses at a different speed for you...)
var secs = mins * 60;
function countdown() {
setTimeout('Decrement()',1000);
}
function Decrement() {
if (document.getElementById) {
minutes = document.getElementById("minutes");
seconds = document.getElementById("seconds");
if (seconds < 59) {
seconds.value = secs;
} else {
minutes.value = getminutes();
seconds.value = getseconds();
}
secs--;
if(mins<0)
{
    alert("Timeout.... Game Over!");
    location.reload();
}
setTimeout('Decrement()',1000);

}
}
function getminutes() {
mins = Math.floor(secs / 60);
return mins;
}
function getseconds() {
return secs-Math.round(mins *60);
}

