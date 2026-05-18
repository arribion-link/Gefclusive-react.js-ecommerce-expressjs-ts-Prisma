import CartCard from "./CartCard"
import card_payment_logos from "../../assets/card-payment-logos.png"
import mpesa_logo from "../../assets/mpesa-logo.png";
import paypal_logo from "../../assets/paypal-logo.png"
const ProductCart = () => {
  return (
    <section className="mx-4 min-h-screen md:mx-[4em] flex gap-8 my-[2em]">
      <div className="flex-3 border p-4 rounded">
        <h1 className="text-2xl font-bold">Your Cart</h1>
        <div className="my-4 gap-3 flex flex-col">
          <CartCard />
          <CartCard />
          <CartCard />
        </div>
      </div>
      <div className="flex-2 shadow p-4 rounded bg-slate-50">
        <h1 className="text-2xl font-bold">Checkout</h1>
        <div>
          <p>Total: $300</p>
          <div className="mt-12">
            <p className="text-2xl text-slate-600">Shipping Address:</p>
            <form action="">
              <div className="flex gap-3 my-3">
                <span>
                  <label htmlFor="full-name">Full Name</label>
                  <input
                    type="text"
                    id="full-name"
                    className="border p-2 rounded w-full"
                    placeholder="Full name"
                  />
                </span>
                <span>
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="border p-2 rounded w-full"
                    placeholder="Email"
                  />
                </span>
              </div>
              <div className="my-2">
                <label htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  className="border p-2 rounded w-full"
                  placeholder="Address"
                />
              </div>
              <div className="flex gap-3">
                <span>
                  <label htmlFor="">City</label>
                  <input
                    type="text"
                    className="border p-2 rounded w-full"
                    placeholder="City"
                  />
                </span>
                <span>
                  <label htmlFor="">Postal Address</label>
                  <input
                    type="text"
                    className="border p-2 rounded w-full"
                    placeholder="Postal Code"
                  />
                </span>
              </div>
            </form>
          </div>
          <div className="my-4 mt-8">
            <p className="text-slate-600 text-2xl ">Payment Method:</p>
            <div className="flex flex-col gap-3">
              <span className="flex items-center justify-between border border-slate-300 px-2 rounded my-1">
                <span>
                  <input type="radio" />
                  <label>Credit Card</label>
                </span>
                <img src={card_payment_logos} alt="" className="max-w-[12em]" />
              </span>
              <span className="flex items-center justify-between border border-slate-300 px-2 rounded my-1">
                <span>
                  <input type="radio" />
                  <label>PayPal</label>
                </span>
                <img src={paypal_logo} alt="" className="max-w-[5em]" />
              </span>
              <span className="flex items-center justify-between border border-slate-300 px-2 rounded my-1">
                <span>
                  <input type="radio" />
                  <label>mpesa</label>
                </span>
                <img src={mpesa_logo} alt="" className="max-w-[5em]" />
              </span>
            </div>
          </div>
          <button className="bg-blue-500 w-full text-white px-4 py-2 rounded mt-4">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </section>
  );
}

export default ProductCart
