import { CartItem } from "@/contexts/cartContext";

function getCart(): CartItem[] {
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
}
function setCart(cart: CartItem[]) {
  localStorage.setItem("cart", JSON.stringify(cart));
}
function addItemToCart(item: CartItem) {
  if (itemAlreadyInCart(item)) {
    updateQuantity(item, 1);
  } else {
    const cart: CartItem[] = getCart();

    cart.push(item);
    setCart(cart);
  }
}
function itemAlreadyInCart(item: CartItem): boolean {
  const cart = getCart();
  let isInCart = false;
  cart.forEach((i) => {
    if (i.title == item.title) {
      return (isInCart = true);
    }
  });
  return isInCart;
}

function updateQuantity(item: CartItem, amount: number): void {
  const cart = getCart();
  console.log(itemAlreadyInCart(item));

  let itemToRemove: CartItem |null = null;
  if (itemAlreadyInCart(item)) {
    cart.map((e) => {
      if (e.title === item.title) {
        e.amount += amount;
        if (e.amount == 0) {
          itemToRemove = e;
        }
      }
      if (itemToRemove != null) {
        cart.splice(cart.indexOf(itemToRemove), 1);
      }
      return e;
    });
    setCart(cart);
  } else {
    addItemToCart(item);
  }
}

export const Cart = {
  getCart: getCart,
  setCart: setCart,
  addItemToCart: addItemToCart,
  updateQuantity: updateQuantity,
};
