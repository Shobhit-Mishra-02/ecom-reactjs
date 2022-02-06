import Navigation from "./Navigation";
import { useState, useEffect, useContext } from "react";
import userInfo from "./context";

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
        {orders.map((item) => {
          return <div key={item._id}>{item.productTitle}</div>;
        })}
      </div>
    </div>
  );
};

export default OrderView;
