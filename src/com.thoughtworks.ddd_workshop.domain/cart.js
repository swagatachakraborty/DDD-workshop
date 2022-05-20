class Cart {
  constructor() {
    this.items = [];
    this.removedItems = [];
  }

  add(item) {
    this.items.push(item);
  }

  getItems() {
    return this.items;
  }

  remove(itemToRemove) {
    this.items = this.items.filter(i => !(i === itemToRemove));
    this.removedItems.push(itemToRemove);
  }

  getRemovedItems() {
    return this.removedItems;
  }
}

module.exports = Cart;
