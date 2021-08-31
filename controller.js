
function animStart(){
    document.getElementById("start").style.borderRadius = "5px";
    document.getElementById("start").style.borderColor = "blue";
    document.getElementById("stop").style.borderRadius = "0px";
    document.getElementById("stop").style.borderColor = "white";
    document.getElementById("bar1").style.animationPlayState = "running";
    document.getElementById("bar2").style.animationPlayState = "running";
    document.getElementById("bar3").style.animationPlayState = "running";
    document.getElementById("bar4").style.animationPlayState = "running";
    document.getElementById("bar5").style.animationPlayState = "running";
}

function animStop(){
    document.getElementById("start").style.borderRadius = "0px";
    document.getElementById("start").style.borderColor = "white";
    document.getElementById("stop").style.borderRadius = "5px";
    document.getElementById("stop").style.borderColor = "blue";
    document.getElementById("bar1").style.animationPlayState = "paused";
    document.getElementById("bar2").style.animationPlayState = "paused";
    document.getElementById("bar3").style.animationPlayState = "paused";
    document.getElementById("bar4").style.animationPlayState = "paused";
    document.getElementById("bar5").style.animationPlayState = "paused";
}

