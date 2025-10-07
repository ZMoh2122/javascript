// main.js
import {
  addToCart,
  getCart,
  getTotal,
  removeFromCart,
  clearCart,
} from "./cart.js";

// Simple product list (you'll follow these steps with your teacher)
const products = [
  { id: 1, name: "Laptop", price: 1200 },
  { id: 2, name: "Headphones", price: 200 },
  { id: 3, name: "Mouse", price: 50 },
  { id: 4, name: "Keyboard", price: 100 },
];

// DOM refs
const productList = document.getElementById("product-list");
const cartList = document.getElementById("cart-list");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const clearBtn = document.getElementById("clear-cart");

// --- Render products (Add buttons)
function renderProducts() {
  productList.innerHTML = "";
  products.forEach((p) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${p.name} — $${p.price}</span>
      <button data-id="${p.id}">Add</button>
    `;
    const btn = li.querySelector("button");
    btn.addEventListener("click", () => {
      // create a unique cart item (so same product can be added multiple times)
      const cartItem = {
        uid: Date.now().toString(36) + Math.random().toString(36).slice(2),
        ...p,
      };
      addToCart(cartItem);
      renderCart();
    });
    productList.appendChild(li);
  });
}

// --- Render cart (with remove buttons)
function renderCart() {
  cartList.innerHTML = "";
  const items = getCart();
  items.forEach((item) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} — $${Number(item.price).toFixed(2)}</span>
      <div>
        <button data-uid="${item.uid}" class="remove">Remove</button>
      </div>
    `;
    li.querySelector(".remove").addEventListener("click", () => {
      removeFromCart(item.uid);
      renderCart();
    });
    cartList.appendChild(li);
  });

  cartCount.textContent = items.length;
  cartTotal.textContent = getTotal().toFixed(2);
}

// --- Clear cart button
clearBtn.addEventListener("click", () => {
  if (!confirm("Clear the cart?")) return;
  clearCart();
  renderCart();
});

// Initial render
renderProducts();
renderCart();
