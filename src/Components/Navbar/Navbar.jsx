import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

import {
  FiMenu,
  FiShoppingCart,
  FiUser,
  FiChevronDown,
  FiChevronRight,
  FiX,
  FiSearch,
} from "react-icons/fi";

import "./AppNavbar.css";
import imageLogo from "./NavbarImage/supermarket-logo3.jpg";
import MiniCart from "./MiniCart/MiniCart";
import NavbarTop from "./NavbarTop/NavbarTop";
import allProducts from "../ProductsData/ProductsData.json";

import { useDispatch, useSelector } from "react-redux";
import { filterBrand } from "../../Store/Slices/ProductFilter";

import categoriesImages from "./CategoriesImages/CategoriesImages";
import MenuList from "./MenuList/MenuList";

const Navbar = () => {
  const products = useSelector((state) => state.card);

  const dispatch = useDispatch();

  const allCategories = allProducts
    .map((product) => product.category)
    .filter((item, index, arr) => arr.indexOf(item) === index);

  const [openCart, setOpenCart] = useState(false);
  const [openCategories, setOpenCategories] = useState(false);
  const [openMenuList, setOpenMenuList] = useState(false);

  let CartRef = useRef();
  let categories = useRef();
  let menuList = useRef();
  let menuListContainer = useRef();
  let headerContainer = useRef();
  let inputSearch = useRef();


  const resetInput = () => {
    inputSearch.current.value = "";
    inputSearch.current.focus();
  };

  useEffect(() => {
    window.addEventListener("click", (e) => {
      menuListContainer.current.classList.contains("active")
        ? (document.body.style.overflow = "hidden")
        : (document.body.style.overflow = "auto");

      if (!CartRef.current.contains(e.target)) {
        setOpenCart(false);
      }
      if (!categories.current.contains(e.target)) {
        setOpenCategories(false);
      }
      if (!menuList.current.contains(e.target)) setOpenMenuList(false);
    });
  }, []);

  return (
    <div className="Header">
      <NavbarTop />

      <div className="header-page">
        <div className="container" ref={headerContainer}>
          <div className="header-navbar flex-nowrap">
            <div className="header-navbar-logo">
              <div className="header-navbar-menu">
                <div
                  className="header-navbar-menu-icon"
                  onClick={() => setOpenMenuList(!openMenuList)}
                >
                  <div className="header-navbar-menu-icon1" ref={menuList}>
                    <FiMenu />
                  </div>
                </div>

                <div
                  className={`menuList-container ${
                    openMenuList ? "active" : "hidden"
                  }`}
                  ref={menuListContainer}
                >
                  <div className="menuList">
                    <MenuList />
                  </div>
                  <div className="overlay"> </div>
                </div>
              </div>

              <div className="header-navbar-logo-image">
                <Link to="/home" className="logo-link">
                  <img
                    src={imageLogo}
                    alt="..."
                    className="img"
                    width="170px"
                    height="54px"
                  />{" "}
                </Link>
              </div>
            </div>

            <div className="header-navbar-content ">
              <div className="header-navbar-categories-list">
                <div
                  className="header-navbar-categories-item"
                  onClick={() => setOpenCategories(!openCategories)}
                >
                  <div
                    className="categories-item-content d-flex align-items-center gap-2"
                    ref={categories}
                  >
                    <p className="categories-item-title"> Categories </p>

                    <span className="categories-item-icon">
                      <FiChevronDown />
                    </span>
                  </div>

                  <div
                    className={`categories-names ${
                      openCategories ? "active" : "hidden"
                    }`}
                  >
                    <div className="categories-names-container">
                      {allCategories.map((item) => {
                        return (
                          <div
                            className="categories-names-item"
                            key={Math.random()}
                          >
                            <div className="d-flex gap-4 align-items-center">
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

                            <div>
                              <FiChevronRight />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>

              <div className="header-navbar-categories-item">
                <p className="categories-item-title"> Everyday Deals </p>
              </div>
            </div>

            <div className="header-navbar-form">
              <input
                type={"text"}
                placeholder="search"
                className="form-input"
                ref={inputSearch}
              />
              <span onClick={resetInput}>
                <FiX />
              </span>
              <div>
                <FiSearch />
              </div>
            </div>

            <div className="header-navbar-cart-account ">
              <div className="header-navbar-account">
                <Link
                  to="/sign"
                  className="header-navbar-account-icon text-dark"
                >
                  <FiUser />
                </Link>
              </div>

              <div className="header-navbar-cart">
                <div
                  className="header-navbar-cart-icon"
                  onClick={() => setOpenCart(!openCart)}
                  ref={CartRef}
                >
                  <FiShoppingCart />
                  <span className="cart-counter-number bg-danger text-light">
                    {" "}
                    {products.length}{" "}
                  </span>
                </div>

                <div className={` mini-Cart ${openCart ? "active" : "hidden"}`}>
                  <MiniCart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
