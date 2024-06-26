import { Product } from "../modles/product.model.js";
import { asyncHandler } from "../utils/asyncHandler.js";
import ApiError from "../utils/ApiError.js";
import { uploadOnCloudinary } from "../utils/cloudinary.js";
import ApiResponse from "../utils/ApiResponse.js";

const addProduct = asyncHandler(async (req, res) => {
  const { category, model, serialNumber, dateOfInvoice } = req.body;

  const productImgPath = req.files?.productImage[0]?.path;
  console.log("Image Path", productImgPath);

  if (!productImgPath) {
    throw new ApiError(401, "product Image is required");
  }

  // uploading the productImage to the cloudinary
  const productImage = await uploadOnCloudinary(productImgPath);

  if (!productImage) {
    throw new ApiError(
      500,
      "Error while uploading the ProductImage to cloudinary"
    );
  }

  // adding product details in db

  const product = await Product.create({
    category,
    model,
    serialNumber,
    dateOfInvoice,
    productImage: productImage.url,
  });

  if (!product) {
    throw new ApiError(
      500,
      "Error while adding the product details in Database"
    );
  }

  return res
    .status(200)
    .json(
      new ApiResponse(200, product, "Product has been created Successfully")
    );
});

const getAllProducts = asyncHandler(async (req, res) => {
  // fetch all prouduct
  const product = await Product.find();

  if (!product) {
    throw new ApiError(401, "No Products found");
  }

  return res
    .status(200)
    .json(new ApiResponse(200, product, "All Products Fetched Successfully"));
});

export { addProduct, getAllProducts };
