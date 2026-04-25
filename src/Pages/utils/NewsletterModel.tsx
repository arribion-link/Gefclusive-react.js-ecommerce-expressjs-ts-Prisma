import newsletter_img from "../../assets/newsletter.png"
const NewsletterModel = () => {
  return (
    <div className="bg-white min-h-[70vh] m-4 p-4 rounded absolute">
          <div className="relative flex">
            <div>
                <h3>Get up to25% OFF</h3>
                <h1>Sign up to Shopping Cart</h1>
                <p>
                Subscribe to the ShoppingCart market <br /> newsletter to receive updates on
                special offers
                </p>    
            </div>
        <img
          src={newsletter_img}
          alt="iphone image"
          className="max-w-[25em] right-0 bottom-0"
        />
      </div>
    </div>
  );
}

export default NewsletterModel
