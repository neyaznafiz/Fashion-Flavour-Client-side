import React from "react";

const BestSeller = () => {
  return (
    <div
      className="grid grid-cols-1 my-20 mx-10 py-10 rounded-xl border-2 border-yellow-600 shadow-lg"
      data-aos="zoom-in"
    >
      <div className="flex justify-center">
        <h2
          className="border-b-2 px-4 py-1 font-semibold text-center lg:text-2xl mb-7"
          data-aos="zoom-in"
          data-aos-delay="100"
        >
          BEST 3 SELLERS
        </h2>
      </div>

      <div className=" lg:flex justify-around px-2 ">
        <div className="card card-shadow grid grid-cols-1 lg:w-96" data-aos="flip-left" data-aos-delay="200">
          <div className="card-body" data-aos="zoom-in" data-aos-delay="200">
            <h5 className="card-title text-2xl font-semibold">Times Leather</h5>
            <p className="card-text">
              As per the needs and requirements of our clients, we are involved
              in the manufacturing of a flawless assortment of Rudraksha Beads,
              Incense Cones, Gym & Yoga Wears, Japa Mala, Metal Statutes,
              Natural Shankh, Incense Burner Holders Etc.. These are well-known
              for their extraordinary quality and usability...
            </p>
          </div>
        </div>
        <div className="card card-shadow lg:w-96 my-2" data-aos="flip-left" data-aos-delay="200">
          <div className="card-body" data-aos="zoom-in" data-aos-delay="200">
            <h5 className="card-title text-2xl font-semibold">Albaro Cloth</h5>
            <p className="card-text">
              Albaro Cloth have scaled the ladder of growth and achievement by
              offering products of exact client's specifications. We came into
              existence in the year 2004 and are engaged in Manufacturing,
              Wholesaling, and Exporting a dazzling collection of Designer
              Kurti, Short Kurtis, suits, etc. Based at Rajasthan...
            </p>
          </div>
        </div>
        <div className="card card-shadow lg:w-96" data-aos="flip-left" data-aos-delay="200">
          <div className="card-body" data-aos="zoom-in" data-aos-delay="200">
            <h5 className="card-title text-2xl font-semibold">
              Vedant Fashions Limited
            </h5>
            <p className="card-text">
              Established as a Sole Proprietorship firm in the year 2013, we
              “Vedant Fashion” are a leading manufacturer and exporter. Situated
              in Surat (Gujarat, India), we have constructed a wide and
              well-furnished designing unit that plays an important role in the
              growth of our company...
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BestSeller;

/*
As per the needs and requirements of our clients, we are involved in the manufacturing of a flawless assortment of Rudraksha Beads, Incense Cones, Gym & Yoga Wears, Japa Mala, Metal Statutes, Natural Shankh, Incense Burner Holders Etc.. These are well-known for their extraordinary quality and usability.
*/
