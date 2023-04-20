// I wanted to show the the correct product on the checkout, but i managed to only get the first one.

const queryString = document.location.search;

const params = new URLSearchParams(queryString);

const id = params.get("id");
console.log(id);

const container = document.querySelector(".myOrderDetails");

const url = "https://sugal.no/wp-json/wc/store/products";

async function fetchProduct() {
  try {
    const response = await fetch(url);
    const moreDetails = await response.json();

    setTimeout(function () {
      container.innerHTML = "";

      html(moreDetails);
      console.log(moreDetails);
    }, 700);
  } catch (error) {
    console.log("An error occured");
    container.innerHTML = "An error occured";
  }
}

fetchProduct();

function html(moreDetails) {
  container.innerHTML = `<img src="${moreDetails[1].images[0].src}" class="orderJacket" alt=" a Microlight Jacket"> 
                        <h2 class="my-order_jacket">${moreDetails[1].name}</h2>
                        <h4 class="my-order_color">${moreDetails[1].attributes[0].terms[0].name}</h4>
                        <h4 class="my-order_price">kr ${moreDetails[1].prices.sale_price}</p></h4>



                 
                 
           `;

  containerTwo.innerHTML = `<img src="${moreDetails[0].images[0].src}" class="orderJacket" alt=" a Microlight Jacket"> 
           <h2 class="my-order_jacket">${moreDetails[0].name}</h2>
           <h4 class="my-order_color">${moreDetails[0].attributes[0].terms[0].name}</h4>
           <h4 class="my-order_price">kr ${moreDetails[0].prices.sale_price}</p></h4>
           `;
}
