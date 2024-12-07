import { CgShoppingCart, CgHeart } from "react-icons/cg";
import { useDispatch } from "react-redux";
import { addProduct } from "../../../../Store/Slices/CardSlice";
import { Link } from "react-router-dom";
import "./SwiperCard.css";
import { Container } from "react-bootstrap";

const ProductCard = (props) => {
  const  product  = props.product;
  const dispatch = useDispatch();
  return (
    <Container className="p-2 justify-content-center">
      <div className="card-box">
        <div className="card-header-content">
          <div className="card-header-box">
            <div
              className="offer border rounded-2 d-flex gap-1"
              style={{ fontSize: "12px", padding: "2px 6px" }}
            >
              OFF &nbsp;
              <span>
                {" "}
                {product.hasOwnProperty("discount")
                  ? product.discount
                  : ""} %{" "}
              </span>
            </div>
            <CgHeart className="offer-icon " />
          </div>

          <div className="header-text">
            <p> charge Free </p>
          </div>
        </div>

        <Link to={`/productDetails/${product.id}`} className="">
          <div className="card-img-box">
            <img src={product.mainImages} alt="..." />
          </div>
        </Link>

        <div className="card-body-box">
          <div className="card-body-title"> {product.type} </div>
          <div className="card-body-text">
            {" "}
            {product.title.slice(0, 50)}....{" "}
          </div>
          <div className="card-body-price">{product.price} EGP</div>
          <div className="btn-box">
            <div
              className="btn-content  btn btn-outline-info bg-info rounded-3 text-dark "
              onClick={() => {
                dispatch(addProduct(product));
              }}
            >
              ADD To Card
              <CgShoppingCart className="btn-content-icon fs-5 mx-2" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default ProductCard;
