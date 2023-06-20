import { useEffect, useState } from "react";
import { Carousel } from "./Components/Carousel";
import "./App.css";
import NavComponent from "./Components/NavComponent";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./Components/ProductPage";
import { createContext } from "react";
import axios from "axios";
import ProductDescp from "./Components/ProductDescp";
import OrderPage from "./Components/OrderPage";
export const ContextData = createContext();
export const ContextData1 = createContext();
const orderContetxt = createContext();
function App() {
  const [data, setdata] = useState([]);
  const [orderId, setorderId] = useState([]);

  useEffect(() => {
    (async () => {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:8080/api/v1/order/create-order",
        headers: {},
      };          

      let response = await axios.request(config);
      setorderId(response.data.result.id);
    })();
  }, []);
  // console.log(orderId , "orderIdorderIdorderIdorderIdorderIdorderId")
  return (
    <BrowserRouter>
      <NavComponent />
      <div className="App">
        <Routes>
          <Route exact path="/" element={<Carousel />} />
          <Route
            path="/product"
            element={
              <ContextData.Provider>
                <ProductPage />
              </ContextData.Provider>
            }
          />
          <Route path="/product/:productId" element={<ProductDescp />} />
          <Route
            path="/order/:orderId"
            element={
              <ContextData1.Provider value={{ data, setdata , orderId }}>
                <OrderPage />
              </ContextData1.Provider>
            }
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
