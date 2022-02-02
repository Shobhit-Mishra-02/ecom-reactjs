import Navigation from "./Navigation";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";
import { useEffect, useState } from "react";

const ProductView = () => {
  const [prodData, setProdData] = useState({});
  const [status, setStatus] = useState(0);

  const { id } = useParams();
  const makingRequest = async () => {
    const data = await fetch(`http://localhost:5000/getproduct/${id}`);
    const json = await data.json();
    console.log(json);
    setProdData(json);
    setStatus(1);
  };

  useEffect(() => {
    makingRequest();
  }, []);

  return (
    <div>
      <Navigation />
      <div className="container">
        {status ? (
          <div>
            <img src={`http://localhost:5000/${prodData.productImg}`} />
            <p>{prodData.productDesc}</p>
          </div>
        ) : (
          <div>Loading</div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
