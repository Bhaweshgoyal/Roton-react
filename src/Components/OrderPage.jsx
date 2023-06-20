import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "../CSS/OrderPage.css";
function OrderPage() {
  const ProductOrder = useLocation();
  const [today, setToday] = useState(new Date());
  let locale = "en";
  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });
  return (
    <div className="order-details">
      <div className="checked-Circle">
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
            d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z"
          />
        </svg>
      </div>
      <div className="paymentDiv">
        <span>Payment Success !</span>
        <div className="productName">{time}</div>
        <div className="orderPrice">
          &#8377; {ProductOrder.state.data.total}
        </div>
        <div className="transferId">
          Transfer - ID A
          {Math.floor(Math.random() * (100000000 - 100000 + 1)) + 100000}
        </div>
      </div>
    </div>
  );
}

export default OrderPage;
