function clock(){
    var min = document.getElementById("minutes")
    var h = document.getElementById("hours")
    var sec = document.getElementById("seconds")
    var time = new Date();
    min.innerHTML = time.getMinutes();
    h.innerHTML = time.getHours();
    sec.innerHTML = time.getSeconds();
}
setInterval(function(){
clock()
},1000)