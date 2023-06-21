const shoppingCart = require("./shoppingCart");

describe("adding items to cart", () => {
  test("adding an apple to cart", () => {
    expect(shoppingCart.shoppingCart.addToCart("apple", 1, 2.5)).toBe(
      "Item added to cart."
    );
  });
});

describe("removing items from cart", () => {
  test("removing an apple from cart", () => {
    expect(shoppingCart.shoppingCart.removeFromCart("apple", 1)).toBe(
      "Item removed from cart."
    );
  });
});

describe("calulating total price of shopping cart", () => {
  test("total price of shopping cart", () => {
    expect(shoppingCart.shoppingCart.calculateTotal()).toBe(
      "Total amount is: $0"
    );
  });
});
