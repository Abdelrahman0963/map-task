let currentCategory = "all";
let activeWeight = 0;
const products = [
    {
        id: 1,
        title: "Ground Nuts Oil Pack",
        slug: "ground-nuts-oil-pack",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/1.jpg",
        category: "snack-and-spices",
        sub_category: "snack",
        rate: 4,
        isDiscount: true,
        oldPrice: 30,
        newPrice: 20,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 2,
        title: "Organic Litchi Juice Pack",
        slug: "organic-litchi-juice-pack",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/2.jpg",
        category: "snack-and-spices",
        sub_category: "Juice",
        rate: 4,
        isDiscount: true,
        oldPrice: 30,
        newPrice: 20,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 3,
        title: "Crunchy Banana Chips",
        slug: "crunchy-banana-chips",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/3.jpg",
        category: "snack-and-spices",
        sub_category: "chips",
        rate: 4,
        isDiscount: true,
        oldPrice: 30,
        newPrice: 20,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 4,
        title: "Organic dragon fruit",
        slug: "organic-dragon-fruit",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/9.jpg",
        category: "fruits",
        sub_category: "fruit",
        rate: 3,
        isDiscount: false,
        oldPrice: 30,
        newPrice: null,
        out_of_stock: false,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
    {
        id: 5,
        title: "Fresh blue berry",
        slug: "fresh-blue-berry",
        image: "https://maraviyainfotech.com/projects/blueberry-tailwind/assets/img/new-product/10.jpg",
        category: "fruits",
        sub_category: "fruit",
        rate: 5,
        isDiscount: false,
        oldPrice: 30,
        newPrice: null,
        out_of_stock: true,
        weight: [100, 250, 500],
        description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1900s,",
    },
];
const productsContainer = document.querySelector(".product-container-cards");
const categoriesItem = document.querySelector(".product-category-items");
function handleCategories() {
    let categories = [];
    products.forEach((product) => categories.push(product.category));
    const uniqueCategories = ["all", ...new Set(categories)];
    const results = uniqueCategories.map((category) => ({
        label: category.replaceAll("-", " ").replaceAll("and", "&"),
        value: category,
    }));
    results.forEach(
        (item) =>
        (categoriesItem.innerHTML += `<h3 class="${currentCategory == item.value ? "active" : ""}" data-value="${item.value}">${item.label}</h3>
                    <span>/</span>`),
    );
    const categoryItem = document.querySelectorAll(".product-category-items h3");
    categoryItem.forEach(
        (item) =>
        (item.onclick = () => {
            categoryItem.forEach((item) => item.classList.remove("active"));
            item.classList.add("active");
            currentCategory = item.dataset.value;
            handleFilterProducts();
        }),
    );
}
function handleFilterProducts() {
    if (currentCategory == "all") {
        return displayProducts(products);
    } else {
        const filterProducts = products.filter((product) => product.category == currentCategory);
        return displayProducts(filterProducts);
    }
}
function displayProducts(data) {
    let html = ``
    data.forEach(
        (product) =>
        (html += `<div class="product-card" data-slug="${product.slug}">
                    <div class="product-card-image">
                        <div class="product-card-image-icons">
                            <div class="icon">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="16" width="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <g id="Heart">
                                        <path
                                            d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z">
                                        </path>
                                    </g>
                                </svg>
                            </div>
                            <div class="icon" onclick="showDisplaySingleProduct('${product.slug}')" >
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="16" width="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                                        d="M255.66 112c-77.94 0-157.89 45.11-220.83 135.33a16 16 0 0 0-.27 17.77C82.92 340.8 161.8 400 255.66 400c92.84 0 173.34-59.38 221.79-135.25a16.14 16.14 0 0 0 0-17.47C428.89 172.28 347.8 112 255.66 112z">
                                    </path>
                                    <circle cx="256" cy="256" r="80" fill="none" stroke-miterlimit="10" stroke-width="32"></circle>
                                </svg>
                            </div>
                            <div class="icon">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="16" width="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M233.9 328.1c-2.6-2.6-6.1-4.1-9.9-4.1-3.7 0-7.3 1.4-9.9 4.1-2.6 2.6-4.1 6.1-4.1 9.9 0 3.7 1.4 7.3 4.1 9.9l.1.1 41.1 40.1H166c-20.4 0-33.6-7.5-41.6-23.5-8.4-17-9.4-41.5-9.4-58.5V170.8c15-2.8 28.7-10.5 39-21.9 11.6-12.9 18-29.5 18-46.9 0-38.6-31.4-70-70-70s-70 31.4-70 70c0 17 6.2 33.3 17.3 46.1 9.9 11.3 23.1 19.1 37.7 22.3V306c0 14.7 0 42.1 9.4 65.3 11.9 29.3 36 44.7 69.6 44.7h89.7L216 456.2c-5.4 5.4-5.4 14.3 0 19.8l.1.1c2.7 2.5 6.2 3.9 9.8 3.9 3.8 0 7.3-1.4 9.9-4.1l57.6-57.4c4.2-4.2 6.5-9.8 6.5-15.7 0-5.9-2.3-11.3-6.5-15.5l-59.5-59.2zM102 144c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42zM425 341.6V206c0-14.7 0-42.1-9.4-65.3-11.9-29.2-36-44.7-69.6-44.7h-89.7L296 55.8c5.4-5.4 5.4-14.3 0-19.8l-.1-.1c-2.7-2.5-6.2-3.9-9.8-3.9-3.8 0-7.3 1.4-9.9 4.1l-57.6 57.4c-4.2 4.2-6.5 9.8-6.5 15.7 0 5.9 2.3 11.3 6.5 15.5l59.6 59.4c2.6 2.6 6.1 4.1 9.9 4.1 3.7 0 7.3-1.4 9.9-4.1 2.6-2.6 4.1-6.1 4.1-9.9 0-3.7-1.4-7.3-4.1-9.9l-.1-.1-41.2-40.2H346c20.4 0 33.6 7.5 41.6 23.5 8.4 17 9.4 41.5 9.4 58.5v135.2c-15 2.8-28.7 10.5-39 21.9-11.6 12.9-18 29.5-18 46.9 0 38.6 31.4 70 70 70s70-31.4 70-70c0-17-6.2-33.3-17.3-46.1-9.9-11.3-23.2-19.1-37.7-22.3zM410 452c-23.2 0-42-18.8-42-42s18.8-42 42-42 42 18.8 42 42-18.8 42-42 42z">
                                    </path>
                                </svg>
                            </div>
                            <div class="icon">
                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="16" width="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                                        d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32">
                                    </path>
                                    <path fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="32"
                                        d="M160 224v16a96 96 0 0 0 96 96h0a96 96 0 0 0 96-96v-16"></path>
                                </svg>
                            </div>
                        </div>
                        <img src="${product.image}" alt="">
                    </div>
                    <div class="product-card-content">
                        <div class="product-card-content-header">
                            <span>${product.sub_category}</span>
                            <div class="product-card-content-header-rate">
                                ${new Array(5)
                .fill(0)
                .map((_, index) =>
                    product.rate >= index + 1
                        ? `<svg class="active" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                    </path>
                                </svg>`
                        : `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>`,
                )
                .join("")}
                            </div>
                        </div>
                        <a href="http://127.0.0.1:5500/product.html?slug=${product.slug}" class="product-title">${product.title}</a >
                        <div class="product-card-content-price">
                            <div class="product-card-content-price-item">
                                <strong>$${product.isDiscount ? product.newPrice : product.oldPrice}</strong>
                                <del>${product.isDiscount ? `$${product.oldPrice}` : ""}</del>
                                <span class="out_of_stock">${product.out_of_stock ? "Out of stock" : ""}</span>
                            </div>
                            <span class="product-card-content-price-weight">100kg</span>
                        </div>
                    </div>
                </div>`),
    );
    productsContainer.innerHTML = html
}
handleCategories();
handleFilterProducts();
const popupContainer = document.querySelector(".products-detalis-popup-container");
const popupClose = document.querySelector(".products-detalis-popup-close");
function showDisplaySingleProduct(productSlug) {
    popup.classList.add("show");
    popupContainer.classList.add("show");
    document.body.style.position = "fixed";
    const CurrentProduct = products.find((product) => product.slug == productSlug);
    console.log(CurrentProduct);
    popupShowProduct(CurrentProduct)
}
const popup = document.querySelector(".products-detalis-popup");
function popupShowProduct(CurrentProduct) {
    let html = ``;
    html = `
        <div class="products-detalis-popup-close" onclick="hideSingleProduct()">
          <span></span>
        </div>
        <div class="products-detalis-popup-container-data">
          <div class="products-detalis-popup-container-data-image">
            <img src="${CurrentProduct.image}" alt="${CurrentProduct.title}" />
          </div>
          <div class="products-detalis-popup-container-data-content">
            <h2 class="products-detalis-popup-container-data-content-title">
              ${CurrentProduct.title}
            </h2>
            <div class="products-detalis-popup-rate">
             ${new Array(5)
            .fill(0)
            .map((_, index) =>
                CurrentProduct.rate >= index + 1
                    ? `<svg class="active" stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M316.9 18C311.6 7 300.4 0 288.1 0s-23.4 7-28.8 18L195 150.3 51.4 171.5c-12 1.8-22 10.2-25.7 21.7s-.7 24.2 7.9 32.7L137.8 329 113.2 474.7c-2 12 3 24.2 12.9 31.3s23 8 33.8 2.3l128.3-68.5 128.3 68.5c10.8 5.7 23.9 4.9 33.8-2.3s14.9-19.3 12.9-31.3L438.5 329 542.7 225.9c8.6-8.5 11.7-21.2 7.9-32.7s-13.7-19.9-25.7-21.7L381.2 150.3 316.9 18z">
                                    </path>
                                </svg>`
                    : `<svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="16" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M528.1 171.5L382 150.2 316.7 17.8c-11.7-23.6-45.6-23.9-57.4 0L194 150.2 47.9 171.5c-26.2 3.8-36.7 36.1-17.7 54.6l105.7 103-25 145.5c-4.5 26.3 23.2 46 46.4 33.7L288 439.6l130.7 68.7c23.2 12.2 50.9-7.4 46.4-33.7l-25-145.5 105.7-103c19-18.5 8.5-50.8-17.7-54.6zM388.6 312.3l23.7 138.4L288 385.4l-124.3 65.3 23.7-138.4-100.6-98 139-20.2 62.2-126 62.2 126 139 20.2-100.6 98z"></path></svg>`,
            )
            .join("")}
            </div>
            <p
              class="products-detalis-popup-container-data-content-description"
            >
             ${CurrentProduct.description}
            </p>
            <div class="products-detalis-popup-price">
              <strong>$${CurrentProduct.isDiscount ? CurrentProduct.newPrice : CurrentProduct.oldPrice}</strong>
              <del>$${CurrentProduct.isDiscount ? CurrentProduct.oldPrice : ""}</del>
            </div>
            <div class="products-detalis-popup-container-weights">
              ${CurrentProduct.weight.map((weight, index) => `<span class="${index == 0 ? "active" : ""}" onclick="activeWeightProduct(event)">${weight}</span>`).join("")}
            </div>
            <div class="products-detalis-popup-container-cart">
              <div class="products-detalis-popup-container-cart-quntity">
                <span onclick="quntityMinus()">-</span>
                <span>1</span>
                <span onclick="quntityPlus()">+</span>
              </div>
              <div class="products-detalis-popup-container-cart-btn">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 448 512"
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M400 224h-24v-72C376 68.2 307.8 0 224 0S72 68.2 72 152v72H48c-26.5 0-48 21.5-48 48v192c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V272c0-26.5-21.5-48-48-48zm-104 0H152v-72c0-39.7 32.3-72 72-72s72 32.3 72 72v72z"
                  ></path>
                </svg>
                <span>Add to Cart</span>
              </div>
            </div>
          </div>
        </div>
    `
    popupContainer.innerHTML = html;
}
function hideSingleProduct() {
    popup.classList.remove("show");
    popupContainer.classList.remove("show");
    document.body.style.position = "relative";
}

function activeWeightProduct(e) {
    const weights = document.querySelectorAll(".products-detalis-popup-container-weights span");
    weights.forEach((weight) => {
        weight.classList.remove("active");
    });
    e.target.classList.add("active");
}
function quntityPlus() {
    let quntity = document.querySelector(".products-detalis-popup-container-cart-quntity span:nth-child(2)");
    quntity.innerHTML = parseInt(quntity.innerHTML) + 1;
    Toastify({
        text: "Add item from cart",
        duration: 3000,
        destination: "https://github.com/apvarun/toastify-js",
        newWindow: true,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "#6c80dd",
        },
        onClick: function () { }
    }).showToast();

}
function quntityMinus() {
    let quntity = document.querySelector(".products-detalis-popup-container-cart-quntity span:nth-child(2)");
    if (quntity.innerHTML <= 1) {
        quntity.textContent = 1
        Toastify({
            text: "cannot be less than 1",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "linear-gradient(to right,rgb(176, 18, 0),rgb(201, 61, 61))",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    } else {
        quntity.innerHTML = parseInt(quntity.innerHTML) - 1;
        Toastify({
            text: "removed item from cart",
            duration: 3000,
            destination: "https://github.com/apvarun/toastify-js",
            newWindow: true,
            close: true,
            gravity: "top", // `top` or `bottom`
            position: "right", // `left`, `center` or `right`
            stopOnFocus: true, // Prevents dismissing of toast on hover
            style: {
                background: "#4d5c9c",
            },
            onClick: function () { } // Callback after click
        }).showToast();
    }
}