import discount_debit_cards from "../../assets/banner-debit-cards.png"
const DiscountBanner = () => {
  return (
    <section className="flex justify-between mt-[14em] mb-[4em] items-center mx-4 rounded-2xl shadow bg-sky-300 p-4">
      <div>
              <h1 className="text-[clamp(2em,5vw,3.5em)] font-bold ">Get 5% Cash Discount</h1>
              <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. <br />
                  Accusamus accusantium reiciendis voluptas perspiciatis blanditiis!
              </p>
              <button className="bg-black text-sky-400 px-8 py-1 rounded-3xl my-4">Learn more</button>
          </div>
          <img src={discount_debit_cards} alt="" className="max-w-[20em]  " />
    </section>
  );
}

export default DiscountBanner
