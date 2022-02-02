import Card from "./Card";
import { useEffect, useState } from "react";

const Cardsection = () => {
  const [prodData, setProdData] = useState([]);

  const makingRequest = async () => {
    const data = await fetch("http://localhost:5000/getallprod");
    const json = await data.json();
    return json.products;
  };

  useEffect(() => {
    setProdData(makingRequest());
  }, []);

  return (
    <div className="container d-flex justify-content-center align-items-center">
      {prodData.length ? (
        prodData.map((item) => {
          return (
            <Card
              key={item.productTitle}
              title={item.productTitle}
              desc={item.productDesc}
              img={item.productImg}
            />
          );
        })
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default Cardsection;
