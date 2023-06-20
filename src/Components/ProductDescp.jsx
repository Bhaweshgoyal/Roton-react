import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/ProductDescp.css";
import CommonUtils from "./CommonUtils/CommonUtils";
function ProductDescp({ orderId }) {
  let [Clicked , setClicked] = useState(false)
  let data = useLocation();
  async function addToCart() {
    await CommonUtils.addProductToOrder(
      orderId,
      data.state.data.id
    );

     await CommonUtils.orderAtProduct(orderId);
    setClicked(true)
  }
  return (
    <>
      <div className="Product-desc-landing">
        <div className="img-product">
          <img src={data.state.data.src} alt="" width={580} height={390} />
        </div>
        <div className="about-product">
          <span className="desc-product">{data.state.data.description}</span>
          <div className="price-product">&#8377; {data.state.data.price}</div>
          <div className="btn-buy">
            <button onClick={addToCart}>{Clicked === true ? "Add more " : "Add to Cart"}</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProductDescp;
