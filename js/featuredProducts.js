// Filter Featured products from the list and show these in their own section
const FeaturedContainer = document.querySelector(".FeaturedProducts");

const featuredProducts =
  "https://sugal.no/wp-json/wc/store/products?featured=true";

async function fetchSingleData() {
  const response = await fetch(featuredProducts);
  const results = await response.json();
  console.log(results);

  FeaturedContainer.innerHTML += ` <a href="jacket-spesific.html?id=${results[0].id}"> 
  <img src="${results[0].images[0].src}" class="microlight-jacket_img" alt=" a Microlight Jacket">
  </a>
                                    <p class="jacket-name">${results[0].name}</p>
                                    <p class="jacket-color">${results[0].attributes[0].terms[0].name}
                                    <p class="jacket-price">kr ${results[0].prices.sale_price}</p>

                                    <a href="jacket-spesific.html?id=${results[1].id}">
                                    <img src="${results[1].images[0].src}" class="senja-jacket_img" alt=" a Microlight Jacket">
                                    </a>
                                    <p class="jacket-name">${results[1].name}</p>
                                    <p class="jacket-color">${results[1].attributes[0].terms[0].name}
                                    <p class="jacket-price">kr ${results[1].prices.sale_price}</p>



                                  `;
}
fetchSingleData();
