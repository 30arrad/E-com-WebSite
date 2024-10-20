
Pants();
T_Shirt();


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
                <button class ="buy_button">Add to Cart</button>
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
                <button class ="buy_button">Add to Cart</button>
                <button class ="Wishlist_button">Wishlist</button>
            </div>
        </div>`
});
T_Shirt.innerHTML = innerHTML;

// console.log(Add.innerHTML);
}
