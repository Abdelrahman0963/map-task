const productsTow = [
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
const searchParam = window.location.search;
const param = new URLSearchParams(searchParam).get("slug");
const findSingleProduct = productsTow.find((product) => product.slug === param);
function displayfindSingleProduct() {
    let html;
    if (findSingleProduct) {
        html = `
          <div class="product-item-content">
        <div class="product-item">
          <div class="product-item-img">
            <img src="${findSingleProduct.image}" alt="${findSingleProduct.title}" />
          </div>
          <div class="product-content">
            <h2>${findSingleProduct.title}</h2>
            <div class="product-content-rate-an-feedback">
              <div class="product-content-rate">
                  ${new Array(5)
                .fill(0)
                .map((_, index) =>
                    findSingleProduct.rate >= index + 1
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
              <div class="product-content-feedback">
                <p><span>500</span> Feedback</p>
              </div>
            </div>
            <div class="product-content-description">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas
                nihil laboriosam voluptatem ab consectetur dolorum id, soluta
                sunt at culpa commodi totam quod natus qui!
              </p>
            </div>
            <div class="product-content-price">
              <div class="product-content-price-New">
                <div class="product-price-sict">
                  <p>$${findSingleProduct.isDiscount ? findSingleProduct.newPrice : findSingleProduct.oldPrice}</p>
                  <p class="discount">-78%</p>
                </div>
                <div class="Stock-Keeping-Unit">
                  <strong><span class="sku">S.K.U. :</span>WH123</strong>
                  <span class="stock">${findSingleProduct.stock !== 0 ? "In Stock" : "Out of Stock"}</span>
                </div>
              </div>
              <div class="Maximum-Retail-Price">
                <p><span>M.R.P. :</span>$1,999.00</p>
              </div>
            </div>
            <div class="product-content-list">
              <ul>
                <li>Closure : Hook & Loop</li>
                <li>Sole : Polyvinyl Chloride</li>
                <li>Width : Medium</li>
                <li>Outer Material : A-Grade Standard Quality</li>
              </ul>
            </div>
            <div class="product-content-weight">
              <h2>Weight</h2>
              <nav class="product-content-weight-bord">
                <span>0.5 kg</span>
              </nav>
            </div>
            <div class="product-content-cart">
              <div class="product-content-count">
                <span>+</span>
                <span>1</span>
                <span>-</span>
              </div>
              <nav class="product-content-view-cart">
                <h3>View Cart</h3>
              </nav>
              <div class="product-content-wish-list">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 24 24"
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g id="Heart">
                    <path
                      d="M12,20.043a.977.977,0,0,1-.7-.288L4.63,13.08A5.343,5.343,0,0,1,6.053,4.513,5.266,5.266,0,0,1,12,5.371a5.272,5.272,0,0,1,5.947-.858A5.343,5.343,0,0,1,19.37,13.08l-6.676,6.675A.977.977,0,0,1,12,20.043ZM8.355,4.963A4.015,4.015,0,0,0,6.511,5.4,4.4,4.4,0,0,0,4.122,8.643a4.345,4.345,0,0,0,1.215,3.73l6.675,6.675,6.651-6.675a4.345,4.345,0,0,0,1.215-3.73A4.4,4.4,0,0,0,17.489,5.4a4.338,4.338,0,0,0-4.968.852h0a.744.744,0,0,1-1.042,0A4.474,4.474,0,0,0,8.355,4.963Z"
                    ></path>
                  </g>
                </svg>
              </div>
              <div class="product-content-review">
                <svg
                  stroke="currentColor"
                  fill="currentColor"
                  stroke-width="0"
                  viewBox="0 0 576 512"
                  height="16px"
                  width="16px"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M572.52 241.4C518.29 135.59 410.93 64 288 64S57.68 135.64 3.48 241.41a32.35 32.35 0 0 0 0 29.19C57.71 376.41 165.07 448 288 448s230.32-71.64 284.52-177.41a32.35 32.35 0 0 0 0-29.19zM288 400a144 144 0 1 1 144-144 143.93 143.93 0 0 1-144 144zm0-240a95.31 95.31 0 0 0-25.31 3.79 47.85 47.85 0 0 1-66.9 66.9A95.78 95.78 0 1 0 288 160z"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <div class="product-content-detail-info-review">
          <div class="product-content-DIR">
            <h3>Detail</h3>
            <h3>Detail</h3>
            <h3>Detail</h3>
          </div>
          <div class="product-content-DIR-container">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero,
              voluptatum. Vitae dolores alias repellat eligendi, officiis,
              exercitationem corporis quisquam delectus cum non recusandae
              numquam dignissimos molestiae magnam hic natus. Cumque.
            </p>
            <ul>
              <li>Any Product types that You want - Simple, Configurable</li>
              <li>Downloadable/Digital Products, Virtual Products</li>
              <li>Inventory Management with Backordered items</li>
              <li>Flatlock seams throughout.</li>
            </ul>
            <ul class="defrant-list">
              <li>Highlights <span>Form FactorWhole </span></li>
              <li>Seller <span>No Returns Allowed </span></li>
              <li>Services <span>Cash on Delivery available</span></li>
            </ul>
          </div>
        </div>
      </div>
        `
        document.body.innerHTML = html
    } else {
    }
}

displayfindSingleProduct()
