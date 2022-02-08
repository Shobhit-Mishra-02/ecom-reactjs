import Navigation from "../Navigation";
import { useState } from "react";

const RemoveProduct = () => {
  const [searchText, setSearchText] = useState("");
  const [productArray, setproductArray] = useState([]);

  const onSubmission = async () => {
    const data = await fetch("http://localhost:5000/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: searchText }),
    });
    const json = await data.json();
    console.log(json);
    setproductArray(json);
  };

  const removeProd = async (e) => {
    const data = await fetch("http://localhost:5000/removeProd/" + e.target.id);
    const json = await data.json();
    console.log(json);
    onSubmission();
  };

  return (
    <div>
      <Navigation />

      <h1 className="text-center m-4">Search and delete product</h1>
      <hr></hr>
      <div className="container w-50 border p-3 rounded">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSubmission();
          }}
        >
          <div className="mb-3">
            <label htmlFor="search-prod" className="form-label">
              Search for product
            </label>
            <input
              type="text"
              className="form-control"
              id="search-prod"
              placeholder="enter name"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              onBlur={(e) => setSearchText(e.target.value)}
            />
          </div>
          <button className="btn btn-primary">Search</button>
        </form>
      </div>

      <div className="container">
        {productArray.length ? (
          productArray.map((item) => (
            <div
              key={item._id}
              className="container border rounded p-3 mb-3 mt-3"
            >
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
                      onClick={(e) => removeProd(e)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div>
            <h2 className="text-center m-4">Nothing to show</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default RemoveProduct;
