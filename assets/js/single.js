let bagItem2 = {};
let singleProduct;
onLoad();

function onLoad() {
  bagItem2 = localStorage.getItem("productsArray");
  singleProduct = JSON.parse(bagItem2);
  addCard(singleProduct);
}
console.log(singleProduct.title);

function addCard(singleProduct) {
  let containerElement = document.querySelector(".addcard");
  //console.log(productSecond);
  containerElement.innerHTML += `<div class="row">
    <div class="col-md-6">
        <div class="product-images">
            <img src="${singleProduct.images[0]}" alt="">
        </div>
    </div>
    <div class="col-md-6">
        <div class="product-detailes">
            <h2 class="product-title ">${singleProduct.title}</h2>
            <p class="product-description text-secondary">${singleProduct.description}</p>
            <span class="product-reting d-flex mb-2"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>${singleProduct.rating} (${singleProduct.ratingCount} reviwes)</span>
            <span class=""></span>
            <div class="alert alert-warning py-3 w-75" role="alert">
            <strong> <i class="bi bi-star-fill"></i> 309 people </strong> have checked this pair in the last hour!
            </div>
            <h4 class="product-price">$ ${singleProduct.price}</h4>
            <p class="price-subject border-bottom-2">Price subject to change at checkout based on options selected</p>            
            <p class="size-title">Select size</p>
            <h5 class="product-size">${singleProduct.size} <a href="#" class="find-your-size">Find your size</a></h5>
            <button class="btn btn-secondary py-2 px-5 rounded">Add to Card</button>
             <a href="#">Need a new prescription?</a>
            </div>
    </div>
  </div>
    `;
}
