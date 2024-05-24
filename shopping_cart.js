let cart = [];

function addToCart(name, price) {
    cart.push({ prod_name: name, prod_price: price });
    updateCart();
}

function removeFromCart(index) {
    cart.splice(index, 1);
    updateCart();
}

function updateCart() {
    const cartList = document.querySelector('.cart-list');
    const cartTotal = document.querySelector('.cart-total');
    cartList.innerHTML = '';
    let total = 0;

    cart.forEach((item, index) => {
        const cartItem = document.createElement('li');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `${item.prod_name} - $${item.prod_price.toFixed(2)} <button onclick="removeFromCart(${index})">Remove</button>`;
        cartList.appendChild(cartItem);
        total += item.prod_price;
    });

    cartTotal.textContent = total.toFixed(2);
}

function showCheckoutForm() {
    const checkoutSection = document.getElementById('checkout-section');
    checkoutSection.style.display = 'block';
}

function prepareCheckout() {
    if (cart.length === 0) {
        alert('Cart is empty.');
        return false;
    }

    const form = document.getElementById('checkout-form');
    const custOrderField = form.cust_order;
    custOrderField.value = JSON.stringify(cart);
    return true;  // Allow form submission



    
}
