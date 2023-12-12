import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ProductDetail = () => {
  const { id } = useParams(); // Access the `id` parameter from the URL
  const [productData, setProductData] = useState(null);
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
    return <div>Loading...</div>; // Display a loading indicator
  }

  if (error) {
    return <div>Error: {error}</div>; // Display error message if fetching fails
  }

  return (
    <div className="pt-8 pl-[30px] flex-1">
      <div className="border-[#ececec] border-l-[1px] w-full flex flex-col px-[30px]">
        {/* Render components based on fetched product data */}
        {/* Replace ProductPreviewer, Description, and Similar components with respective data */}
        <h2>{productData?.title}</h2>
        {/* Display other product details */}
        <img src={productData?.img} alt={productData?.title} />
        <p>Price: {productData?.price}</p>
        {/* Render other details based on productData */}
      </div>
    </div>
  );
};

export default ProductDetail;
