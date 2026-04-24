
import { Link } from "react-router-dom";
const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div>
          <h3>About</h3>
          <ul>
            <li>
              <Link to="">Blog</Link>
            </li>
            <li>
              <Link to="">Meet the Team</Link>
            </li>
            <li>
              <Link to="">Contact Us</Link>
            </li>
          </ul>
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
        <div></div>
      </div>

      <hr />
      <div>
        <div>
          <h4>
            copyrights &copy; {new Date().getFullYear()} e-shop. All Rights
            Reserved.
          </h4>
        </div>
        <div>
          <ul>
            <li>Private Policy</li>
            <li>Terms & coditions</li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
