
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer className="bg-slate-200/90 p-4 min-h-[50vh] ">
      <div className="flex gap-8 justify-between">
        <div>
          <h3>Gefclusive</h3>
          <h4>Subscribe</h4>
          <div>
            <form action="">
              <label htmlFor="email"></label>
              <input type="email" placeholder="Email..." />
            </form>
          </div>
        </div>
        <div>
          <h3>Support</h3>
          <ul>
            <li>
              <Link to="">Contact</Link>
            </li>
            <li>
              <Link to="">Shipping</Link>
            </li>
            <li>
              <Link to="">Return</Link>
            </li>
            <li>
              <Link to="">FAQ</Link>
            </li>
          </ul>
        </div>
        <div>

        </div>
        <div>
          <img src="/monalisa-qrcode.jpg" alt="" className="max-w-[6em] " />
        </div>
      </div>

      <hr className="text-slate-400 mt-[5em] " />
      <div>
        <div>
          <h4 className="text-center py-[1em] ">
            copyrights &copy; {new Date().getFullYear()} e-shop. All Rights
            Reserved.
          </h4>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
