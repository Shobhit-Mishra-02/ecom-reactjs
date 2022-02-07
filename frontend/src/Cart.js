import Navigation from "./Navigation";
import { useState, useEffect, useContext } from "react";
import userInfo from "./context";
import CartCard from "./CartCard";

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
      <h2 className="text-center">Cart section</h2>
      {cartDetails.length ? (
        <div>
          {cartDetails.map((item) => {
            return (
              <CartCard
                key={item._id}
                productName={item.productTitle}
                productDesc={item.productDesc}
                productImg={item.productImg}
                productPrice={item.productPrice}
              />
            );
          })}
        </div>
      ) : (
        <div>
          <h3>Do some shoping and select some products</h3>
        </div>
      )}
    </div>
  );
};

export default CartView;
