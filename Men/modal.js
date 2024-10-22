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
