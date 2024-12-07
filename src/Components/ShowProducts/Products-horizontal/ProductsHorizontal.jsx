import { MdStar, MdStarHalf } from "react-icons/md";
import { Link } from "react-router-dom";

import Styled from "styled-components";
import { useSelector } from "react-redux";

const ProductsWidth = () => {
  const products = useSelector((products) => products.ProductFilter);

  const CartBox = Styled.div`
    width : 100%;
    display : flex;
    padding : 15px ;
    flex-wrap : wrap;
    transition : all .5s;
    cursor: pointer;
    &:hover {
      .image-box {
        transform : scale(1.05);
      }
    };
    @media (max-width: 767px) {
        flex-wrap : wrap;
        width : 400px;
         gap : 20px;
    }`;
  const Heading = Styled.div`
    width : 100%;  
    @media (min-width: 767px) {
         width : 38%;
         padding : 0 15px; 
    }`;
  const CardBody = Styled.div`
    width : 25%;
    @media (min-width: 767px) {
         text-align : justify;
         width : 30%;
    }`;
  const CartImage = Styled.div`
    width : 100%;
    display : flex;
    justify-content : center;
    transition : all .5s;
     @media (min-width: 767px) {
        width : 32%
    }`;

  return (
    <div className="d-flex flex-wrap gap-4">
      {products.map((product) => {
        return (
          <div
            className="d-flex flex-wrap w-100 justify-content-center border border-bottom"
            key={Math.random()}
          >
            <CartBox>
              <Link
                to={`/productDetails/${product.id}`}
                className="d-flex flex-nowrap gap-3  text-dark text-decoration-none"
              >
                <CartImage className="image-box px-2 py-5 shadow rounded-4">
                  <a href="##">
                    {" "}
                    <img
                      src={product.mainImages}
                      alt="..."
                      style={{ width: "130px", height: "170px" }}
                    />{" "}
                  </a>
                </CartImage>

                <Heading className="card-title  ">
                  <h5> {product.type} </h5>
                </Heading>

                <CardBody className="card-body d-flex">
                  <div className="d-flex flex-wrap gap-2">
                    <div className="card-description  fs-6 w-100">
                      {product.title.slice(0, 100)}
                    </div>
                    <div className="card-rating w-100 ">
                      {<MdStar className="text-warning" />}
                      {<MdStar className="text-warning" />}
                      {<MdStar className="text-warning" />}
                      {<MdStar className="text-warning" />}
                      {<MdStarHalf className="text-warning" />}(
                      {product.rating.count})
                    </div>
                    <div className="btn-box w-100 mt-2">
                      <Link
                        to={`/productDetails/${product.id}`}
                        className="btn btn-primary"
                      >
                        {" "}
                        ADD Product{" "}
                      </Link>
                    </div>
                  </div>
                </CardBody>
              </Link>
            </CartBox>
          </div>
        );
      })}
    </div>
  );
};

export default ProductsWidth;
