import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCartItemDetail } from '../../redux/reducer/cartSlice';

function ProductComponent() {
  const dispatch = useDispatch();
  const listCart = useSelector((state) => state.cart.cartItems);
  // const userId = "84c1fdf8-U";
  const userId = localStorage.getItem("idUser");
  // const productId = "124";
  const [selectedProduct, setSelectedProduct] = useState(null);

  const handleProductDetails = async (productId) => {
    try {
      const response = await dispatch(fetchCartItemDetail({ userId, productId }));
      setSelectedProduct(response.payload); // Lưu thông tin chi tiết sản phẩm từ API vào state
    } catch (error) {
      console.error('Error fetching product details:', error);
    }
  };

  return (
    <>
      {selectedProduct && (
        <div>
          {/* JSX để hiển thị thông tin chi tiết sản phẩm */}
          <h2>{selectedProduct.name}</h2>
          <p>Price: {selectedProduct.price}</p>
          {/* Các thông tin khác của sản phẩm */}
          <button onClick={() => setSelectedProduct(null)}>Close</button>
        </div>
      )}

      {listCart?.map((cart, index) => (
        <div key={index}>
          <button onClick={() => handleProductDetails(cart.productId)}>
            {cart.productName}
          </button>
        </div>
      ))}
    </>
  );
}

export default ProductComponent;
