import React from "react";

const Banner = () => {
  return (
    <div data-aos="zoom-out">
      <div className=" w-full p-2 bg-yellow-600">
        <div
          id="carouselExampleCaptions"
          className="carousel slide relative"
          data-bs-ride="carousel"
        >
          <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4 ">
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
          </div>
          <div className="carousel-inner relative overflow-hidden w-full">
            <div className="carousel-item active relative float-left w-full">
              <img
                src="https://i.ibb.co/yNm2ttQ/slide-1.jpg"
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute">
                <h5 className="text-6xl -indent-8 border-l-4 font-bold py-3">
                  THE CLASSIC TUX IS <br /> NEVER OUT OF STYLE
                </h5>
                <p className="font-semibold">
                  In the end, when a man puts on a tuxedo, he feels special.
                </p>
              </div>
            </div>
            <div className="carousel-item relative float-left w-full">
              <img
                src="https://i.ibb.co/b3HHKtj/slide-2.jpg"
                className="block w-full"
                alt="..."
              />
              <div className="carousel-caption hidden md:block absolute text-center">
                <h5 className="text-6xl -indent-8 border-l-4 font-bold py-3">
                  LEATHER & SUEDE
                </h5>
                <p className="font-semibold">
                  Most commonly, it comes from sheep, but also from deer, goats
                  and calves.
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon inline-block bg-no-repeat"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
