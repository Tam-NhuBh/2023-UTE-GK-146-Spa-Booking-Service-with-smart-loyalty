import { useParams } from "react-router-dom";
import useProduct from "../../hooks/useProduct";
import ProductPreviewer from "./ProductPreviewer";
import Description from "./Description";
import Similar from "./Similar";

const ProductDetail = () => {
  const { id } = useParams();
  const productData = useProduct(id);

  return (
    <div className="pt-8 pl-[30px] flex-1">
      <div className="border-[#ececec] border-l-[1px] w-full flex flex-col px-[30px]">
        <ProductPreviewer product={productData} />
        <Description description={productData?.desc2} />
        <Similar />
      </div>
    </div>
  );
};

export default ProductDetail;
