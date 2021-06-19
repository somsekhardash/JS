const items = [
  { name: "laptop", price: 10 },
  { name: "mobile", price: 20 },
  { name: "book", price: 30 },
  { name: "car", price: 100 },
  { name: "bike", price: 60 },
];
const user = {
  name: "Som",
  active: true,
  cart: [],
  purchases: [],
};
const tax = 0.3;
const compose =
  (f, g) =>
  (...args) =>
    f(g(...args));
const buyItem = (...fns) => fns.reduce(compose);
const getItem = buyItem(
  purchageItem,
  applyTaxToItems,
  itemToCart
)(user, items[0]);
console.log(getItem);

function itemToCart(user, item) {
  console.log(arguments);
  return Object.assign({}, user, { cart: [...user.cart, item] });
}

function applyTax(items, tax) {
  return items.map((item) => {
    return { ...item, price: item.price + item.price * tax };
  });
}

function applyTaxToItems(user) {
  console.log(user);
  return Object.assign({}, user, { cart: applyTax(user.cart, tax) });
}

function purchageItem(user) {
  console.log(user);
  return Object.assign({}, user, { purchases: [...user.cart], cart: [] });
}
