// Example JS to handle quantity change and remove item
const deleteButtons = document.querySelectorAll('.delete-btn');

deleteButtons.forEach(button => {
    button.addEventListener('click', (event) => {
        const row = event.target.closest('tr');
        row.remove();
        // Add logic to update the total amount
    });
});

// You can also add functions to update the total when the quantity changes
