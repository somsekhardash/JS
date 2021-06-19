const items = [
  { name: "laptop", price: 10 },
  { name: "mobile", price: 20 },
  { name: "book", price: 30 },
  { name: "car", price: 100 },
  { name: "bike", price: 60 },
];

const pickAnItem = () =>
  items[Math.floor(Math.random(items.length) * items.length)];

const user = {
  name: "Som",
  active: true,
  cart: [],
  purchases: [],
  tax: 30,
  addTax(item) {
    return {
      name: item.name,
      price: item.price + item.price * (this.tax / 100),
    };
  },
  addItem(item) {
    this.cart = [...this.cart, this.addTax(item)];
  },
  buyItem(item) {
    this.purchases = [...this.purchases, this.addTax(item)];
    this.cart = [...this.cart.filter((cartItem) => cartItem.name != item.name)];
  },
  emptyCart() {
    this.cart = [];
  },
};

const item = pickAnItem();
const item1 = pickAnItem();
const item3 = pickAnItem();
user.addItem(item);
user.addItem(item1);
user.addItem(item3);
console.log(user.cart);
console.log(user.purchases);
user.buyItem(item1);
console.log(user.cart);
console.log(user.purchases);
user.emptyCart();
console.log(user.cart);
console.log(user.purchases);
