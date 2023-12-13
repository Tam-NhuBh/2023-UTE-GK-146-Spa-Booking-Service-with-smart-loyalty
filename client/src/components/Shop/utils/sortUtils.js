export function sortProductsByPrice(products, sortOrder) {
    const sortedProducts = [...products];
  
    sortedProducts.sort((a, b) => {
      if (sortOrder === "asc") {
        return a.price - b.price;
      } else if (sortOrder === "desc") {
        return b.price - a.price;
      } else {
        return 0;
      }
    });
  
    return sortedProducts;
  }