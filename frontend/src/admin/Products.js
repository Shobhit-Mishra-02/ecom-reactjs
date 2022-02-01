import Navigation from "../Navigation";

const Products = () => {
  return (
    <div>
      <Navigation />
      <h1 className="text-center">Add products</h1>
      <hr />
      <div className="container w-50 border p-3 rounded">
        <form
          action="http://localhost:5000/uploadProd"
          method="post"
          encType="multipart/form-data"
        >
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Select image
            </label>
            <input
              type="file"
              name="avatar"
              className="form-control"
              id="title"
              placeholder="enter title"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Product title
            </label>
            <input
              type="text"
              className="form-control"
              name="productTitle"
              id="title"
              placeholder="enter title"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="price" className="form-label">
              Product price
            </label>
            <input
              type="text"
              name="productPrice"
              className="form-control"
              id="price"
              placeholder="enter price"
            />
          </div>

          <div className="mb-3">
            <label htmlFor="decs" className="form-label">
              Product description
            </label>
            <textarea
              type="text"
              name="productDesc"
              rows={6}
              className="form-control"
              id="decs"
              placeholder="add description"
            />
          </div>

          <button className="btn btn-primary" type="submit">
            Add product
          </button>
        </form>
      </div>
    </div>
  );
};

export default Products;
