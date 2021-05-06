var playerArray = [];
var clicks = 1;
var alertBox = document.getElementById("wrong-move");
var alertBox2 = document.getElementById("wrong-move2");
alertBox.style.display = "none";
alertBox2.style.display = "none";




function playerAdder(){
    var clicksCurrent = clicks;
    clicks++;
    var value = document.getElementById("name").value;
    if (value == ""){
        alertBox2.style.display = "block";
        clicks = clicksCurrent;
    }
    else {
        document.getElementById("name").value = "";
        document.getElementById("name").placeholder = "Pelaajan " + clicks + " nimi...";    
    }


}

function rm_content(){

    if (clicks > 1){

    var div1 = document.getElementById("rm1");
    var div2 = document.getElementById("rm2");
    var div3 = document.getElementById("rm3");

    div1.remove();
    div2.remove();
    div3.remove();
    }
    else if(clicks == 1) {
        alertBox.style.display = "block";
    }
}