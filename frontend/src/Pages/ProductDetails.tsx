// import React from 'react'

import { useParams } from "react-router-dom"

const ProductDetails = () => {
  const { id: productId } = useParams();
  return (
    <section className="min-h-screen mx-4">
      <p className="text-3xl">product ID: {productId}</p>
    </section>
  );
}

export default ProductDetails
