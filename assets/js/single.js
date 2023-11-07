onLoad();

function onLoad(){
    addCard();
}



function addCard(itemId) {
    const addcard = document.querySelector(".addcard");
    addcard.innerHTML = `<div class="row">
    <div class="col-md-6">
        <div class="product-images">
            <img src="" alt="">
        </div>
    </div>
    <div class="col-md-6">
        <div class="product-detailes">
            <h2 class="product-title">hdfghd</h2>
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