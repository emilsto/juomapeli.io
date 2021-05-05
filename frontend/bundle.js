(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
module.exports=[
  {
    "suit": "hertta",
    "value": 2
  },
  {
    "suit": "hertta",
    "value": 3
  },
  {
    "suit": "hertta",
    "value": 4
  },
  {
    "suit": "hertta",
    "value": 5
  },
  {
    "suit": "hertta",
    "value": 6
  },
  {
    "suit": "hertta",
    "value": 7
  },
  {
    "suit": "hertta",
    "value": 8
  },
  {
    "suit": "hertta",
    "value": 9
  },
  {
    "suit": "hertta",
    "value": 10
  },
  {
    "suit": "hertta",
    "value": "J"
  },
  {
    "suit": "hertta",
    "value": "Q"
  },
  {
    "suit": "hertta",
    "value": "K"
  },
  {
    "suit": "hertta",
    "value": "A"
  },
  {
    "suit": "ruutu",
    "value": 2
  },
  {
    "suit": "ruutu",
    "value": 3
  },
  {
    "suit": "ruutu",
    "value": 4
  },
  {
    "suit": "ruutu",
    "value": 5
  },
  {
    "suit": "ruutu",
    "value": 6
  },
  {
    "suit": "ruutu",
    "value": 7
  },
  {
    "suit": "ruutu",
    "value": 8
  },
  {
    "suit": "ruutu",
    "value": 9
  },
  {
    "suit": "ruutu",
    "value": 10
  },
  {
    "suit": "ruutu",
    "value": "J"
  },
  {
    "suit": "ruutu",
    "value": "Q"
  },
  {
    "suit": "ruutu",
    "value": "K"
  },
  {
    "suit": "ruutu",
    "value": "A"
  },
  {
    "suit": "risti",
    "value": 2
  },
  {
    "suit": "risti",
    "value": 3
  },
  {
    "suit": "risti",
    "value": 4
  },
  {
    "suit": "risti",
    "value": 5
  },
  {
    "suit": "risti",
    "value": 6
  },
  {
    "suit": "risti",
    "value": 7
  },
  {
    "suit": "risti",
    "value": 8
  },
  {
    "suit": "risti",
    "value": 9
  },
  {
    "suit": "risti",
    "value": 10
  },
  {
    "suit": "risti",
    "value": "J"
  },
  {
    "suit": "risti",
    "value": "Q"
  },
  {
    "suit": "risti",
    "value": "K"
  },
  {
    "suit": "risti",
    "value": "A"
  },
  {
    "suit": "pata",
    "value": 2
  },
  {
    "suit": "pata",
    "value": 3
  },
  {
    "suit": "pata",
    "value": 4
  },
  {
    "suit": "pata",
    "value": 5
  },
  {
    "suit": "pata",
    "value": 6
  },
  {
    "suit": "pata",
    "value": 7
  },
  {
    "suit": "pata",
    "value": 8
  },
  {
    "suit": "pata",
    "value": 9
  },
  {
    "suit": "pata",
    "value": 10
  },
  {
    "suit": "pata",
    "value": "J"
  },
  {
    "suit": "pata",
    "value": "Q"
  },
  {
    "suit": "pata",
    "value": "K"
  },
  {
    "suit": "pata",
    "value": "A"
  }
]

},{}],2:[function(require,module,exports){
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
      document.getElementById("right").style.left = "82%";
      document.getElementById("left").style.left = "4%";
    } else if (
      deck[index].value == "A" ||
      deck[index].value == "K" ||
      deck[index].value == "Q" ||
      deck[index].value == "J"
    ) {
      document.getElementById("right").style.left = "82%";
      document.getElementById("left").style.left = "4%";
    } else {
      document.getElementById("right").style.left = "75%";
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

},{"./deck/deck.json":1}]},{},[2]);
