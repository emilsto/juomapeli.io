//shuffle deck
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

document.getElementById("myBtn").addEventListener("click", getDeck);
document.getElementById("myBtn2").addEventListener("click", drawCard);

function getDeck() {
  //Grab json data
  const cards = require("./deck/deck.json");
  shuffle(cards);
  console.log("sekoitettu pakka:", cards);

  return cards;
}
getDeck();

function drawCard() {
  var deck = getDeck();

  index = 0;

  document.getElementById("cardnmu").innerHTML = deck[index].value;
  document.getElementById("cardnmd").innerHTML = deck[index].value;

  console.log(deck[index]);

  if (deck[index].suit === "pata") {
    document.getElementById("suit").src = "./faces/shovel_small.png";

    console.log("pata");
  } else if (deck[index].suit === "hertta") {
    document.getElementById("suit").src = "./faces/realheart_small.png";

    console.log("hertta");
  } else if (deck[index].suit === "ruutu") {
    document.getElementById("suit").src = "./faces/diamond_small.png";

    console.log("ruutu");
  } else if (deck[index].suit === "risti") {
    console.log("risti");
    document.getElementById("suit").src = "./faces/spade_small.png";
  }
}
