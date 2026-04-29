
import contact_img from "../assets/contact_img.png"
const Contact = () => {
  return (
    <section className="min-h-screen mx-4">
      <h1 className="text-[clamp(2em,4vw,3em)] my-4 text-center">Contact Us</h1>
      <div className=" flex justify-center">
        <div className="my-[4em] flex gap-4 ">
          <img src={contact_img} alt="" className="max-w-[25em] " />
          <div>
            <h1 className="font-semibold text-2xl">Our store</h1>
            <div className="my-4">
              <p>38 Gitwe Diaspora </p>
              <p>Kutus Kirinyaga, Kenya</p>
            </div>
            <div className="my-6">
              <p>Tel: (254) 99 77 46 53</p>
              <p>Email: admin@gefclusive</p>
            </div>

            <div>
              <h1 className="font-semibold text-2xl">
                Careers at Gefclusive(Arribion)
              </h1>
              <p className="my-4">
                Learn more about our teams and job openings.
              </p>
              <button className="py-2 px-12 border border-slate-400 rounded">
                Explore
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* newsletter subscription */}
      <div className="pt-[8em]">
        <div className="text-center">
          <h1 className="font-semibold text-3xl">
            Subscribe now & get 20% off
          </h1>
          <p className="text-center">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        <div className="min-h-[60vh] flex justify-center">
          <div>
            <div className="border border-slate-500 flex justify-between my-6">
              <input type="text" placeholder="Enter your emial" />
              <button className="font-semibold text-slate-100 bg-black px-8 py-2">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
