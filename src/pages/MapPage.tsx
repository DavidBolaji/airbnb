import React, { useEffect, useRef } from "react";
import GoogleMapReact from "google-map-react";
import { useDispatch, useSelector } from "react-redux";
import { Iproduct } from "../models/productmodel";
import { getProducts } from "../actions/productAction";
import { Spin } from "antd";
import { Dispatch } from "redux";

const MapComponent: React.FC<{ text: string; lat: number; lng: number }> = ({
  text,
}) => <div>{text}</div>;

const MapPage: React.FC = () => {
  const productList = useSelector((state: any) => state.productList);
  const { loading, products } = productList;
  const dispatch: Dispatch<any> = useDispatch();
  const mapRef = useRef();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <Spin />
      </div>
    );
  }

  //   console.log(import.meta.env.VITE_GOOGLE_API);
  return (
    <div className="w-[100vw] h-[100vh]">
      <GoogleMapReact
        bootstrapURLKeys={{ key: import.meta.env.VITE_GOOGLE_API }}
        center={{
          lat: 10.99835602,
          lng: 77.01502627,
        }}
        yesIWantToUseGoogleMapApiInternals
        onGoogleApiLoaded={({ map }) => {
          mapRef.current = map;
        }}
        // defaultCenter={defaultProps.center}
        defaultZoom={11}
      >
        {products.map((product: Iproduct, ind: number) => {
          return (
            <MapComponent
              key={ind}
              lat={product.location.lat}
              lng={product.location.long}
              text={product.name}
            />
          );
        })}
      </GoogleMapReact>
    </div>
  );
};

export default MapPage;
