
Pants();
T_Shirt();
Shirt();
Watch();


// let bagItemsT_Shirt =[];

// function addToCartT_Shirt(addT_ShirtItemsId) {
//     bagItemsT_Shirt.push(addT_ShirtItemsId);
//     addbagIcon_T_Shirt ();
// }

// function addbagIcon_T_Shirt () {
//     let bagItemsCount_T_Shirt_Element = document.querySelector('.bag-item-count');
//     bagItemsCount_T_Shirt_Element.innerText = bagItemsT_Shirt.length;
// }

let bagItems =[];

function addToCart(addItemsId) {
    bagItems.push(addItemsId);
    addbagIcon ();
}

function addbagIcon () {
    let bagItemsCountElement = document.querySelector('.bag-item-count');
    bagItemsCountElement.innerText = bagItems.length;
}
// --------------------------Pants------------------------------------

function Pants() {
    const Add = document.getElementById('item-div');
// console.log(Add.innerHTML); 

let innerHTML = '';
addItems.forEach(addItems => {
    
    innerHTML += `<div class="category_items">
            <div>
                <a href="#"><img class="sale_item" src="${addItems.image}"></a>
            </div>
            <div class="rating">
                ${addItems.rating.rate} ⭐ | ${addItems.rating.count}
            </div>
            <div class="company-name">${addItems.name}</div>
            <div class="item-name">${addItems.company}</div>
            <div class="price">
                <span class="current-price">Tk ${addItems.newprice}</span>
                <span class="original-price">Tk ${addItems.oldprice}</span>
                <span class="discount">(${addItems.dicount}% Loss)</span>
            </div>
            <div class="Button_add">
                <button class ="buy_button" onclick="addToCart(${addItems.id})"> Add to Cart</button>
                <button class ="Wishlist_button">Wishlist</button>
            </div>
        </div>`
});
Add.innerHTML = innerHTML;

// console.log(Add.innerHTML);
}

// --------------------------T-Shirt------------------------------------

function T_Shirt() {
    const T_Shirt = document.getElementById('T_Shirt');
// console.log(Add.innerHTML); 

let innerHTML = '';
addT_ShirtItems.forEach(addT_ShirtItems => {
    
    innerHTML += `<div class="category_items">
            <div>
                <a href="#"><img class="sale_item" src="${addT_ShirtItems.image}"></a>
            </div>
            <div class="rating">
                ${addT_ShirtItems.rating.rate} ⭐ | ${addT_ShirtItems.rating.count}
            </div>
            <div class="company-name">${addT_ShirtItems.name}</div>
            <div class="item-name">${addT_ShirtItems.company}</div>
            <div class="price">
                <span class="current-price">Tk ${addT_ShirtItems.newprice}</span>
                <span class="original-price">Tk ${addT_ShirtItems.oldprice}</span>
                <span class="discount">(${addT_ShirtItems.dicount}% Loss)</span>
            </div>
            <div class="Button_add">
                <button class ="buy_button onclick="addToCartT_Shirt(${addT_ShirtItems.id})">Add to Cart</button>
                <button class ="Wishlist_button">Wishlist</button>
            </div>
        </div>`
});
T_Shirt.innerHTML = innerHTML;

// console.log(Add.innerHTML);
}

// --------------------------Shirt----------------------------

function Shirt() {
    const Shirt = document.getElementById('Shirt');
// console.log(Add.innerHTML); 

let innerHTML = '';
addShirtItems.forEach(addShirtItems => {
    
    innerHTML += `<div class="category_items">
            <div>
                <a href="#"><img class="sale_item" src="${addShirtItems.image}"></a>
            </div>
            <div class="rating">
                ${addShirtItems.rating.rate} ⭐ | ${addShirtItems.rating.count}
            </div>
            <div class="company-name">${addShirtItems.name}</div>
            <div class="item-name">${addShirtItems.company}</div>
            <div class="price">
                <span class="current-price">Tk ${addShirtItems.newprice}</span>
                <span class="original-price">Tk ${addShirtItems.oldprice}</span>
                <span class="discount">(${addShirtItems.dicount}% Loss)</span>
            </div>
            <div class="Button_add">
                <button class ="buy_button">Add to Cart</button>
                <button class ="Wishlist_button">Wishlist</button>
            </div>
        </div>`
});
Shirt.innerHTML = innerHTML;

// console.log(Add.innerHTML);
}

// --------------------------Watch----------------------------

function Watch() {
    const Watch = document.getElementById('Watch');
// console.log(Add.innerHTML); 

let innerHTML = '';
addwatchItems.forEach(addwatchItems => {
    
    innerHTML += `<div class="category_items">
            <div>
                <a href="#"><img class="sale_item" src="${addwatchItems.image}"></a>
            </div>
            <div class="rating">
                ${addwatchItems.rating.rate} ⭐ | ${addwatchItems.rating.count}
            </div>
            <div class="company-name">${addwatchItems.name}</div>
            <div class="item-name">${addwatchItems.company}</div>
            <div class="price">
                <span class="current-price">Tk ${addwatchItems.newprice}</span>
                <span class="original-price">Tk ${addwatchItems.oldprice}</span>
                <span class="discount">(${addwatchItems.dicount}% Loss)</span>
            </div>
            <div class="Button_add">
                <button class ="buy_button">Add to Cart</button>
                <button class ="Wishlist_button">Wishlist</button>
            </div>
        </div>`
});
Watch.innerHTML = innerHTML;

// console.log(Add.innerHTML);
}