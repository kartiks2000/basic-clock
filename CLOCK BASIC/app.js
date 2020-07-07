var time = document.querySelector(".time");
var msg = document.querySelector(".message");
console.log("hello guys!!!");

// basic formating of TIME 
function showtime()
{
    var curtime =  new Date();
    var min = curtime.getMinutes();
    if(min<10)
    {
        min = "0" + min;
    }
    var sec = curtime.getSeconds();
    if(sec<10)
    {
        sec = "0" + sec;
    }
    var hr = curtime.getHours();

    //we can display more message corresponding to different timing
    var message = "Hello folks!!!!!";
    if(hr==11){
        message="Breakfast over!!!!";
    }
    if(hr==12){
        message = "noon";
    }



    var meradian = "AM";
    if(hr>12)
    {
        meradian="PM";
        hr = hr-12;
    }

    var timestring = hr+":"+min+":"+sec+" "+meradian;

    msg.innerHTML=message;
    time.innerHTML=timestring;

}

setInterval(() => {
    showtime();
}, 1000);
