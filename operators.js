// lets calculate the discount

const listingPrice = 120;
const sellingPrice = 30;
const discount = ((listingPrice - sellingPrice) / listingPrice) * 100;
console.log(`listing Price - ${listingPrice}
             selling price - ${sellingPrice}
             discount = ${discount}%`);

// logical conditional operators
const email = true;
const facebook = false;
const gmail = false;

if (email || facebook || gmail) {
  console.log("user is logged in");
}
