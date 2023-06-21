/* 

let shoppingCart = [];

function addToCart(item, quantity, price){
  shoppingCart.push({
    item: item,
    quantity: quantity,
    price: price
  });
}

function removeFromCart(item, quantity) {
  for (let i = 0; i < shoppingCart.length; i++) {
    let cartItem = shoppingCart[i];
    if (cartItem.item === item && cartItem.quantity === quantity) {
      shoppingCart.splice(i, 1);
      break; // exit loop after removing item
    } else if (cartItem.item === item && cartItem.quantity > 1) {
      cartItem.quantity -= 1;
      break; // exit the loop after decrementing the quantity
    }
  }
}

function calculateTotal(){
    let total = 0;
    for (let i = 0; i < shoppingCart.length; i++) {
      let cartItem = shoppingCart[i];
      total += cartItem.price * cartItem.quantity;
    }
    return 'total amout is: $' + total;
}


*/

let shoppingCart = {
  items: [],

  addToCart: function (item, quantity, price) {
    this.items.push({
      item: item,
      quantity: quantity,
      price: price,
    });
    return "Item added to cart.";
  },

  removeFromCart: function (item, quantity) {
    for (let i = 0; i < this.items.length; i++) {
      let cartItem = this.items[i];
      if (cartItem.item === item && cartItem.quantity === quantity) {
        this.items.splice(i, 1);
        return "Item removed from cart.";
        break; // exit loop after removing item
      } else if (cartItem.item === item && cartItem.quantity > 1) {
        cartItem.quantity -= 1;
        break; // exit the loop after decrementing the quantity
      }
    }
  },

  calculateTotal: function () {
    let total = 0;
    for (let i = 0; i < this.items.length; i++) {
      let cartItem = this.items[i];
      total += cartItem.price * cartItem.quantity;
    }
    if (total === 0) {
      return "Total amount is: $0";
    } else {
      return "Total amount is: $" + total;
    }
  },
};

module.exports = {
  shoppingCart,
};
