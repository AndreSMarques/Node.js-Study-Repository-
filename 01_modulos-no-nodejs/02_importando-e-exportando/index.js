const { createProduct, Product } = require("./product");

const product = createProduct();
const product2 = new Product(2, "phone", 2000)

console.log(product.getinfo());
console.log(product2.getinfo());