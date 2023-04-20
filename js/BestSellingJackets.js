// Create JavaScript to fetch an array of product data from WordPress API
const DetailsContainer = document.querySelector(".microLightJacket");
const DetailsContainerTwo = document.querySelector(".expeditionJacket");
const DetailsContainerThree = document.querySelector(".senjaJacket");
const DetailsContainerFour = document.querySelector(".ulrikenJacket");

const url = "https://sugal.no/wp-json/wc/store/products";

async function getData() {
  const response = await fetch(url);
  const results = await response.json();
  console.log(results);

  DetailsContainer.innerHTML += ` <a href="jacket-spesific.html?id=${results[1].id}"> 
  <img src="${results[1].images[0].src}" class="microlight-jacket_img" alt="  This is a Microlight Jacket">
  </a>
                                    <p class="jacket-name">${results[1].name}</p>
                                    <p class="jacket-color">${results[1].attributes[0].terms[0].name}
                                    <p class="jacket-price">kr ${results[1].prices.sale_price}</p>

                                    
  `;

  DetailsContainerTwo.innerHTML += `  <a href="jacket-spesific.html?id=${results[0].id}"> 
  <img src="${results[0].images[0].src}" class="expedions-jacket_img" alt="  This is a expedition Jacket"> 
  </a> 
  <p class="jacket-name">${results[0].name}</p>
                                        <p class="jacket-color">${results[0].attributes[0].terms[0].name}
                                        <p class="jacket-price">kr ${results[0].prices.sale_price}</p>
  `;

  DetailsContainerThree.innerHTML += `     <a href="jacket-spesific.html?id=${results[4].id}"> 
   <img src="${results[4].images[0].src}" class="senja-jacket_img" alt="  This is a expedition Jacket">  
   </a>
                                        <p class="jacket-name">${results[4].name}</p>
                                        <p class="jacket-color">${results[4].attributes[0].terms[0].name}
                                        <p class="jacket-price">kr ${results[4].prices.sale_price}</p>
  `;

  DetailsContainerFour.innerHTML += `   <a href="jacket-spesific.html?id=${results[3].id}"> 
   <img src="${results[3].images[0].src}" class="ulriken-jacket" alt="  This is a expedition Jacket">  
   </a>
                                        <p class="jacket-name">${results[3].name}</p>
                                        <p class="jacket-color">${results[3].attributes[0].terms[0].name}
                                        <p class="jacket-price">kr ${results[3].prices.sale_price}</p>
  `;

  DetailsContainerFour.innerHTML += ` <a href="jacket-spesific.html?id=${results[2].id}"> 
  <img src="${results[2].images[0].src}" class="rain-jacket" alt="  This is a expedition Jacket">  
  </a>
                                      <p class="jacket-name">${results[2].name}</p>
                                      <p class="jacket-color">${results[2].attributes[0].terms[0].name}
                                      <p class="jacket-price">kr ${results[2].prices.sale_price}</p>
`;
}

getData();
