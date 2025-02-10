class Product {
  constructor(id, name, price) {
    this.id = id;
    this.name = name;
    this.price = price;
  }

  getinfo() {
    return `ID do produto: ${this.id}; Nome: ${this.name}; Price: ${this.price}`;
  }
}
function createProduct(id, name, price) {
  return new Product(1, "laptop", 5000);
}

module.exports = {
  createProduct,
  Product
}