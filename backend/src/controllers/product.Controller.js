import product_model from "../model/product.Model.js";
import { v2 as cloudinary } from "cloudinary";

export const createProduct = async (red, res) => {
  const {
    name, description,
    price, category,
    subcategory, sizes,
    bestSeller, recommended
  } = req.body;
  try {
    const image1 = req.files.image1 && req.files.image1[0]
    const image2 = req.files.image1 && req.files.image2[0]
    const image3 = req.files.image1 && req.files.image3[0]
    const image4 = req.files.image1 && req.files.image4[0]

    const images = [image1, image2, image3, image4].filter((item) => {
      item !== undefined
    });
    let imagesUrl = await Promise.all(
      images.map(async (item) => {
        let result = await cloudinary.uploader.upload(item.path,
          { resource_type: 'image' }
        );
        return result.secure_url
      })
    )
    // console.log(imagesUrl);
    const product = {
      imagesUrl,
      name,
      description,
      price, category,subcategory,sizes,bestSeller,recommended
    }
    const savedData = await product_model.save();
    res.status(201).json({
      success: true,
      message: "product created successfully..."
    })
  } catch (error) {
    res.status(500).json({
      message: error.error,
      success: false
    });
  }
};

export const getAllProduct = async (red, res) => {
  try {
  } catch (error) {}
};

export const getOneProduct = async (req,res) => {
  try {
  } catch (error) {}
};

export const updateProduct = async (red, res) => {
  try {
  } catch (error) {}
};

export const deleteProduct = async (red, res) => {
  try {
  } catch (error) {}
};

export default {
    createProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct
}