import Navigation from "./Navigation";
import { useState, useEffect, useContext } from "react";
import userInfo from "./context";

const CartView = () => {
  const [cartDetails, setCartDetails] = useState([]);
  const [user, setUser] = useContext(userInfo);

  const makingRequest = async () => {
    const data = await fetch(
      `http://localhost:5000/getCartInfo/${JSON.parse(user).id}`
    );
    const json = await data.json();
    console.log(json);
    setCartDetails(json.cartProducts);
  };

  useEffect(() => {
    makingRequest();
  }, []);
  return (
    <div>
      <Navigation />
      {cartDetails.length ? (
        <div>
          {cartDetails.map((item) => {
            return (
              <div key={item.id}>
                <h2>{item.productTitle}</h2>
                <h4>{item.productPrice}</h4>
                <p>{item.productDesc}</p>
              </div>
            );
          })}
        </div>
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default CartView;
