let btn = document.getElementById("btn");
btn.onclick = function(){
    if(btn.className == "night"){
        btn.classList.remove("night");
        btn.classList.add("morning");
        document.body.style.backgroundColor = "rgb(230, 230, 230)";
        document.body.style.color = "black";
    }
    else {
        btn.classList.remove("morning");
        btn.classList.add("night");
        document.body.style.backgroundColor = "rgb(30 , 30, 30)";
        document.body.style.color = "white";
    }
}