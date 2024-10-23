PantsModel();

function PantsModel() {
    const Add = document.getElementById('sizeModal');
// console.log(Add.innerHTML); 

let innerHTML = '';
addItems.forEach(addItems => {
    
    innerHTML += `<div class="modal-content">
            <span class="close">&times;</span>
            <h2>Price Details</h2>
            <hr>
            <div class ="divModalBox">
                <div class ="modalLeft">
                    <br>
                    <p id="modalLeft_L">${addItems.name}</p>
                    <br>
                    <img class ="modal_img" src="${addItems.image}" alt="image">
               </div>
               <div class="size-options">
                
                <p id="modalLeft_R">Choose Size:</p>
               
                   <button class="size-btn">M</button>
                   <button class="size-btn">L</button>
                   <button class="size-btn">XL</button>
                   <button class="size-btn">XXL</button>

                <div class="price">
                <span class="new-price">৳ ${addItems.newprice}</span>
                <span class="old-price">৳ ${addItems.oldprice}</span>
                <span class="discount">(${addItems.dicount}% Loss)</span>
                </div>
               </div>
            </div>
            
            <button class="modal-cancel-btn">Cancel</button>
            <button class="modal-add-cart-btn"onclick="addToCart(${addItems.id})">Add to Cart</button>
        </div>`
});
Add.innerHTML = innerHTML;

}




























// Get modal element
const modal = document.getElementById('sizeModal');

// Get 'Buy Now' buttons
const buyNowButtons = document.querySelectorAll('.buy_button');

// Get close button
const closeButton = document.querySelector('.close');

// Open modal when 'Buy Now' is clicked
buyNowButtons.forEach(button => {
    button.addEventListener('click', () => {
        modal.style.display = 'flex';
    });
});

// Close modal when close button is clicked
closeButton.addEventListener('click', () => {
    modal.style.display = 'none';
});

// Close modal when cancel button is clicked
document.querySelector('.modal-cancel-btn').addEventListener('click', () => {
    modal.style.display = 'none';
});

// Add functionality to 'Add to Cart' button (currently just closes modal)
document.querySelector('.modal-add-cart-btn').addEventListener('click', () => {
    modal.style.display = 'none';
    alert('Item added to cart');
});

// Close modal if the user clicks outside the modal
window.addEventListener('click', (event) => {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
});
