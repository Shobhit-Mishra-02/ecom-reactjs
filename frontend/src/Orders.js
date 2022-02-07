import Navigation from "./Navigation";
import { useState, useEffect, useContext } from "react";
import userInfo from "./context";
import OrderCard from "./OrderCard";

const OrderView = () => {
  const [user, setUser] = useContext(userInfo);
  const [orders, setOrders] = useState([]);

  const makingRequest = async () => {
    if (localStorage.length) {
      const data = await fetch(
        `http://localhost:5000/getOrder/${JSON.parse(user).id}`
      );
      const json = await data.json();
      setOrders(json.productID);
    }
  };

  useEffect(() => {
    makingRequest();
  }, []);

  return (
    <div>
      <Navigation />
      <div>
        <h2 className="text-center">Order list</h2>
        {orders.length ? (
          orders.map((item) => {
            return (
              <OrderCard
                key={item._id}
                productName={item.productTitle}
                productDesc={item.productDesc}
                productImg={item.productImg}
                productPrice={item.productPrice}
              />
            );
          })
        ) : (
          <div>
            <h3>Do some orders</h3>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderView;
