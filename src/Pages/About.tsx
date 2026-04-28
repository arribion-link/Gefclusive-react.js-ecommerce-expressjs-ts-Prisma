import { Link } from "react-router-dom";
import about_img from "../assets/about-img.jpg"
// import jeff_ntongai from "../assets/jeff-ntongai.jpeg"
const About = () => {
  return (
    <section className="min-h-screen mx-4">
      <div className="min-h-[80vh] flex justify-between gap-6  pt-[3em] bg-cover bg-center bg-no-repeat">
        <div>
          <h1 className="text-[clamp(2em,5vw,3em)] font-bold text-slate-700">
            Gefclusive React-Express multivender E-commerce platform
          </h1>
          <p className="text-slate-500">
            A high-performance, multi-vendor e-commerce marketplace. Features
            dynamic filtering for Fashion, Electronics, and Groceries, a secure
            vendor dashboard, and a seamless checkout experience.
          </p>
        </div>
        <img src={about_img} alt="" className="max-w-[30em] " />
      </div>

      <div className="border-b py-[1em] border-slate-400 mb-8">
        <div className="mt-[2em] ">
          <h1 className="font-semibold text-2xl text-sky-500">
            Jeff M Ntongai
          </h1>
          <p>BSc Software Engineering</p>
          <p>Kirinyaga University</p>
        </div>
        <div className="mt-5">
          <h1>Project Github </h1>
          <Link
            to="https://github.com/arribion-link/Gefclusive-react.js-ecommerce-expressjs-ts-Prisma"
            className="underline">
            Gefclusive Github
          </Link>
        </div>
        <div className="underline">
          <a href="https://arribion-0-2.vercel.app/auth/register" target="_blank"> Follow</a>
        </div>
      </div>
    </section>
  );
}

export default About
