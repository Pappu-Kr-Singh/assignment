import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import cp__right__img from "../assets/cp__right__img.png";

const CreateProduct = () => {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [selectedModel, setSelectedModel] = useState("");

  const [formData, setFormData] = useState({
    serialNumber: "",
    dateOfInvoice: "",
    productImage: null,
  });

  const navigate = useNavigate();

  const handleCategoryChange = (e) => {
    setSelectedCategory(e.target.value);
  };

  const handleModelChange = (e) => {
    setSelectedModel(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData({
      ...formData,
      [name]: files[0],
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append("category", selectedCategory);
    data.append("model", selectedModel);
    data.append("serialNumber", formData.serialNumber);
    data.append("dateOfInvoice", formData.dateOfInvoice);
    data.append("productImage", formData.productImage);

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/product/addproduct",
        data,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      alert("Your Product has been added successfully");
      navigate("/");
    } catch (error) {
      console.error("Error during product registration:", error.response.data);
      alert("An error occurred during product registration. Please try again.");
    }
  };

  return (
    <>
      <div className="create__product">
        <div className="cp__right">
          <img src={cp__right__img} alt="Product" />
        </div>
        <div className="cp__left">
          <section className="container">
            <header>Register Your Product</header>
            <form className="form" onSubmit={handleSubmit}>
              <div className="input-box address">
                <div className="column">
                  <div className="select-box">
                    <select
                      value={selectedCategory}
                      onChange={handleCategoryChange}
                      required
                    >
                      <option hidden>Category</option>
                      <option value="Iphone">Iphone</option>
                      <option value="Laptop">Laptop</option>
                      <option value="Mouse">Mouse</option>
                      <option value="lcd">lcd</option>
                    </select>
                  </div>

                  <div className="select-box">
                    <select
                      value={selectedModel}
                      onChange={handleModelChange}
                      required
                    >
                      <option hidden>Model</option>
                      <option value="firstModel">First Model</option>
                      <option value="secondModel">Second Model</option>
                      <option value="thirdModel">Third Model</option>
                      <option value="fourthModel">Fourth Model</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="column">
                <div className="input-box">
                  <label>Serial Number</label>
                  <input
                    type="text"
                    name="serialNumber"
                    value={formData.serialNumber}
                    onChange={handleChange}
                    placeholder="Enter serial number"
                    required
                  />
                </div>
                <div className="input-box">
                  <label>Date of Invoice</label>
                  <input
                    type="date"
                    name="dateOfInvoice"
                    value={formData.dateOfInvoice}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="mt-4 flex content-center">
                <input
                  type="file"
                  name="productImage"
                  onChange={handleFileChange}
                  className="center"
                  required
                />
              </div>
              <button type="submit">Submit</button>
            </form>
          </section>
        </div>
      </div>
    </>
  );
};

export default CreateProduct;
