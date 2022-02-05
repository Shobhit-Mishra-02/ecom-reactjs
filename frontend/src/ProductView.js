import Navigation from "./Navigation";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState, useContext } from "react";
import userInfo from "./context";

const ProductView = () => {
  const [prodData, setProdData] = useState({});
  const [status, setStatus] = useState(0);
  const [user, setUser] = useContext(userInfo);

  const { id } = useParams();
  const makingRequest = async () => {
    const data = await fetch(`http://localhost:5000/getproduct/${id}`);
    const json = await data.json();
    console.log(json);
    setProdData(json);
    setStatus(1);
  };

  const addToCart = async () => {
    console.log("clicked on cart");
    if (status && localStorage.length) {
      const data = await fetch(
        `http://localhost:5000/addToCart/${id}/${JSON.parse(user).id}`
      );
      const json = await data.json();
      console.log(json);
    }
  };

  useEffect(() => {
    makingRequest();
  }, []);

  return (
    <div>
      <Navigation />
      <div className="container mt-4">
        {status ? (
          <div className="contianer d-flex justify-content-center align-items-center">
            <img
              src={`http://localhost:5000/${prodData.productImg}`}
              width={"400px"}
              height={"400px"}
              className="mx-3"
            />
            <div className="d-flex flex-column">
              <h2 className="text-center fw-bolder fs-1">
                {prodData.productTitle}
              </h2>
              <hr></hr>
              <h3>PRICE: {prodData.productPrice}</h3>
              <p className="text-center">{prodData.productDesc}</p>
              <div>
                <button
                  className="btn btn-primary mx-3 mt-2"
                  onClick={(e) => addToCart()}
                >
                  Add to Cart
                </button>
                <button className="btn btn-primary mx-3 mt-2">Buy Now</button>
              </div>
            </div>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
