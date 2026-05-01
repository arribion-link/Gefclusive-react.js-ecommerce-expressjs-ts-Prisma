import mongoose from "mongoose";

const productSchema = mongoose.Schema({
  name: {
    required: true,
    type: String,
  },
  description: {
    required: true,
    type: String,
  },
  price: {
    required: true,
    type: Number,
  },
  image: {
    required: true,
    type: Array,
  },
  category: {
    required: true,
    type: String,
  },
  subcategory: {
    required: true,
    type: String,
    },
    bestSeller: {
      type: Boolean
    },
    recommended: {
        type: Boolean
    },
    date: {
        type: Date,
        required:true
    }
}, {timeStamp: true});

const product_model = mongoose.models.product ||
  mongoose.model("product-collection", productSchema);
  
export default product_model;