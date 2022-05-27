// get carts items
export const getCartItems = () => {
  let cart = localStorage.getItem("cart") || "[]";
  cart = JSON.parse(cart);
  return cart;
};

// add cart item
export const addToCart = (productId) => {
  const items = getCartItems();
  console.log("shtim produkti");
  if (!items.find((v) => v === productId)) {
    const newCart = [...items, productId];
    localStorage.setItem("cart", JSON.stringify(newCart));
    console.log("shtim produkti me sukses");
  }
};

// count cart items
export const countCartItems = () => {
  return getCartItems().length;
};

// delete cart item
export const deleteCartItem = (productId) => {
  const items = getCartItems();
  if (items.find((v) => v === productId)) {
    const newCart = items.filter((v) => v !== productId);
    localStorage.setItem("cart", JSON.stringify(newCart));
    console.log("delete produkt sukses");
  }
};
