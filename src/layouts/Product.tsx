import React, { useEffect } from "react";
import { Iproduct } from "../models/productmodel";
import ProductCardComponent from "../components/ProductCardComponent";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../actions/productAction";
import { Dispatch } from "redux";
import SkeletonComponent from "../components/SkeletonComponent";

const Product: React.FC = () => {
  const productList = useSelector((state: any) => state.productList);
  const { loading, products } = productList;
  const dispatch: Dispatch<any> = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const renderProducts = products?.map((data: Iproduct) => {
    return (
      <ProductCardComponent
        key={data.id}
        id={data.id}
        images={data.images}
        host={data.host}
        name={data.name}
        date={data.date}
        like={data.like}
        cost={data.cost}
        rating={data.rating}
        location={data.location}
        label={data.label}
        start={data.start}
        end={data.end}
      />
    );
  });

  return (
    <section className="w-full md:mt-5 pt-[170px] md:pt-0" id="prod">
      {/* md:grid-cols-4 md:gap-7 */}
      {/* grid  */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {loading
          ? [1, 2, 3, 4, 5.6, 7, 8].map((i: number) => {
              return <SkeletonComponent key={i} />;
            })
          : renderProducts}
      </div>
    </section>
  );
};

export default Product;
