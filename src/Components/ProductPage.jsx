import React, { useEffect } from "react";
import axios from "axios";
import "../CSS/ProductPage.css";
import { useState } from "react";
import { Link } from "react-router-dom";
function ProductPage({ searchvalue }) {
  const [dataItem, setDataItem] = useState([]);

  useEffect(() => {
    (async () => {
      let config = {
        method: "get",
        maxBodyLength: Infinity,
        url: "http://localhost:8080/api/v1/all-product",
        headers: {},
      };

      let response = await axios.request(config);
      setDataItem(response.data.result);
    })();
  }, []);
  let ans = dataItem.filter((item) => {
    const title = item.name.toLowerCase();
    const description = item.description.toLowerCase();
    const price = item.price.toString();
    return (
      title.includes(searchvalue) ||
      description.includes(searchvalue) ||
      price.includes(searchvalue)
    );
  });
  return (
    <>
      <div className="Product-page">
        {ans &&
          ans.map((item, index) => {
            return (
              <Link
                to={`/product/${item.id}&${item.name}`}
                state={{
                  data: {
                    id: item.id,
                    name: item.name,
                    price: item.price,
                    description: item.description,
                    src: item.imgSrc,
                  },
                }}
                key = {index}
              >
                <div className="product-tile" >
                  <img
                    src={item.imgSrc}
                    alt=""
                    rel="nofollow"
                    width={280}
                    height={280}
                  />
                  <span className="name-product">{item.name}</span>
                  <p>&#8377;{item.price}</p>
                </div>
              </Link>
            );
          })}
      </div>
    </>
  );
}

export default ProductPage;
