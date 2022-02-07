const OrderCard = (params) => {
  return (
    <div className="container border rounded p-3 mb-3">
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={`http://localhost:5000/${params.productImg}`}
          width="300px"
          height="310px"
        />

        <div className="px-2">
          <h3>{params.productName}</h3>
          <h4>{params.productPrice}</h4>
          <hr />
          <p className="text-center">{params.productDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderCard;
