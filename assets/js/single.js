let bagItem2 = {};
let singleProduct;
onLoad();

function onLoad() {
  bagItem2 = localStorage.getItem("productsArray");
  singleProduct = JSON.parse(bagItem2);
  addCard(singleProduct);
}
//console.log(singleProduct.title);

function addCard(singleProduct) {
  let containerElement = document.querySelector(".addcard");
  //console.log(productSecond);
  containerElement.innerHTML += `<div class="row">
    <div class="col-md-6 d-flex justify-content-between flex-column">
        <div class="product-images d-flex justify-content-center">
            <img src="${singleProduct.images[0]}" alt="single-product-img" id="single-img">
        </div>
        <div class="product-multiple-image">
         <div class="product-inner-images d-flex">
           <img src="${singleProduct.images[4]}" alt="single-product-img" id="image-1">
           <img src="${singleProduct.images[2]}" alt="single-product-img" id="image-2">
           <img src="${singleProduct.images[0]}" alt="single-product-img" id="image-3">
           <img src="${singleProduct.images[3]}" alt="single-product-img" id="image-4">
           <img src="${singleProduct.images[1]}" alt="single-product-img" id="image-5">
        </div>
        </div>
    </div>
    <div class="col-md-6">
        <div class="product-detailes">
            <h2 class="product-title ">${singleProduct.title}</h2>
            <p class="product-description text-secondary">${singleProduct.description}</p>
            <span class="product-reting d-flex mb-2"><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i><i class="bi bi-star-fill"></i>${singleProduct.rating} (${singleProduct.ratingCount} reviwes)</span>
            <span class=""></span>
            <div class="alert alert-warning py-2 w-75" role="alert">
            <strong> <i class="bi bi-star-fill"></i> 309 people </strong> have checked this pair in the last hour!
            </div>
            <h4 class="product-price">$ ${singleProduct.price}</h4>
            <p class="price-subject border-bottom w-75 pb-2">Price subject to change at checkout based on options selected</p>            
            <p class="size-title mb-1">Select size</p>
            <div class="d-flex">
            <h6 class="product-size pr-2">${singleProduct.size} </h6>
             <a href="#" class="find-your-size text-secondary">Find your size</a>
            </div>
             <div class="d-flex flex-column">
            <button class="btn btn-secondary py-2 px-0 my-2 rounded btn-sm w-50" onclick="addToCard(${singleProduct})">Add to Card</button>
             <a href="#" class="text-secondary">Need a new prescription?</a>
             </div>
            </div>
    </div>
  </div>
    `;
}


const image_id = document.getElementById("image-1");
const image_id_1 = document.getElementById("image-2");
const image_id_2 = document.getElementById("image-3");
const image_id_3 = document.getElementById("image-4");
const image_id_4 = document.getElementById("image-5");

const single_img = document.getElementById('single-img');

image_id.onclick = function (){
  single_img.src = image_id.src;
}

image_id_1.onclick = function (){
  single_img.src = image_id_1.src;
}
image_id_2.onclick = function (){
  single_img.src = image_id_2.src;
}
image_id_3.onclick = function (){
  single_img.src = image_id_3.src;
}
// image_id_4.onclick = function (){
//   single_img.src = image_id_4.src;
// }



function addToCard(productSingle){
   localStorage.setItem("product", "productSingle");
   
  console.log(productSingle)
}