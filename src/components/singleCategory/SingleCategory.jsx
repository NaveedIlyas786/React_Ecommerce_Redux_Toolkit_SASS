import React from "react";
import { useSelector, useDispatch } from "react-redux";
import SingleProduct from "../singleProduct/SingleProduct";
import Error from "../error/Error";
import Loader from "../loader/Loader";
import { STATUS } from "../../utils/Status";
import { formatPrice } from "../../utils/Helpers";
import "./SingleCategory.scss";
import { setIsModalVisible,setModalData } from "../../store/ModalSlice";

const SingleCategory = ({ products, status }) => {
  const dispatch=useDispatch();
  // Update the useSelector hook to provide a default value for 'isModalVisible'
const { isModalVisible } = useSelector((state) => state.modal) || { isModalVisible: false };

  const ViewModalHandler=(data)=>{
    console.log(data);
    dispatch(setModalData(data));
    dispatch(setIsModalVisible(true))
  }
  
  if (status === STATUS.ERROR) return <Error />;
  if (status === STATUS.LOADING) return <Loader />;
  return (
    <section className="cat-single py-5 bg-ghost-white">
{isModalVisible && <SingleProduct/>}

      <div className="container">
        <div className="cat-single-content">
          <h3 className="text-uppercase fw-7 text-regal-blue ls-1">
            {products[0].category.name}
          </h3>
        </div>
        <div className="product-items grid">
          {products.map((product) => (
            <div className="product-item bg-white" key={product.id} onClick={()=>ViewModalHandler(product)}>
              <div className="product-item-img">
                <img src={product.images[0]} alt="" />
                <div className="product-item-cat text-white fs-13 text-uppercase bg-gold fw-6">
                  {product.category.name}
                </div>
              </div>
              <div className="product-item-body">
                <h6 className="product-item-title text-pine-green fs-15 fw-4">{product.title}</h6>
                <div className="product-item-price text-regal-blue fs-18 fw-7">{formatPrice(product.price)}</div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SingleCategory;
