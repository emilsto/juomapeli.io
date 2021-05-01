//shuffle deck
function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

//get playingcards from json
const getCards = async () => {
  const response = await fetch("./deck/deck.json");
  var data = await response.json();
  shuffle(data);
  console.log("shuffeled deck:", data);
};
getCards();
