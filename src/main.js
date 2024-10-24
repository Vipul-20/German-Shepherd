//
const selectEL = document.querySelector("select");

/* API */
const BASE_URL = `https://dog.ceo/api/`;

// ==== getDogBread function ===
function getDogBread() {
  return fetch(`${BASE_URL}breeds/list/all`)
    .then((data) => data.json())
    .then((data) => {
      // console.log(Object.keys(data.message));
      return Object.keys(data.message);
    })
    .catch((error) => aleart(error));
}
getDogBread();

// ==== renderOption function ====
function renderOption() {
  getDogBread().then((data) => {
    const fragment = document.createDocumentFragment();
    for (let bread of data) {
      // console.log(bread);(log each name of bread)
      const option = document.createElement("option");
      /*create a new element in HTML,this method to create a DOM Node */
      option.textContent = bread.charAt(0).toUpperCase() + bread.slice(1);
      /*charAt(0)-it extract the first charater of string,slice(1)-slice the string starting from the second charter (index 1) to end */
      fragment.appendChild(option);
    }
    selectEL.appendChild(fragment);
  });
}
renderOption();

// console.log("end");

// breeds/list/all =all breeds
/* https://dog.ceo/api/breeds/list/all */
/* https://dog.ceo/api/breed/Affenpinscher/images/random*/
