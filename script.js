document.addEventListener('DOMContentLoaded', function() {
    const products = document.querySelectorAll('.product');
    const cartItems = document.querySelector('.cart-items');
    const totalElement = document.getElementById('total');
    let total = 0;

    products.forEach(product => {
        const addToCartButton = product.querySelector('.add-to-cart');
        addToCartButton.addEventListener('click', () => {
            const productId = product.getAttribute('data-id');
            const productName = product.querySelector('h3').textContent;
            const productPrice = parseFloat(product.querySelector('p').textContent.replace('Price: $', ''));

            const cartItem = document.createElement('div');
            cartItem.classList.add('cart-item');
            cartItem.innerHTML = `<span>${productName}</span><span>$${productPrice.toFixed(2)}</span>`;
            cartItems.appendChild(cartItem);

            total += productPrice;
            totalElement.textContent = total.toFixed(2);
        });
    });
});
