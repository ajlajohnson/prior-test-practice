"use strict";

let vendingContainer = document.querySelector(".vending-container");

let totalParagraph = document.querySelector(".total"); //since it's only being used here its okay to place it here, but you can use this paragraph outside of this listener too!

let total = 0; //this is outside the function because if it was inside it would reset to 0 everytime the buttons are clicked

const add = (event) => {
  if (event.target.classList.contains("btn")) {
    let amount = parseInt(event.target.getAttribute("data-amount"));
    total += amount;
    totalParagraph.innerText = `Total: ${total}`;
  }
};

vendingContainer.addEventListener("click", add);

/////// TO DELETE EVENT LISTENER
totalParagraph.addEventListener("click", () => {
  vendingContainer.removeEventListener("click", add);
});
/// ^^^ that removes your ability to add more if you clicked outside of the buttons and on the "total" part

///////////////////////////////////////////////

let coinForm = document.querySelector(".coin-form");

let coinContainer = document.querySelector(".coin-container");

coinForm.addEventListener("submit", (event) => {
  event.preventDefault(); //don't forget the () <-- !!
  let data = new FormData(coinForm);
  let amount = data.get("amount");
  let type = data.get("type");
  console.log(amount, type);
  for (let i = 0; i < amount; i++) {
    let newCoin = document.createElement("div");
    newCoin.classList.add("coin");
    newCoin.innerText = type;
    coinContainer.append(newCoin);
  }
});

coinContainer.addEventListener("click", (event) => {
  if (event.target.classList.contains("coin")) {
    event.target.remove();
  }
});
