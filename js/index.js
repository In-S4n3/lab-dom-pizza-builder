// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "pepperoni", price: 1 },
  mushrooms: { name: "Mushrooms", price: 1 },
  greenPeppers: { name: "Green Peppers", price: 1 },
  whiteSauce: { name: "White sauce", price: 3 },
  glutenFreeCrust: { name: "Gluten-free crust", price: 5 },
};

// Initial value of the state (the state values can change over time)
let state = {
  pepperoni: true,
  mushrooms: true,
  greenPeppers: true,
  whiteSauce: false,
  glutenFreeCrust: false,
};

// This function takes care of rendering the pizza based on the state
// This function is triggered once at the beginning and every time the state is changed
function renderEverything() {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons();
  renderPrice();
}

function renderPepperoni() {
  document.querySelectorAll(".pep").forEach((onePep) => {
    if (state.pepperoni) {
      onePep.style.visibility = "visible";
    } else {
      onePep.style.visibility = "hidden";
    }
  });
}

function renderMushrooms() {
  // Iteration 1: set the visibility of `<section class="mushroom">`
  let mushrooms = document.querySelectorAll(".mushroom");
  mushrooms.forEach((mushroom) => {
    state.mushrooms
      ? (mushroom.style.display = "block")
      : (mushroom.style.display = "none");
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  let greenPep = document.querySelectorAll(".green-pepper");
  greenPep.forEach((greenPepper) => {
    state.greenPeppers
      ? (greenPepper.style.display = "block")
      : (greenPepper.style.display = "none");
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector(".sauce");
  !state.whiteSauce
    ? sauce.classList.remove("sauce-white")
    : sauce.classList.add("sauce-white");
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector(".crust");
  !state.glutenFreeCrust
    ? crust.classList.remove("crust-gluten-free")
    : crust.classList.add("crust-gluten-free");
}

function renderButtons() {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`
  let buttons = document.querySelectorAll(".btn");
  let activeState = Object.values(state);

  for (let i = 0; i < activeState.length; i++) {
    if (activeState[i] === false) {
      buttons[i]?.classList.remove("active");
    } else {
      buttons[i]?.classList.add("active");
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  let ingredientsList = document.querySelectorAll(".price li");
  let activeState = Object.values(state);
  let ingredientsPriceList = Object.values(ingredients);
  let total = basePrice;

  for (let i = 0; i < activeState.length; i++) {
    if (activeState[i] === true) {
      ingredientsList[i].style.display = "block";
      total += ingredientsPriceList[i].price;
      console.log(ingredientsPriceList[i].price);
    } else if (activeState[i] === false) {
      ingredientsList[i].style.display = "none";
    }
  }

  document.querySelector(".price strong").textContent = `$${total}`;
}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document.querySelector(".btn.btn-pepperoni").addEventListener("click", (e) => {
  state.buttonClick = e.target;
  state.pepperoni = !state.pepperoni;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
let mushroom = document.querySelector(".btn.btn-mushrooms");
mushroom.addEventListener("click", (e) => {
  state.mushrooms = !state.mushrooms;
  renderEverything();
});

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
let greePeeper = document.querySelector(".btn.btn-green-peppers");
greePeeper.addEventListener("click", (e) => {
  state.greenPeppers = !state.greenPeppers;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
let whiteSaucePizza = document.querySelector(".btn.btn-sauce");
whiteSaucePizza.addEventListener("click", (e) => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything();
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
let crusty = document.querySelector(".btn.btn-crust");
crusty.addEventListener("click", (e) => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything();
});
