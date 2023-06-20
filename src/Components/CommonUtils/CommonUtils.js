import axios from "axios";

const CommonUtils = {
  orderAtProduct: async (orderId) => {
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: `http://localhost:8080/api/v1/order/get-all-product-of-order/${orderId}`,
      headers: {
        "Content-Type": "application/json",
      },
    };

    let response = axios.request(config);
    return response;
  },
  addProductToOrder: async (orderId, productId) => {
    let data = JSON.stringify({
      orderId: orderId,
      productId: productId,
    });

    let config = {
      method: "patch",
      maxBodyLength: Infinity,
      url: "http://localhost:8080/api/v1/add-product-order",
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    const response = await axios.request(config);
    return response;
  },
};

export default CommonUtils;
