(function () {
  function r(e, n, t) {
    function o(i, f) {
      if (!n[i]) {
        if (!e[i]) {
          var c = "function" == typeof require && require;
          if (!f && c) return c(i, !0);
          if (u) return u(i, !0);
          var a = new Error("Cannot find module '" + i + "'");
          throw ((a.code = "MODULE_NOT_FOUND"), a);
        }
        var p = (n[i] = { exports: {} });
        e[i][0].call(
          p.exports,
          function (r) {
            var n = e[i][1][r];
            return o(n || r);
          },
          p,
          p.exports,
          r,
          e,
          n,
          t
        );
      }
      return n[i].exports;
    }
    for (
      var u = "function" == typeof require && require, i = 0;
      i < t.length;
      i++
    )
      o(t[i]);
    return o;
  }
  return r;
})()(
  {
    1: [
      function (require, module, exports) {
        module.exports = [
          {
            suit: "hertta",
            value: 2,
          },
          {
            suit: "hertta",
            value: 3,
          },
          {
            suit: "hertta",
            value: 4,
          },
          {
            suit: "hertta",
            value: 5,
          },
          {
            suit: "hertta",
            value: 6,
          },
          {
            suit: "hertta",
            value: 7,
          },
          {
            suit: "hertta",
            value: 8,
          },
          {
            suit: "hertta",
            value: 9,
          },
          {
            suit: "hertta",
            value: 10,
          },
          {
            suit: "hertta",
            value: "J",
          },
          {
            suit: "hertta",
            value: "Q",
          },
          {
            suit: "hertta",
            value: "K",
          },
          {
            suit: "hertta",
            value: "A",
          },
          {
            suit: "ruutu",
            value: 2,
          },
          {
            suit: "ruutu",
            value: 3,
          },
          {
            suit: "ruutu",
            value: 4,
          },
          {
            suit: "ruutu",
            value: 5,
          },
          {
            suit: "ruutu",
            value: 6,
          },
          {
            suit: "ruutu",
            value: 7,
          },
          {
            suit: "ruutu",
            value: 8,
          },
          {
            suit: "ruutu",
            value: 9,
          },
          {
            suit: "ruutu",
            value: 10,
          },
          {
            suit: "ruutu",
            value: "J",
          },
          {
            suit: "ruutu",
            value: "Q",
          },
          {
            suit: "ruutu",
            value: "K",
          },
          {
            suit: "ruutu",
            value: "A",
          },
          {
            suit: "risti",
            value: 2,
          },
          {
            suit: "risti",
            value: 3,
          },
          {
            suit: "risti",
            value: 4,
          },
          {
            suit: "risti",
            value: 5,
          },
          {
            suit: "risti",
            value: 6,
          },
          {
            suit: "risti",
            value: 7,
          },
          {
            suit: "risti",
            value: 8,
          },
          {
            suit: "risti",
            value: 9,
          },
          {
            suit: "risti",
            value: 10,
          },
          {
            suit: "risti",
            value: "J",
          },
          {
            suit: "risti",
            value: "Q",
          },
          {
            suit: "risti",
            value: "K",
          },
          {
            suit: "risti",
            value: "A",
          },
          {
            suit: "pata",
            value: 2,
          },
          {
            suit: "pata",
            value: 3,
          },
          {
            suit: "pata",
            value: 4,
          },
          {
            suit: "pata",
            value: 5,
          },
          {
            suit: "pata",
            value: 6,
          },
          {
            suit: "pata",
            value: 7,
          },
          {
            suit: "pata",
            value: 8,
          },
          {
            suit: "pata",
            value: 9,
          },
          {
            suit: "pata",
            value: 10,
          },
          {
            suit: "pata",
            value: "J",
          },
          {
            suit: "pata",
            value: "Q",
          },
          {
            suit: "pata",
            value: "K",
          },
          {
            suit: "pata",
            value: "A",
          },
        ];
      },
      {},
    ],
    2: [
      function (require, module, exports) {
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
      },
      { "./deck/deck.json": 1 },
    ],
  },
  {},
  [2]
);
