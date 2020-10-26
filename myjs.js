window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var mins=00;
    var appendMins=document.getElementById("mins");
    var appendTens = document.getElementById("tens");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = this.document.getElementById("button-start");
    var buttonStop = this.document.getElementById("button-stop");
    var buttonReset = this.document.getElementById("button-reset");

    var Interval;
    function startTimer(){
        tens++;
        if(tens < 9){
            appendTens.innerHTML = "0" + tens;
        }
        if(tens > 9){
            appendTens.innerHTML = tens;
        }
        if(tens > 99){
            seconds++;
            console.log(seconds);
            appendSeconds.innerHTML = "0" + seconds;
            tens = 0;
            appendTens.innerHTML = "0" + tens;
        }
        if(seconds > 9){
            appendSeconds.innerHTML = seconds;
        }
        if(seconds>59)
        {
            mins++;
            console.log(mins);
            appendMins.innerHTML="0" + mins;
            seconds=0;
            appendSeconds.innerHTML="0" + seconds;
        }
        if(mins>9)
        {
            appendMins.innerHTML=mins;
        }
    }
    buttonStart.onclick = function(){
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    }
    buttonStop.onclick = function(){
        clearInterval(Interval);
    }
    buttonReset.onclick = function(){
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        mins="00";
        appendTens.innerHTML = tens;
        appendSeconds.innerHTML = seconds;
        appendMins.innerHTML=mins;
    }
}
