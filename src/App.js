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
import Productcart from "./Components/Productcart";
export const ContextData = createContext();
export const ContextData1 = createContext();
function App() {
  const [data, setdata] = useState([]);
  const [orderId, setOrderId] = useState(1);
  const [value , setValue] = useState("") ; 

  useEffect(() => {
    (async () => {
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "http://localhost:8080/api/v1/order/create-order",
        headers: {},
      };
      const response = await axios.request(config);
      const { data: responseData } = response;

      if (responseData && responseData.result && responseData.result.id) {
        const id = responseData.result.id;
        setOrderId(+id);
      }
    }
    )();
  }, []);
  return (
    <BrowserRouter>
      <NavComponent  searchvalue = {value} searchFunc = {setValue}/>
      <div className="App">
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="homepage-landing">
                <Carousel />
                <ContextData.Provider  >
                  <ProductPage  searchvalue = {value}/>
                </ContextData.Provider>
              </div>
            }
          />
          <Route path="/product/:productId" element={<ProductDescp orderId = {orderId}/>} />
          <Route
            path="/order/:orderId"
            element={
              <ContextData1.Provider value={{ data, setdata, orderId }}>
                <OrderPage />
              </ContextData1.Provider>
            }
          />
          <Route path = "/cart" element = {<Productcart orderId = {orderId}/>} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
