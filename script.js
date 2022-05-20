var x = 0.0016666666666667
var y = 0.05
var z = 3
setInterval(function f(){
    x += 0.0016666666666667
    y += 0.1
    z += 5.9

    var big = document.getElementById("arrow_big")
    big.style.transform = "rotate("+ y +"deg)"
    var mini = document.getElementById("arrow_mini")
    mini.style.transform = "rotate("+ x +"deg)"
    var sec = document.getElementById("min__arrow")
    sec.style.transform = "rotate("+ z +"deg)"
},1000)



// tv
var power_off = document.getElementById("power_off")
var screen = document.getElementById("screen")
var remote = document.getElementById("remote")
var remote_hand = document.getElementById("romote__hand")
var power = document.getElementById("power")

function f(){
    remote.style.display = "none"
    remote_hand.style.display = "block"
    power.style.display = "block"
    power_off.style.display = "block"
}

function j(){
    screen.style.display = "block"
}
function k(){
    screen.style.display = "none"
}

