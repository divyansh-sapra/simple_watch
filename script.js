let a;
let date;
let time;
let ap;
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
setInterval(() => {
    a = new Date();
    ap = a.getHours();
    if (ap > 12 && ap <= 23) {
        ap = "pm"
    } else {
        ap = "am";
    }
    time = a.getHours() + ":" + a.getMinutes() + ":" + a.getSeconds();
    date = a.toLocaleDateString(undefined, options);
    document.getElementById('datetime').innerHTML = `${time} ${ap} <br>on ${date}`;
}, 1000);

var x
var y
var stop_interval
function myfunction() {
    x = document.getElementById('country');
    y = document.getElementById('city');
    stop_interval = setInterval(() => {
        document.getElementById('location').innerHTML = y.value + " : " + a.toLocaleTimeString("en-US", {
            timeZone: `${x.value}/${y.value}`, timeStyle: 'medium', hourCycle: 'h24'
        });
    }, 1000);
}
