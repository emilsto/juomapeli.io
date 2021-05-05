//Grab json data
const cards = require("./deck/deck.json");
var deck = getDeck();
console.log("sekoitettu pakka1: ", deck);
var clicks = 0;

//shuffle deck
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

document.getElementById("myBtn").addEventListener("click", getDeck);
document.getElementById("myBtn2").addEventListener("click", drawCard);

//grab deck to a var, shuffle
function getDeck() {
  var deck = cards;
  shuffle(deck);
  console.log("sekoitettu pakka2:", deck);

  clicks = 0;
  document.getElementById("cardnmu").innerHTML = "";
  document.getElementById("cardnmd").innerHTML = "";
  document.getElementById("suit").src =
    "./images/juomapeli_logo_transparent.png";

  return deck;
}

function drawCard() {
  index = clicks;

  console.log(clicks);
  if (index < 52) {
    if (deck[index].value < 10) {
      document.getElementById("right").style.left = "81%";
      document.getElementById("left").style.left = "4%";
    } else if (
      deck[index].value == "A" ||
      deck[index].value == "K" ||
      deck[index].value == "Q" ||
      deck[index].value == "J"
    ) {
      document.getElementById("right").style.left = "81%";
      document.getElementById("left").style.left = "4%";
    } else {
      document.getElementById("right").style.left = "74%";
      document.getElementById("left").style.left = "0%";
    }

    document.getElementById("cardnmu").innerHTML = deck[index].value;
    document.getElementById("cardnmd").innerHTML = deck[index].value;

    console.log(deck[index]);

    if (deck[index].suit === "pata") {
      document.getElementById("suit").src = "./faces/pata.png";
      document.getElementById("cardnmu").style.color = "black";
      document.getElementById("cardnmd").style.color = "black";

      console.log("pata");
    } else if (deck[index].suit === "hertta") {
      document.getElementById("suit").src = "./faces/hertta.png";
      document.getElementById("cardnmu").style.color = "#8B0000";
      document.getElementById("cardnmd").style.color = "#8B0000";

      console.log("hertta");
    } else if (deck[index].suit === "ruutu") {
      document.getElementById("suit").src = "./faces/ruutu.png";
      document.getElementById("cardnmu").style.color = "#8B0000";
      document.getElementById("cardnmd").style.color = "#8B0000";

      console.log("ruutu");
    } else if (deck[index].suit === "risti") {
      console.log("risti");
      document.getElementById("suit").src = "./faces/risti.png";
      document.getElementById("cardnmu").style.color = "black";
      document.getElementById("cardnmd").style.color = "black";
    }
    clicks++;
  } else {
    document.getElementById("cardnmu").innerHTML = "";
    document.getElementById("cardnmd").innerHTML = "";
    document.getElementById("suit").src =
      "./images/juomapeli_logo_transparent.png";
  }
}
