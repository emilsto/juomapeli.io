var playerArray = [];
var clicks = 1;
var alertBox = document.getElementById("wrong-move");
var alertBox2 = document.getElementById("wrong-move2");
alertBox.style.display = "none";
alertBox2.style.display = "none";

var input =  document.getElementById("name");
var holder = document.getElementById("card-holder");
holder.style.display = "none";

//Enable enter for ease of use for adding players
input.addEventListener("keyup", function(event) {
    // Number 13 is the "Enter" key on the keyboard
    if (event.keyCode === 13){
        playerAdder();
    }
});

//Add players to player array
function playerAdder() {
  var clicksCurrent = clicks;
  clicks++;
  var value = document.getElementById("name").value;
  if (value == "") {
    alertBox2.style.display = "block";
    clicks = clicksCurrent;
  } else {
    playerArray.push(value);
    document.getElementById("name").value = "";
    document.getElementById("name").placeholder =
      "Pelaajan " + clicks + " nimi...";
   }
}

//remove old content, add new game UI
function rm_content() {
  if (clicks > 1) {
    var div1 = document.getElementById("rm1");
    var div2 = document.getElementById("rm2");
    var div3 = document.getElementById("rm3");

    div1.remove();
    div2.remove();
    div3.remove();

    holder.style.display ="block";
    changeCSS('./styles/stylehitler-game.css', 0);

  } else if (clicks == 1) {
    alertBox.style.display = "block";
  }
}

function addCards() {}



//Change the CSS style
function changeCSS(cssFile, cssLinkIndex) {

    var oldlink = document.getElementsByTagName("link").item(cssLinkIndex);

    var newlink = document.createElement("link");
    newlink.setAttribute("rel", "stylesheet");
    newlink.setAttribute("type", "text/css");
    newlink.setAttribute("href", cssFile);

    document.getElementsByTagName("head").item(cssLinkIndex).replaceChild(newlink, oldlink);
}