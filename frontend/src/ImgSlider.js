const ImageSlider = () => {
  return (
    <div
      id="carouselExampleCaptions"
      className="carousel slide"
      data-bs-ride="carousel"
    >
      <div className="carousel-indicators">
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button>
      </div>
      <div className="carousel-inner">
        <div className="carousel-item active">
          <img
            src="http://localhost:5000/1643783300837-727039182-laptop.jpg"
            className="d-block w-100"
            alt="slider image"
            height={"600px"}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Sale on the Lenovo laptop</h5>
            <p>
              This is the best and latest version of the laptop in the market
            </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="http://localhost:5000/1644334434268-210066343-shoes_for_women.jpg"
            className="d-block w-100"
            alt="slider image"
            height={"600px"}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Sale on the Nike shoes</h5>
            <p>So please chekout the latest limited edition from the nike </p>
          </div>
        </div>
        <div className="carousel-item">
          <img
            src="http://localhost:5000/1644334180028-53105782-bag.jpeg"
            className="d-block w-100"
            alt="slider image"
            height={"600px"}
          />
          <div className="carousel-caption d-none d-md-block">
            <h5>Cool bags for the cool people</h5>
            <p>
              Here comes the new bags from the GUCCI, so please chekout this one
            </p>
          </div>
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleCaptions"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default ImageSlider;
