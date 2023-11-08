var products = [
  {
    id: 1,
    title: "Classic Wayfarer Sunglasses",
    description: "Timeless style with UV protection and polarized lenses.",
    price: 99.99,
    size: "Medium",
    images: [
      "/assets/img/product-imeges/mt6812.jpg",
      "/assets/img/product-imeges/mt6812_w0.jpg",
    ],
    delivery: "2-Day DELICERY",
    rating: 4.3,
    ratingCount: 123,
  },
  {
    id: 2,
    title: "Retro Round Glasses",
    description: "Vintage-inspired round frames with clear lenses.",
    price: 49.99,
    size: "Small",
    images: [
      "/assets/img/product-imeges/rm3124.jpg",
      "/assets/img/product-imeges/rm3124_w0.jpg",
    ],
    rating: 3.3,
    ratingCount: 183,
  },
  {
    id: 3,
    title: "Designer Reading Glasses",
    description: "High-quality reading glasses with a stylish frame.",
    price: 79.99,
    size: "Small",
    images: [
      "/assets/img/product-imeges/mt6508.jpg",
      "/assets/img/product-imeges/mt6508_w0.jpg",
    ],
    delivery: "1-Day DELICERY",
    rating: 3.3,
    ratingCount: 23,
  },
  {
    id: 4,
    title: "Sports Performance Eyewear",
    description:
      "Durable sports glasses with shatterproof lenses for active lifestyles.",
    price: 69.99,
    size: "Large",
    images: [
      "/assets/img/product-imeges/rm3048.jpg",
      "/assets/img/product-imeges/rm3048_w0.jpg",
    ],
    rating: 2.3,
    ratingCount: 13,
  },
  {
    id: 5,
    title: "Fashionable Cat-Eye Glasses",
    description: "Elegant cat-eye frames for a chic look.",
    price: 119.99,
    size: "Medium",
    images: [
      "/assets/img/product-imeges/pm0990.jpg",
      "/assets/img/product-imeges/pm0990_w0.jpg",
    ],
    rating: 5,
    ratingCount: 1023,
  },
  {
    id: 6,
    title: "Prescription Aviator Glasses",
    description: "Classic aviator style with prescription lenses.",
    price: 129.99,
    size: "Large",
    images: [
      "/assets/img/product-imeges/pm0982.jpg",
      "/assets/img/product-imeges/pm0982_w0.jpg",
    ],
    delivery: "2-Day DELICERY",
    rating: 4,
    ratingCount: 1253,
  },
  {
    id: 7,
    title: "Kids' Fun and Colorful Glasses",
    description:
      "Colorful and playful glasses for children with impact-resistant lenses.",
    price: 39.99,
    size: "Kids",
    images: [
      "/assets/img/product-imeges/pm0905.jpg",
      "/assets/img/product-imeges/pm0905_w0.jpg",
    ],
    delivery: "1-Day DELICERY",
    rating: 3,
    ratingCount: 1203,
  },
  {
    id: 8,
    title: "Fashion Oversized Frames",
    description: "Oversized frames for a bold and trendy look.",
    price: 89.99,
    size: "Large",
    images: [
      "/assets/img/product-imeges/pm0898.jpg",
      "/assets/img/product-imeges/pm0898_w0.jpg",
    ],
    rating: 3.4,
    ratingCount: 13,
  },
  {
    id: 9,
    title: "Anti-Blue Light Computer Glasses",
    description:
      "Computer glasses to reduce eye strain from screens with anti-blue light coating.",
    price: 59.99,
    size: "Medium",
    images: [
      "/assets/img/product-imeges/pm0894.jpg",
      "/assets/img/product-imeges/pm0894_w0.jpg",
    ],
    delivery: "1-Day DELICERY",
    rating: 2,
    ratingCount: 323,
  },
  {
    id: 10,
    title: "Elegant Bifocal Reading Glasses",
    description: "Bifocal reading glasses with a sophisticated frame design.",
    price: 69.99,
    size: "Medium",
    images: [
      "/assets/img/product-imeges/pm0884.jpg",
      "/assets/img/product-imeges/pm0884_w0.jpg",
    ],
    rating: 4.0,
    ratingCount: 293,
  },
  {
    id: 11,
    title: "Stylish Tortoise Shell Glasses",
    description: "Trendy tortoise shell frames for a fashion-forward look.",
    price: 109.99,
    size: "Medium",
    images: [
      "/assets/img/product-imeges/pm0562.jpg",
      "/assets/img/product-imeges/pm0562_w0.jpg",
    ],
    rating: 4.3,
    ratingCount: 323,
  },
  {
    id: 12,
    title: "Sports Wraparound Sunglasses",
    description:
      "Wraparound sunglasses for outdoor enthusiasts with UV protection.",
    price: 79.99,
    size: "Large",
    images: [
      "/assets/img/product-imeges/pm0294_3.jpg",
      "/assets/img/product-imeges/pm1.jpg",
    ],
    delivery: "1-Day DELICERY",
    rating: 4.4,
    ratingCount: 673,
  },
  {
    id: 13,
    title: "Rimless Reading Glasses",
    description:
      "Rimless reading glasses for a minimalist and lightweight design.",
    price: 59.99,
    size: "Small",
    images: [
      "/assets/img/product-imeges/pl7794.jpg",
      "/assets/img/product-imeges/pl7794_w0.jpg",
    ],
    rating: 3.0,
    ratingCount: 283,
  },
  {
    id: 14,
    title: "Professional Pilot Sunglasses",
    description:
      "Pilot sunglasses with a classic aviator style and polarized lenses.",
    price: 129.99,
    size: "Large",
    images: [
      "/assets/img/product-imeges/pl7790.jpg",
      "/assets/img/product-imeges/pl7790_w0.jpg",
    ],
    delivery: "1-Day DELICERY",
    rating: 2.5,
    ratingCount: 567,
  },
  {
    id: 15,
    title: "Designer Cat-Eye Frames",
    description:
      "Designer cat-eye frames with a luxurious design and metal accents.",
    price: 149.99,
    size: "Medium",
    images: [
      "/assets/img/product-imeges/pl7785.jpg",
      "/assets/img/product-imeges/pl7785_w0.jpg",
    ],
    rating: 3,
    ratingCount: 978,
  },
  {
    id: 16,
    title: "Retro Square Glasses",
    description:
      "Square frames with a retro look and prescription lens options.",
    price: 69.99,
    size: "Medium",
    images: [
      "/assets/img/product-imeges/pl7784.jpg",
      "/assets/img/product-imeges/pl7784_w0.jpg",
    ],
    rating: 3.6,
    ratingCount: 765,
  },
  {
    id: 17,
    title: "Vintage Round Sunglasses",
    description: "Round sunglasses with a vintage appeal and gradient lenses.",
    price: 89.99,
    size: "Medium",
    images: [
      "/assets/img/product-imeges/pl7779.jpg",
      "/assets/img/product-imeges/pl7779_w0.jpg",
    ],
    delivery: "2-Day DELICERY",
    rating: 3.9,
    ratingCount: 985,
  },
  {
    id: 18,
    title: "Modern Metal-Frame Glasses",
    description: "Metal-frame glasses with a modern, lightweight design.",
    price: 79.99,
    size: "Medium",
    images: [
      "/assets/img/product-imeges/pl7772.jpg",
      "/assets/img/product-imeges/pl7772_w0.jpg",
    ],
    rating: 3.2,
    ratingCount: 743,
  },
  {
    id: 19,
    title: "Geometric Shape Glasses",
    description: "Geometric shape frames for a unique and artistic look.",
    price: 119.99,
    size: "Medium",
    images: [
      "/assets/img/product-imeges/pl7173.jpg",
      "/assets/img/product-imeges/pl7173_w0.jpg",
    ],
    rating: 5,
    ratingCount: 976,
  },
  {
    id: 20,
    title: "Sports Prescription Glasses",
    description:
      "Prescription glasses designed for sports and outdoor activities.",
    price: 99.99,
    size: "Large",
    images: [
      "/assets/img/product-imeges/pl7537.jpg",
      "/assets/img/product-imeges/pl7537_w0.jpg",
    ],
    rating: 2.3,
    ratingCount: 753,
  },
  {
    id: 21,
    title: "Aviator Sunglasses with Mirrored Lenses",
    description:
      "Aviator sunglasses with mirrored lenses for a bold and stylish appearance.",
    price: 109.99,
    size: "Large",
    images: [
      "/assets/img/product-imeges/pl7784.jpg",
      "/assets/img/product-imeges/pl7784_w0.jpg",
    ],
    rating: 4.0,
    ratingCount: 123,
  },
  {
    id: 22,
    title: "Trendy Oversized Sunglasses",
    description:
      "Oversized sunglasses with trendy colors and full UV protection.",
    price: 79.99,
    size: "Large",
    images: [
      "/assets/img/product-imeges/pl6453.jpg",
      "/assets/img/product-imeges/pl6453_w0.jpg",
    ],
    delivery: "1-Day DELICERY",
    rating: 4.3,
    ratingCount: 345,
  },
  {
    id: 23,
    title: "Bamboo Wood Frames",
    description:
      "Eyeglasses with bamboo wood frames for an eco-friendly and unique style.",
    price: 129.99,
    size: "Medium",
    images: [
      "/assets/img/product-imeges/mt7215.jpg",
      "/assets/img/product-imeges/mt7215_w0.jpg",
    ],
    rating: 4.5,
    ratingCount: 543,
  },
  {
    id: 24,
    title: "Fashionable Hexagonal Glasses",
    description: "Hexagonal frames with a fashionable and geometric design.",
    price: 119.99,
    size: "Medium",
    images: [
      "/assets/img/product-imeges/pl7790.jpg",
      "/assets/img/product-imeges/pl7790_w0.jpg",
    ],
    rating: 3.3,
    ratingCount: 654,
    delivery: "Out of Stock",
  },
  {
    id: 25,
    title: "Sports Wraparound Sunglasses",
    description:
      "Wraparound sunglasses with polarized lenses and a secure fit for sports.",
    price: 89.99,
    size: "Large",
    images: ["roundglasses.jpg", "roundglasses2.jpg"],
    delivery: "2-Day DELICERY",
    rating: 5.0,
    ratingCount: 987,
  },
];



// Function to generate HTML for each product
function generateProductHTML(product) {
  return `
  <div class="product mb-3 eyeglass ">
  <a class="btn" onclick="openUrl(${product.id})">
    <div class="product-single-card product-single-card-eyeglass">
      <div class="product-top-area">
      ${
        product.delivery === undefined
          ? `<div class="product-discount-eyeglass d-none">
        </div>`
          : `<div class="product-discount-eyeglass">
        ${product.delivery}
        </div>`
      }
        <div class="product-img">
          <div class="first-view">
            <img src="${product.images[0]}" alt="${
    product.title
  }" class="product-img">
          </div>
          <div class="hover-view">
            <img src="${product.images[1]}" alt="${
    product.title
  }" class="product-img">
          </div>
        </div>
        <div class="sideicons">
          <button class="sideicons-btn" onclick="addToBag(${product.id})">
            <i class="bi bi-cart-plus-fill" ></i>
          </button>
          <button class="sideicons-btn">
            <i class="bi bi-eye-fill"></i>
          </button>
          <button class="sideicons-btn">
            <i class="bi bi-heart-fill"></i>
          </button>
          <button class="sideicons-btn">
            <i class="bi bi-shuffle"></i>
          </button>
        </div>
      </div>
      <div class="product-info">
        <h6 class="product-category m-0">
         <a href="#"
            class="text-decoration-none text-dark m-0">${product.title}
          </a>
        </h6>
        <h6 class="product-title text-truncate">
          <a href="#"
            class="text-decoration-none text-secondary">${
              product.description
            }
          </a>
        </h6>
        <div class="d-flex flex-wrap align-items-center pb-2">
          <div class="eyeglass-price new-price">
          $${product.price}
          </div>
          <div class="eyeglass-price-old old-price">
            $50.45
          </div>
          <div class="d-flex align-items-center product-review">
            <div class="review-star me-1">
              <i class="bi bi-star-fill"></i>
            </div>

            ${
              product.rating === undefined
                ? `<span class="review-count ml-1 d-none"></span>`
                : `<span class="review-count ml-1">${product.rating}</span>`
            }
           
             ${
               product.ratingCount === undefined
                 ? `<span class="review-count ml-2 d-none"></span>`
                 : ` <span class="review-count ml-2">(${product.ratingCount})</span>`
             }
           
          </div>
        </div>
      
      </div>
    </div>
  </a>
</div>

    `;
}


  

// Function to insert product HTML into the page
function displayProducts() {
  let counter = 0;
  let productListDiv = document.getElementById("productList");
  let productListSecond = document.getElementById("productListSecond");
  let productListThird = document.getElementById("productListThird");
  let productListFour = document.getElementById("productListFour");

  products.forEach(function (product) {
    if (counter < 6) {
      let productHTML = generateProductHTML(product);
      if(!productListDiv){
        return;
      }
      productListDiv.innerHTML += productHTML;
      counter++;
    } else if (counter >= 6 && counter < 12) {
      let productSecond = generateProductHTML(product);
      productListSecond.innerHTML += productSecond;
      counter++;
    } else if (counter >= 12 && counter < 18) {
      let productThird = generateProductHTML(product);
      productListThird.innerHTML += productThird;
      counter++;
    } else if (counter >= 18 && counter < 24) {
      let productFour = generateProductHTML(product);
      productListFour.innerHTML += productFour;
      counter++;
    }
  });
}



let bagItem = [];
onLoad();

function onLoad() {
  cardCount();
}

function addToBag(itemId) {
  bagItem.push(itemId);
  localStorage.setItem('bagItem', JSON.stringify(bagItem));
  localStorage.setItem('bagItem', 'itemId');
  console.log(bagItem);
  cardCount();
  // window.location.href ='/assets/pages/singleproduct.html';
}

function cardCount() {
  const passCount = document.querySelector(".card-count");
  if (bagItem.length > 0) {
    passCount.style.visibility = "visible";
    passCount.innerHTML = bagItem.length;
  } else {
    passCount.style.visibility = "hidden";
  }
}

// function addToBagSingle(productId){
//   addToBag(productId);
//   //openUrl(productId);
// }

function openUrl(itemId){
  //console.log(itemId);
  const productId = itemId - 1;
  localStorage.setItem("Iid",productId);
  localStorage.setItem("productsArray", JSON.stringify(products[productId]));
  window.location.href ='/assets/pages/singleproduct.html';

}
// Call the function to display products when the page loads
window.onload = displayProducts;
