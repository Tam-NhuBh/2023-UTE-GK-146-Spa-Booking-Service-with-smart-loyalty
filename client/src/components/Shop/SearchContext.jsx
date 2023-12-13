//SEARCH DÙNG API
import { createContext, useState, useEffect } from "react";
import axios from "axios";


export const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/products");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.nameProduct.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  return (
    <SearchContext.Provider value={{ searchTerm, setSearchTerm, filteredProducts }}>
      {children}
    </SearchContext.Provider>
  );
};





// SEARCH KHÔNG DÙNG API (DỮ LIỆU CÓ SẴN)


// import { createContext, useState, useEffect } from "react";
// import { listProductSidebar } from "../../constants";

// export const SearchContext = createContext();

// export const SearchProvider = ({ children }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [filteredProducts, setFilteredProducts] = useState([]);

//   useEffect(() => {
//     const filtered = listProductSidebar.filter((product) =>
//       product.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setFilteredProducts(filtered);
//   }, [searchTerm]);

//   return (
//     <SearchContext.Provider value={{ searchTerm, setSearchTerm, filteredProducts }}>
//       {children}
//     </SearchContext.Provider>
//   );
// };