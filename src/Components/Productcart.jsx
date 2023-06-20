import React, { useEffect, useState } from "react";
import CommonUtils from "./CommonUtils/CommonUtils";
import "../CSS/Productcart.css";
import { Link } from "react-router-dom";
function Productcart({ orderId }) {
  let total = 0;
  const [product, setProducts] = useState([]);
  // const [total, setTotal] = useState(0);
  useEffect(() => {
    const fetchData = async () => {
      const response = await CommonUtils.orderAtProduct(orderId);
      if (response && response.data && response.data.result) {
        setProducts(response.data.result[0].Products);
      }
    };

    fetchData();
  });
  return (
    <>
      <div className="cart-icon">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
          />
        </svg>
      </div>
      <div className="cart-page">
        <div className="itemList">
          {product.map((item) => {
            total += item.order_products.quantity * item.price;
            return (
              <>
                <div className="item-details">
                  <div className="details">
                    <img src={item.imgSrc} alt="" width={300} height={300} />
                    <h1>{item.name} --- </h1>
                  </div>
                  <div className="item-price">
                    <h3>
                      {" "}
                      total &#8377; {item.order_products.quantity *
                        item.price}{" "}
                      /-
                    </h3>
                  </div>
                </div>
                <hr />
              </>
            );
          })}
        </div>
      </div>
      <Link
        to={`/order/${orderId}`}
        state={{
          data: { total },
        }}
      >
        <div className="btn-buy">
          <button>{product.length === 0 ? "Add to Cart " : " Order Now"}</button>
        </div>
      </Link>
    </>
  );
}

export default Productcart;
