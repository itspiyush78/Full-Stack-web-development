function filterBycategory(products) {
  return function (category) {
    return products.filter((product) => {
      return product.category == category;
    });
  };
}

let products = [
  { name: "Shirt", category: "Clothing" },
  { name: "Pants", category: "Clothing" },
  { name: "Hat", category: "Accessories" },
  { name: "Sunglasses", category: "Accessories" },
];

let clothingProducts = filterBycategory(products)("Clothing");
console.log(clothingProducts);
