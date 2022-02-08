import Navigation from "./Navigation";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import SearchCard from "./SearchCard";

const SearchView = () => {
  const { text } = useParams();
  const [searchRes, setSearchRes] = useState([]);

  const makingRequest = async () => {
    const data = await fetch("http://localhost:5000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text }),
    });

    const json = await data.json();
    console.log(json);
    setSearchRes(json);
  };

  useEffect(() => {
    makingRequest();
  }, []);

  return (
    <div>
      <Navigation />
      <h2 className="text-center">Search Results</h2>
      {searchRes.length ? (
        searchRes.map((item) => {
          return (
            <SearchCard
              key={item._id}
              productName={item.productTitle}
              productDesc={item.productDesc}
              productImg={item.productImg}
              productPrice={item.productPrice}
            />
          );
        })
      ) : (
        <div className="spinner-border align-items-center" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default SearchView;
