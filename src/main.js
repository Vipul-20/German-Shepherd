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
    .catch((error) => console.log(error));
}
getDogBread();


// ==== renderOption function ====
function renderOption() {
  getDogBread().then((data) => {
    const fragment = document.createDocumentFragment();
    for (let bread of data) {
      const option = document.createElement("option");
      option.textContent = bread;
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
