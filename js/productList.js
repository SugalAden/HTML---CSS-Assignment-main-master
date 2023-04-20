// To fetch a single product’s data from WordPress API

const url = "https://sugal.no/wp-json/wc/store/products";

const DetailsContainer = document.querySelector(".microLightJacket");
const DetailsContainerTwo = document.querySelector(".expeditionJacket");
const DetailsContainerThree = document.querySelector(".senjaJacket");
const DetailsContainerFour = document.querySelector(".ulrikenJacket");
const DetailsContainerFive = document.querySelector(".RainJacket");

const singleData = "https://sugal.no/wp-json/wc/store/products/60";

async function fetchSingleData() {
  const response = await fetch(singleData);
  const results = await response.json();
  console.log(results.prices);

  DetailsContainer.innerHTML += ` <a href="jacket-spesific.html?id=${results.id}">
  <img src="${results.images[0].thumbnail}" class="microlight-jacket_img" alt=" a Microlight Jacket"> 
  </a>     
                                  <p class="jacket-name">${results.name}</p>
                                  <p class="jacket-color">${results.attributes[0].terms[0].name}
                                  <p class="jacket-price">kr ${results.prices.price}</p>
                                  `;
}
fetchSingleData();

const singleDataTwo = "https://sugal.no/wp-json/wc/store/products/70";

async function fetchSingleDataTwo() {
  const response = await fetch(singleDataTwo);
  const results = await response.json();
  console.log(results.prices);

  DetailsContainerTwo.innerHTML += ` <a href="jacket-spesific.html?id=${results.id}">
  <img src="${results.images[0].thumbnail}" class="expedions-jacket_img" alt=" This is a expedions-Jacket">
  </a>
                                    <p class="jacket-name_2">${results.name}</p>
                                    <p class="jacket-color_2">${results.attributes[0].terms[0].name}</p>
                                    <p class="jacket-price_2">kr ${results.prices.price} </p>
`;
}
fetchSingleDataTwo();

const singleDataThree = "https://sugal.no/wp-json/wc/store/products/50";

async function fetchSingleDataThree() {
  const response = await fetch(singleDataThree);
  const results = await response.json();
  console.log(results.prices);

  DetailsContainerThree.innerHTML += `<a href="jacket-spesific.html?id=${results.id}">
  <img src="${results.images[0].thumbnail}" class="senja-jacket_img" alt="a nice senja-Jacket">
  </a>
                                    <p class="jacket-name_3">${results.name}</p>
                                    <p class="jacket-color_2">${results.attributes[0].terms[0].name}</p>
                                    <p class="jacket-price_2">kr ${results.prices.price} </p>
`;
}
fetchSingleDataThree();

const singleDataFour = "https://sugal.no/wp-json/wc/store/products/51";

async function fetchSingleDataFour() {
  const response = await fetch(singleDataFour);
  const results = await response.json();
  console.log(results.prices);

  DetailsContainerFour.innerHTML += `<a href="jacket-spesific.html?id=${results.id}">
  <img src="${results.images[0].thumbnail}" class="ulriken-jacket" alt="splendid ulriken-Jacket">
  </a>
                                    <p class="jacket-name_3">${results.name}</p>
                                    <p class="jacket-color_2">${results.attributes[0].terms[0].name}</p>
                                    <p class="jacket-price_2">kr ${results.prices.price} </p>
`;
}
fetchSingleDataFour();

const singleDataFive = "https://sugal.no/wp-json/wc/store/products/52";

async function fetchSingleDataFive() {
  const response = await fetch(singleDataFive);
  const results = await response.json();
  console.log(results.prices);

  DetailsContainerFive.innerHTML += `<a href="jacket-spesific.html?id=${results.id}">
  <img src="${results.images[0].thumbnail}" class="rain-jacket" alt="splendid ulriken-Jacket">
  </a>
                                    <p class="jacket-name_5">${results.name}</p>
                                    <p class="jacket-color_5">${results.attributes[0].terms[0].name}</p>
                                    <p class="jacket-price_5">kr ${results.prices.price} </p>
`;
}
fetchSingleDataFive();
