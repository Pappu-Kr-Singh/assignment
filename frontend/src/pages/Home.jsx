import React, { useEffect, useState } from "react";
import axios from "axios";
import ProductDetails from "../component/ProductDetails";
import { Link } from "react-router-dom";

const Home = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    const getProduct = async () => {
      try {
        const res = await axios.get("http://localhost:8000/api/v1/product");
        // console.log(res.data.data);

        setProduct(res.data.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, []);

  return (
    <>
      {product.length === 0 ? (
        <h1 className="text-4xl text-center mt-6">
          No Product Go to{" "}
          <Link to={"/create-product"} className="text-blue-600 underline">
            CreateProduct
          </Link>
        </h1>
      ) : (
        <div className="m-12 grid grid-cols-1 md:grid-cols-4">
          {product.map((item) => (
            <ProductDetails item={item} key={item._id} />
          ))}

          <Link
            to={"/create-product"}
            className="text-blue-600 text-center underline"
          >
            <button className="bg-slate-300 p-3 font-bold text-green-900 rounded-lg">
              Add More products
            </button>
          </Link>
        </div>
      )}
    </>
  );
};

export default Home;
