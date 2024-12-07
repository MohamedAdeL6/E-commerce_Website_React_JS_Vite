import { Link } from "react-router-dom";
import "./NavbarTop.css";
import { IoCallOutline } from "react-icons/io5";

const NavbarTop = () => {
  // let NavbarTop = useRef()
  // const myScrollFunc = () => {
  // 	window.scrollY >= 500 ? NavbarTop.current.className = "bg-dark d-none" : NavbarTop.current.className = "bg-dark d-block"
  // }
  // window.addEventListener("scroll", myScrollFunc)

  return (
    <div className="panel wrapper " ref={NavbarTop}>
      <div className="container">
        <div className="panel header">
          <div
            className="switcher language switcher-language"
            data-ui-id="language-switcher"
            id="switcher-language"
          >
            <div className="actions dropdown options switcher-options">
              <ul className="switcher-dropdown">
                <li className="view-ar switcher-option">
                  <Link to="##">عربى</Link>
                </li>

                <li className="view-en switcher-option">
                  <Link to="##">English</Link>
                </li>
              </ul>
            </div>

            <p className="delievey-area-header">
              My delivery area:<span>Cairo</span>
            </p>
          </div>

          <ul className="header-links">
            <li>
              <Link to="##" id="idD85zHS2y" className="csmarketplace-link-gtm">
                {" "}
                Sell on CoverMe Company{" "}
              </Link>
            </li>

            <li className="call">
              <span className="icon-phone-small">
                {" "}
                <IoCallOutline />{" "}
              </span>
              <Link to="##">Call 19555</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavbarTop;
