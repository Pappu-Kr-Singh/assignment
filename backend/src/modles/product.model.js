import mongoose, { Schema } from "mongoose";

const productSchema = new Schema(
  {
    category: {
      type: String,
      required: true,
      enum: ["Iphone", "Laptop", "Mouse", "lcd"], // Enum to restrict values to these options
    },
    model: {
      type: String,
      required: true,
      enum: ["firstModel", "secondModel", "thirdModel", "fourthModel"], // Enum to restrict values to these options
    },
    serialNumber: {
      type: String,
      required: true,
      unique: true,
    },
    dateOfInvoice: {
      type: Date,
      required: true,
    },
    productImage: {
      type: String, // Assuming you are storing the path to the image file
      required: true,
    },
  },
  { timestamps: true }
);

export const Product = mongoose.model("Product", productSchema);
