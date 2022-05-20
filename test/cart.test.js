const Cart = require('../src/com.thoughtworks.ddd_workshop.domain/cart');
const Product = require("../src/com.thoughtworks.ddd_workshop.domain/product");

describe('Cart', function () {
  test('Should add item in the cart', () => {
    const myCart = new Cart();
    const applePencil = new Product('Apple Pencil');
    myCart.add(applePencil);

    expect(myCart.getItems()).toEqual([{product: applePencil, quantity: 1}]);
  })

  test('Should add multiple items of different quantity in the cart', () => {
    const myCart = new Cart();
    const applePencil = new Product("Apple Pencil");
    const sonnyHeadSet = new Product("Sonny Wireless Headset");

    myCart.add(applePencil, 2);
    myCart.add(sonnyHeadSet);

    const expected = [{product: applePencil, quantity: 2}, {product: sonnyHeadSet, quantity: 1}];
    expect(myCart.getItems()).toEqual(expected);
  })
});
