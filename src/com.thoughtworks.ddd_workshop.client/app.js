const Cart = require( '../com.thoughtworks.ddd_workshop.domain/cart');
const Product = require( '../com.thoughtworks.ddd_workshop.domain/product');
const Item = require("../com.thoughtworks.ddd_workshop.domain/item");

const main = function () {
  const myCart = new Cart();
  const myApplePencil = new Product("Apple Pencil");
  const mySonnyHeadSet = new Product("Sonny Wireless Headset");

  const applePencilItem = new Item(myApplePencil, 2);
  const sonnyHeadSetItem = new Item(mySonnyHeadSet);

  myCart.add(applePencilItem);
  myCart.add(sonnyHeadSetItem);

  console.log("Cart: ", myCart.getItems());

  myCart.remove(applePencilItem);
  console.log("Cart after removing Apple Pencil", myCart.getItems());

  console.log("Removed Items from the Cart", myCart.getRemovedItems());

  const cart2 = new Cart();
  cart2.add(sonnyHeadSetItem);

  console.log(myCart === myCart)
}

main();
