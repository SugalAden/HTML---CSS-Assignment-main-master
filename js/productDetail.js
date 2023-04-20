// Product Detail page that uses an id search parameter render a single product’s data

const queryString = document.location.search;

const params = new URLSearchParams(queryString);
console.log(params);
const id = params.get("id");
console.log(id);
const container = document.querySelector(".spesificJacket");
const containerTwo = document.querySelector(".product-info");
const containerThree = document.querySelector("select");
const containerFour = document.querySelector(".my-order");

const url = "https://sugal.no/wp-json/wc/store/products/" + id;

async function searchParameter() {
  const response = await fetch(url);
  const productDetails = await response.json();

  html(productDetails);
  console.log(id);
}

searchParameter();

function html(productDetails) {
  container.innerHTML = `       <img src="${productDetails.images[0].src}" class="microlightJacketSpesific" alt=" a Microlight Jacket"> 
                                <p class="jacket-name">${productDetails.name}</p>
                                  <p class="jacket-color">${productDetails.attributes[0].terms[0].name}
                                 <p class="jacket-price">kr ${productDetails.prices.price}</p>`;

  containerTwo.innerHTML = `  <p class="product-info"> ${productDetails.description}</p>`;

  // Fetching in the different sizes
  containerThree.innerHTML = ` 
  <select class="dropdown_menu">
  <option selected disabled hidden> Choose size:</option>
  <option> ${productDetails.attributes[1].terms[5].name}</option>
  <option>${productDetails.attributes[1].terms[4].name}</option>
  <option>${productDetails.attributes[1].terms[3].name}</option>
  <option>${productDetails.attributes[1].terms[6].name}</option>
</select> `;
}
