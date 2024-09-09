// Recuperer tous les elements DOM
// Recuperer les boutons +
const btnPlus = document.getElementsByClassName("fa-plus-circle");
console.log("button plus:", btnPlus);

// Recuperer les boutons -
const btnMoins = document.getElementsByClassName("fa-minus-circle");
console.log("button moins:", btnMoins);

// Ajouter des elemnets sur les boutons plus
for (let i = 0; i < btnPlus.length; i++) {
  const button = btnPlus[i];
  button.addEventListener("click", () => {
    console.log(`button ${i} clicked`);
    const quantity = button.nextElementSibling;
    const value = quantity.textContent;
    const valueInt = parseInt(value);
    const newValue = valueInt + 1;
    quantity.textContent = newValue;
    // console.log(`value : ${valueInt}`);
  });
}

for (let i = 0; i < btnMoins.length; i++) {
  const button = btnMoins[i];
  button.addEventListener(`click`, () => {
    console.log(`button ${i} clicked`);
    const quantity = button.previousElementSibling;
    const value = quantity.textContent;
    const valueInt = parseInt(value);
    const newValue = valueInt - 1;
    if (newValue < 0) {
      quantity.textContent = 0;
    } else {
      quantity.textContent = newValue;
    }
  });
}

// Recuperer les boutons supprimer
const btndelete = document.getElementsByClassName("fa-trash-alt");
console.log("button delete:", btndelete);

// Recuperer les boutons like
const btnlike = document.getElementsByClassName("fa-heart");
console.log("button like:", btnlike);

for (let i = 0; i < btndelete.length; i++) {
  const button = btndelete[i];
  button.addEventListener(`click`, () => {
    button.parentElement.parentElement.parentElement.parentElement.remove();
  });
}

for (let i = 0; i < btnlike.length; i++) {
  const button = btnlike[i];
  button.addEventListener(`click`, () => {
    button.style.color = "red";
  });
}

const totalprix = document.getElementsByClassName("total");
function prixT() {
  let total = 0;
  const price = querySelector(".unit-price").innerText;
  const quantity = querySelector(".quantity").innerText;
  total += price * quantity;
}
prixT();
