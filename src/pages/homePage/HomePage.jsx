import React, { useEffect } from "react";
import "./HomePage.scss";
import Slider from "../../components/slider/Slider";
import Category from "../../components/category/Category";
import ProductList from "../../components/productList/ProductList";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchCategories,
  fetchProductsByCategory,
} from "../../store/CategorySlice";
import SingleCategory from "../../components/singleCategory/SingleCategory";
import { fetchProducts } from "../../store/ProductSlice";

const HomePage = () => {
  const dispatch = useDispatch();
  const { data: categories, status: categoryStatus } = useSelector(
    (state) => state.category
  );
  const { catProductAll: ProductsByCategory, catProductAllStatus } =
    useSelector((state) => state.category);

    const {data:products, status:productStatus}=useSelector((state)=>state.product);

  useEffect(() => {
    dispatch(fetchProducts())
    dispatch(fetchCategories());
    dispatch(fetchProductsByCategory(1, "all"));
    dispatch(fetchProductsByCategory(2, "all"));
  }, []);
  return (
    <div className="home-page">
      <Slider />
      <Category categories={categories} status={categoryStatus} />
      <ProductList products={products} status={productStatus}/>

      {/* Category One Products */}
      <section>
        {ProductsByCategory[0] && (
          <SingleCategory
            products={ProductsByCategory[0]}
            status={catProductAllStatus}
          />
        )}
      </section>
      {/* Category Two Products */}
      <section>
        {ProductsByCategory[1] && (
          <SingleCategory
            products={ProductsByCategory[1]}
            status={catProductAllStatus}
          />
        )}
      </section>
    </div>
  );
};

export default HomePage;
