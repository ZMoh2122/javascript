// cart.js
// A tiny module that manages a cart array.
// We mutate the array in-place (so default export reference stays valid).

const cart = [];

// Add an item (any object) to the cart
export function addToCart(item) {
  cart.push(item);
}

// Remove one item by its unique id (uid)
export function removeFromCart(uid) {
  const idx = cart.findIndex((i) => i.uid === uid);
  if (idx > -1) cart.splice(idx, 1);
}

// Return the live cart array
export function getCart() {
  return cart;
}

// Return total price (assumes each item has .price)
export function getTotal() {
  return cart.reduce((s, it) => s + (Number(it.price) || 0), 0);
}

// Clear the cart (mutates array)
export function clearCart() {
  cart.length = 0;
}

// default export (optional): the cart array itself
export default cart;
