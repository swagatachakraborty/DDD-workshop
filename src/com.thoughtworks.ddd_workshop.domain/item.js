class Item {
  constructor(product, quantity = 1) {
    this.product = product;
    this.quantity = quantity;
  }

  // equals(item) {
  //   return (this.product.equals(item.product)
  //     && this.quantity === item.quantity);
  // }
}

module.exports = Item
