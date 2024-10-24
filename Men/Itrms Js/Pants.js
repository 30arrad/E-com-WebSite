let bagItems;
onLoad();

function onLoad() {
  let bagItemsStr = localStorage.getItem('bagItems');
  bagItems = bagItemsStr ? JSON.parse(bagItemsStr) : [];
  displayItemsOnHomePage();
  displayBagIcon();
}

function addToBag(itemId) {
  bagItems.push(itemId);
  localStorage.setItem('bagItems', JSON.stringify(bagItems));
  displayBagIcon();
}

function displayBagIcon() {
  let bagItemCountElement = document.querySelector('.bag-item-count');
  if (bagItems.length > 0) {
    console.log('I am here');
    bagItemCountElement.style.visibility = 'visible';
    bagItemCountElement.innerText = bagItems.length;
  } else {
    bagItemCountElement.style.visibility = 'hidden';
  }
}

function displayItemsOnHomePage() {
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