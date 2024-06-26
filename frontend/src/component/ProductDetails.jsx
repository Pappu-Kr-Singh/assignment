import React from "react";

const ProductDetails = ({ item }) => {
  // console.log(item);
  return (
    <>
      <div className="card">
        <img src={item.productImage} alt="Avatar" style={{ width: "100%" }} />
        <div className="container">
          <h4>
            <p>
              Category: <span> {item.category} </span>
            </p>
            <p>
              Model: <span>{item.model} </span>
            </p>
          </h4>
          <p>
            Date of Invoice:{" "}
            <span> {new Date(item.dateOfInvoice).toLocaleDateString()} </span>
          </p>
          <p>
            {" "}
            Serial Number: <span>{item.serialNumber}</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
