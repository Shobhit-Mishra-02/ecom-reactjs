import { Link } from "react-router-dom";

const CartCard = (params) => {
  return (
    <div>
      <div className="container border rounded p-3 mb-3 mt-3">
        <div className="d-flex justify-content-center align-items-center">
          <img
            src={`http://localhost:5000/${params.productImg}`}
            width="300px"
            height="310px"
          />

          <div className="px-2 d-flex flex-column justify-content-center align-items-center">
            <h3>{params.productName}</h3>
            <h4>{params.productPrice}</h4>
            <hr />
            <p className="text-center">{params.productDesc}</p>
            <div className="align-items-center">
              <button className="btn btn-primary mx-2 mt-3">Remove</button>
              <Link
                to={`product/${params.id}`}
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
};
export default CartCard;
