// VARIABLES

const productsDOM = document.querySelector(".products-center");

// Buttons
let buttonsDOM = [];


async function getProducts() {

    try {
        let result = await fetch("products.json");

        let data = await result.json();

        let products = data.items;
        console.log(products);
        products = products.map(function (item) {
            const title = item.fields.title;
            const price = item.fields.price;
            const id = item.sys.id;
            const image = item.fields.image.fields.file.url;

            return { title, price, id, image };
        })

        return products;

    } catch (error) {
        console.log(error);
    }
}


// Getting the products
let dom = "";
async function getProducts() {

    try {
        let result = await fetch("products.json");

        let data = await result.json();

        let products = data.items;

        products = products.map(function (item) {
            const title = item.fields.title;
            const price = item.fields.price;
            const id = item.sys.id;
            const image = item.fields.image.fields.file.url;

            return { title, price, id, image };
        })


        products.forEach(product => {
            dom += ` <article class="product">
                            <div class="img-container">
                                <img src="${product.image}" 
                                alt="" srcset="" 
                                class="product-img">

                                <button class="bag-btn" data-id=${product.id}>
                                <i class="fa fa-shopping-cart">
                                </i>Enroll</button>
                            </div>
                            <h4>${product.title}</h4>
                            <h5>Rs. ${product.price}</h5>
                        </article>`;
        });
        productsDOM.innerHTML = dom;

    }
    catch {
        (error) => {
            console.log(error);
        }
    };
}




let course = getProducts();
console.log(course);





