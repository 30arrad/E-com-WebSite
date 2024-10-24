// let bagShirtItems = [];
// Shirt();
// disShirtPlayIcon();


// function addToBag (addShirtItemsId) {
//     bagShirtItems.push(addShirtItemsId);
//     disShirtPlayIcon();
//     if (bagShirtItems.length > 0) {
//         bagItemsCountShirtEle.innerText = bagShirtItems.length;
//     } else {
//         bagItemsCountShirtEle.style.visibility = 'hidden';
//     }
//     }
    
//     function disShirtPlayIcon() {
//         let bagItemsCountShirtEle = document.querySelector (".bag-item-count");
//         bagItemsCountShirtEle.innerText = bagShirtItems.length;
//     }

// function Shirt() {
//     const Shirt = document.getElementById('Shirt');
// // console.log(Add.innerHTML); 

// let innerHTML = '';
// addShirtItems.forEach(addShirtItems => {
    
//     innerHTML += `<div class="category_items">
//             <div>
//                 <a href="#"><img class="sale_item" src="${addShirtItems.image}"></a>
//             </div>
//             <div class="company-name">${addShirtItems.name}</div>
//             <div class="price">
//                 <span class="new-price">৳ ${addShirtItems.newprice}</span>
//                 <span class="old-price">৳ ${addShirtItems.oldprice}</span>
//                 <span class="discount">(${addShirtItems.dicount}% Loss)</span>
//             </div>
//             <div class="Button_add">
//                 <button class ="buy_button" onclick="addToBag(${addShirtItems.id})">Add to Cart</button>
//                 <button class ="Wishlist_button">Wishlist</button>
//             </div>
//         </div>`
// });
// Shirt.innerHTML = innerHTML;

// // console.log(Add.innerHTML);
// }