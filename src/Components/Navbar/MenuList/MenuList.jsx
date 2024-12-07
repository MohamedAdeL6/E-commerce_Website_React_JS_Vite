import { useState } from "react";
import { FiChevronRight, FiUser } from "react-icons/fi";
import { IoCallOutline } from "react-icons/io5";
import "./MenuList.css";
import { filterBrand } from "../../../Store/Slices/ProductFilter";
import allProducts from "../../ProductsData/ProductsData.json";

import { useDispatch } from "react-redux";

import categoriesImages from "../CategoriesImages/CategoriesImages";
import { Link } from "react-router-dom";

const MenuList = () => {
  const dispatch = useDispatch();

  const allCategories = allProducts
    .map((product) => product.category)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const [openCategories, setOpenCategories] = useState(false);

  return (
    <div className="menu">
      <div className="menu-container">
        <div className="menu-content">
          <div className="menuTop">
            <span> My delivery area : </span>
            <span> Cairo </span>
          </div>

          <div className="menuMiddle">
            <div className="left-side">
              <span className="icon-user-outline">
                {" "}
                <FiUser />{" "}
              </span>
              <Link to="/login" className="left-side-text">
                {" "}
                Sign in{" "}
              </Link>
              <span> / </span>
              <Link to="/signUp" className="left-side-text">
                {" "}
                Sign up{" "}
              </Link>
            </div>
          </div>

          <div className="menu-navbar-categories">
            <div className="menu-navbar-categories-list">
              <div
                className="menu-navbar-categories-item"
                onClick={() => setOpenCategories(!openCategories)}
              >
                <div
                  className={`menu-categories-names ${
                    openCategories ? "active" : "hidden"
                  }`}
                >
                  {allCategories.map((item) => {
                    return (
                      <div
                        className="menu-categories-names-item"
                        key={Math.random()}
                      >
                        <div className="menu-categories-names-item-name">
                          {categoriesImages.map((el) => {
                            if (el.includes(item)) {
                              return (
                                <div key={Math.random()}>
                                  <img
                                    src={el}
                                    alt="..."
                                    width="35px"
                                    height="35px"
                                  />
                                </div>
                              );
                            }
                          })}
                          <Link
                            to="/showProduct"
                            className="text-decoration-none text-dark"
                            onClick={() => dispatch(filterBrand(item))}
                          >
                            {item}
                          </Link>
                        </div>

                        <div className="e-50">
                          <FiChevronRight />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="menuBottom p-0 pb-2 px-3">
            <ul className="nav-items">
              <li className="call-link">
                <Link to="tel:19966" className="customer-call">
                  <div className="left-side">
                    <span className="icon-user-outline">
                      {" "}
                      <IoCallOutline />{" "}
                    </span>

                    <p className="left-side-text lh-1"> Call 19966 </p>
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuList;
