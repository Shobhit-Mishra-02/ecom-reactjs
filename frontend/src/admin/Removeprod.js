import Navigation from "../Navigation";

const RemoveProduct = () => {
  return (
    <div>
      <Navigation />

      <h1 className="text-center m-4">Search and delete product</h1>
      <hr></hr>
      <div className="container w-50 border p-3 rounded">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <div class="mb-3">
            <label htmlFor="search-prod" class="form-label">
              Search for product
            </label>
            <input
              type="text"
              className="form-control"
              id="search-prod"
              placeholder="enter name"
            />
          </div>
          <button className="btn btn-primary">Search</button>
        </form>
      </div>
    </div>
  );
};

export default RemoveProduct;
