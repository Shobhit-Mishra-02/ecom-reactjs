import { Link } from "react-router-dom";

const Card = (params) => {
  return (
    <div
      className="card m-2"
      style={{
        width: "18rem",
      }}
    >
      <img
        src={`http://localhost:5000/${params.img}`}
        className="card-img-top"
        alt="img"
        height={"300px"}
      />
      <div className="card-body">
        <h5 className="card-title">{params.title}</h5>
        <p className="card-text">{params.desc}</p>
        <Link to={`product/${params.id}`} className="btn btn-primary">
          Go somewhere
        </Link>
      </div>
    </div>
  );
};

export default Card;
