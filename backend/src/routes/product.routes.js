import { Router } from "express";
import {
  addProduct,
  getAllProducts,
} from "../controllers/product.controller.js";

import { upload } from "../middlewares/multer.middleware.js";

const router = Router();

router.route("/addproduct").post(
  upload.fields([
    {
      name: "productImage",
      maxCount: 1,
    },
  ]),

  addProduct
);
router.get("/", getAllProducts);

export default router;
