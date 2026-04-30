import express from "express";
const productRouter = express.Router();

import {
    createProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct
} from "../src/controllers/product.Controller.js";

productRouter
    .post("/add", createProduct)
    .get("/get", getAllProduct)
    .get("/get/:id", getOneProduct)
    .put("/update/:id", updateProduct)
    .delete("/delete/:id", deleteProduct);

export default productRouter;