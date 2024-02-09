fetchProducts();

// fetch Products-Data!!
async function fetchProducts() {

    const rawData = await fetch("https://fakestoreapi.com/products");

    const data = await rawData.json();

    // console.log(data);

    // products !!
    const productContainer = document.querySelector(".products");
    productContainer.innerHTML = ``;

    let productTemplate = ``;

    // display products.
    for (let i = 0; i < data.length; i++) {

        productTemplate += `
    
            <div class="card product-card" style="width: 18rem;">
                <img src="${data[i].image}" class="rounded mx-auto d-block" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${data[i].title}</h5>
                    <p class="card-text">${data[i].description}</p>
                    <p class="card-text">₹ ${Math.round(data[i].price)}</p>
                    <p class="card-text">&bigstar; ${data[i].rating.rate} | ${data[i].rating.count}</p>

                    <button class="btn btn-danger">Add to Cart</button>
                </div>
            </div>
    
        `;

    }


    productContainer.innerHTML = productTemplate;


}


