import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../CSS/ProductDescp.css";
function ProductDescp() {
  let data = useLocation();
  return (
    <>
      <div className="Product-desc-landing">
        <div className="img-product">
          <img src={data.state.data.src} alt="" width={580} height={390} />
        </div>
        <div className="about-product">
          <span className="desc-product">{data.state.data.description}</span>
          <div className="price-product">&#8377; {data.state.data.price}</div>
          <Link
            to={`/order/${data.state.data.name}`}
            state={{
              data: {
                name: data.state.data.name,
                price: data.state.data.price,
                id : data.state.data.id   
              },
            }}
          >
            <div className="btn-buy">
              <button>Buy Now</button>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ProductDescp;
