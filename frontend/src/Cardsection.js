import Card from "./Card";
import { useEffect, useState } from "react";

const Cardsection = () => {
  const [prodData, setProdData] = useState([]);

  const cuttingWords = (content) => {
    return content.slice(0, 80) + "...";
  };

  const makingRequest = async () => {
    const data = await fetch("http://localhost:5000/getallprod");
    const json = await data.json();
    setProdData(json.products);
  };

  useEffect(() => {
    makingRequest();
  }, []);

  return (
    <div className="container d-flex flex-wrap mt-4 justify-content-center align-items-center">
      {prodData.length ? (
        prodData.map((item) => {
          return (
            <Card
              key={item.productTitle}
              title={item.productTitle}
              desc={cuttingWords(item.productDesc)}
              img={item.productImg}
              id={item._id}
            />
          );
        })
      ) : (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default Cardsection;
