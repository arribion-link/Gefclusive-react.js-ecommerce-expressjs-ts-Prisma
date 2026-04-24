
import ProductCard from "../card/ProductCard"
const Products = () => {
  return (
    <section className="mx-4">
      <h1>EXPLORE OUR PRODUCT</h1>
      <div className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-4">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}

export default Products
