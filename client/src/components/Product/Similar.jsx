import PropTypes from 'prop-types';
import { FaCaretRight, FaCaretLeft } from 'react-icons/fa';
import Carousel from 'react-elastic-carousel';
import ProductItem from '../Shop/product/ProductItem';

const breakPoints = [
  {
    width: 0,
    itemsToShow: 1,
    itemsToScroll: 1,
  },
  {
    width: 300,
    itemsToShow: 2,
    itemsToScroll: 1,
  },
  {
    width: 500,
    itemsToShow: 3,
    itemsToScroll: 1,
  },
  {
    width: 900,
    itemsToShow: 4,
    itemsToScroll: 1,
  },
];

const renderArrows = ({ type, onClick, isEdge }) => {
  return (
    <button
      onClick={onClick}
      disabled={isEdge}
      className="text-3xl text-[#b0b0b0] cursor-pointer hover:text-[#555]"
    >
      {type === 'PREV' ? <FaCaretLeft /> : <FaCaretRight />}
    </button>
  );
};

const Similar = ({ products }) => {
  return (
    <div className="flex flex-col my-8">
      <div className="flex justify-center mt-3">
        <h3 className="text-[#555] text-xl font-bold text-center">SẢN PHẨM TƯƠNG TỰ</h3>
      </div>
      <div className="w-full mt-8">
        <Carousel
          breakPoints={breakPoints}
          pagination={false}
          enableAutoPlay
          renderArrow={renderArrows}
        >
          <ProductItem disableShadow {...products} width={210} />
        </Carousel>
      </div>
    </div>
  );
};

Similar.propTypes = {
  product: PropTypes.shape({
    // Modify the property types according to your actual data structure
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    // Add more properties as needed
  }).isRequired,
};
export default Similar;