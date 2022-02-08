import Navigation from "./Navigation";
import { useState, useEffect, useContext } from "react";
import userInfo from "./context";
import { Link } from "react-router-dom";

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

  const onClickRemove = async (e) => {
    // console.log(e.target.id);
    const data = await fetch(
      `http://localhost:5000/removeFromCart/${e.target.id}/${
        JSON.parse(user).id
      }`
    );
    const json = await data.json();
    console.log(json);
    makingRequest();
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
              <div key={item._id}>
                <div className="container border rounded p-3 mb-3 mt-3">
                  <div className="d-flex justify-content-center align-items-center">
                    <img
                      src={`http://localhost:5000/${item.productImg}`}
                      width="300px"
                      height="310px"
                    />

                    <div className="px-2 d-flex flex-column justify-content-center align-items-center">
                      <h3>{item.productTitle}</h3>
                      <h4>{item.productPrice}</h4>
                      <hr />
                      <p className="text-center">{item.productDesc}</p>
                      <div className="align-items-center">
                        <button
                          id={item._id}
                          className="btn btn-primary mx-2 mt-3"
                          onClick={(e) => onClickRemove(e)}
                        >
                          Remove
                        </button>
                        <Link
                          to={`product/${item._id}`}
                          className="btn btn-primary mx-2 mt-3"
                        >
                          Check details
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
