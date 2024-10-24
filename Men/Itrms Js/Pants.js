let bagItems = [];
Pants();
disPlayIcon();

function addToBag (addItemsId) {
bagItems.push(addItemsId);
disPlayIcon();
if (bagItems.length > 0) {
    
    bagItemsCountEle.style.visibility = 'visible';
    bagItemsCountEle.innerText = bagItems.length;
} else {
    bagItemsCountEle.style.visibility = 'hidden';
}
}
function disPlayIcon() {
    let bagItemsCountEle = document.querySelector (".bag-item-count");
    bagItemsCountEle.innerText = bagItems.length;
}
function Pants() {
    const Add = document.getElementById('item-div');
// console.log(Add.innerHTML); 

let innerHTML = '';
addItems.forEach(addItems => {
    
    innerHTML += `<div class="category_items">
            <div>
                <a href="#"><img class="sale_item" src="${addItems.image}"></a>
            </div>
            <div class="company-name">${addItems.name}</div>
            <div class="price">
                <span class="new-price">৳ ${addItems.newprice}</span>
                <span class="old-price">৳ ${addItems.oldprice}</span>
                <span class="discount">(${addItems.dicount}% Loss)</span>
            </div>
            <div class="Button_add">
                <button class ="buy_button" onclick="addToBag(${addItems.id})" >Buy Now</button>
                <button class ="Wishlist_button">Wishlist</button>
            </div>
        </div>`
});
Add.innerHTML = innerHTML;

// console.log(Add.innerHTML);
}