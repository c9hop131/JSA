let products = [
    {
        name: 'Pho',
        title: 'Mon ngon Ha Noi',
        img: './img/item-picture1.webp'
    },
    {
        name: 'Bun_rieu',
        title: 'Mon ngon Ha Noi',
        img: './img/item-picture1.webp'
    },
    {
        name: 'Bun_bo_Hue',
        title: 'Mon ngon Ha Noi',
        img: './img/item-picture1.webp'
    },
    {
        name: 'Bun_oc',
        title: 'Mon ngon Ha Noi',
        img: './img/item-picture1.webp'
    },
    {
        name: 'Banhcuon',
        title: 'Mon ngon Ha Noi',
        img: './img/item-picture1.webp'
    },
    {
        name: 'Banh_mi',
        title: 'Mon ngon Ha Noi',
        img: './img/item-picture1.webp'
    }
];

// localStorage

let productsCart = []
let productsCartString = JSON.stringify(productsCart);
localStorage.setItem('productsCart', productsCartString);

let productsString = JSON.stringify(products)
console.log(productsString);
localStorage.setItem('products', productsString);

let productsData = localStorage.getItem('products');
console.log(JSON.parse(productsData));




let items =  document.querySelector('.items')
for (product of products){
    items.innerHTML += `
        <div class = 'item'>
        <div class = 'product-view'>
            <img src = ${product.img} alt='' class = 'img-icon'>
            <button class = 'btn' type = 'input' value = ${product.name} >add to list</button>
        </div>
        <div class = 'content'>
            <h3>${product.name}</h3>
            <p>${product.title}</p>
        </div>
        </div>
   `
}

