import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ProductPreviewer from "./ProductPreviewer";
import Description from "./Description";// Import Description and Similar components here
import Similar from "./Similar";

const ProductDetail = () => {
  const { id } = useParams();
  const [products, setProductData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProductData = async (id) => {
    try {
      const response = await fetch(`http://localhost:8000/api/products/${id}`);
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`Error fetching product data: ${error}`);
    }
  };

  useEffect(() => {
    const getProductData = async () => {
      try {
        const data = await fetchProductData(id);
        setProductData(data);
        setIsLoading(false);
      } catch (error) {
        setError(error.message || "Error fetching data");
        setIsLoading(false);
      }
    };

    getProductData();
  }, [id]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="pt-8 pl-[30px] flex-1">
      <div className="border-[#ececec] border-l-[1px] w-full flex flex-col px-[30px]">
        <ProductPreviewer  products={products} />
        {/* Use the Description component here */}
        <Description products={products.description} />
        {/* Use the Similar component here */}
        <Similar products={products} />
        
        </div>
    </div>
  );
};

export default ProductDetail;
