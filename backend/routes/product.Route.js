import express from "express";
const productRouter = express.Router();

import {
    createProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct
} from "../src/controllers/product.Controller.js";
import upload from "../src/middleware/multer.js";

productRouter
  .post(
    "/add",
    upload.fields(
      { name: "image1", maxCount: 1 },
      { name: "image2", maxCount: 1 },
      { name: "image3", maxCount: 1 },
      { name: "image4", maxCount: 1 }
    ),
    createProduct,
  )
  .get("/get", getAllProduct)
  .get("/get/:id", getOneProduct)
  .put("/update/:id", updateProduct)
  .delete("/delete/:id", deleteProduct);

export default productRouter;