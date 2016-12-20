function digitalWatch() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var seconds = date.getSeconds();
    if (hours < 10) hours = "0" + hours;
    if (minutes < 10) minutes = "0" + minutes;
    if (seconds < 10) seconds = "0" + seconds;
    
    document.getElementById("seconds").style.transform = "rotate(" + seconds * 6 +"deg)";
    document.getElementById("minutes").style.transform = "rotate(" + minutes * 6 +"deg)";
    document.getElementById("hours").style.transform = "rotate(" + hours * 30 +"deg)";

    setTimeout(digitalWatch, 1000);
}

digitalWatch();
