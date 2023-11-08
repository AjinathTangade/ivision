

let bagItem2 = {};
let singleProduct;
onLoad();

function onLoad(){ 
   bagItem2 = localStorage.getItem("productsArray");
   singleProduct= JSON.parse(bagItem2);
   addCard(singleProduct);
}
 console.log(singleProduct.title);


function addCard(singleProduct) {
 
    let containerElement = document.querySelector('.addcard');
    //console.log(productSecond);
    containerElement.innerHTML += `<div class="row">
    <div class="col-md-6">
        <div class="product-images">
            <img src="" alt="">
        </div>
    </div>
    <div class="col-md-6">
        <div class="product-detailes">
            <h2 class="product-title">${singleProduct.title}</h2>
            <p class="product-description">dfghdh</p>
            <span class="product-reting">hdfhdfgh</span>
            <h4 class="product-price">ghfdgh</h4>
            <h5 class="product-size">gfhdfghdfg</h5>
            <button>Select Lenses</button>
        </div>
    </div>
  </div>
    `;
  }