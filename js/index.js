// Write your Pizza Builder JavaScript in this file.

// Constants
let basePrice = 10;
let ingredients = {
  pepperoni: { name: "Pepperoni", price: 1 },
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
function renderEverything(event) {
  renderPepperoni();
  renderMushrooms();
  renderGreenPeppers();
  renderWhiteSauce();
  renderGlutenFreeCrust();

  renderButtons(event);
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
  document.querySelectorAll(".mushroom").forEach((oneMush) => {
    if (state.mushrooms) {
      oneMush.style.visibility = "visible";
    } else {
      oneMush.style.visibility = "hidden";
    }
  });
}

function renderGreenPeppers() {
  // Iteration 1: set the visibility of `<section class="green-pepper">`
  document.querySelectorAll(".green-pepper").forEach((oneGreenPep) => {
    if (state.greenPeppers) {
      oneGreenPep.style.visibility = "visible";
    } else {
      oneGreenPep.style.visibility = "hidden";
    }
  });
}

function renderWhiteSauce() {
  // Iteration 2: add/remove the class "sauce-white" of `<section class="sauce">`
  let sauce = document.querySelector(".sauce");
  if (state.whiteSauce) {
    sauce.classList.add("sauce-white");
  } else {
    sauce.classList.remove("sauce-white");
  }
}

function renderGlutenFreeCrust() {
  // Iteration 2: add/remove the class "crust-gluten-free" of `<section class="crust">`
  let crust = document.querySelector(".crust");
  if (state.glutenFreeCrust) {
    crust.classList.add("crust-gluten-free");
  } else {
    crust.classList.remove("crust-gluten-free");
  }
}

function renderButtons(event) {
  // Iteration 3: add/remove the class "active" of each `<button class="btn">`

  // select the button that has been clicked
  if (event) {
    const btnClicked = event.currentTarget;
    // console.log("btnClicked", btnClicked);
    // if (btnClicked.classList.contains("active")) {
    //   btnClicked.classList.remove("active");
    // } else if (!btnClicked.classList.contains("active")) {
    //   btnClicked.classList.add("active");
    // }

    // more straightforward method: // how to do it without event?
    for(let property in state) {
      if(state[property]) btnClicked.classList.add("active");
      else btnClicked.classList.remove("active");
    }
  }
}

function renderPrice() {
  // Iteration 4: change the HTML of `<aside class="panel price">`
  const priceListEle = document.querySelector('.price ul');
  priceListEle.innerHTML = '';

  const totalPriceEle = document.querySelector('.price strong');
  let totalPrice = basePrice;
  
  for(let oneIngredient in ingredients) {
    if(state[oneIngredient]) {
      let newLi = document.createElement('li')
      newLi.innerHTML = `$${ingredients[oneIngredient].price} ${ingredients[oneIngredient].name}`
      priceListEle.appendChild(newLi);
      //priceListEle.innerHTML += `
      // <li>$${ingredients[oneIngredient].price} ${ingredients[oneIngredient].name}</li>
      //   `
      totalPrice += ingredients[oneIngredient].price;
    }

    totalPriceEle.innerHTML = `$${totalPrice}`;
  }

}

renderEverything();

// Iteration 1: Example of a click event listener on `<button class="btn btn-pepperoni">`
document
  .querySelector(".btn.btn-pepperoni")
  .addEventListener("click", (event) => {
    state.pepperoni = !state.pepperoni;
    renderEverything(event);
  });

// Iteration 1: Add click event listener on `<button class="btn btn-mushrooms">`
document
  .querySelector(".btn.btn-mushrooms")
  .addEventListener("click", (event) => {
    state.mushrooms = !state.mushrooms;
    renderEverything(event);
  });

// Iteration 1: Add click event listener on `<button class="btn btn-green-peppers">`
document
  .querySelector(".btn.btn-green-peppers")
  .addEventListener("click", (event) => {
    state.greenPeppers = !state.greenPeppers;
    renderEverything(event);
  });

// Iteration 2: Add click event listener on `<button class="btn btn-sauce">`
document.querySelector(".btn.btn-sauce").addEventListener("click", (event) => {
  state.whiteSauce = !state.whiteSauce;
  renderEverything(event);
});

// Iteration 2: Add click event listener on `<button class="btn btn-crust">`
document.querySelector(".btn.btn-crust").addEventListener("click", (event) => {
  state.glutenFreeCrust = !state.glutenFreeCrust;
  renderEverything(event);
});
