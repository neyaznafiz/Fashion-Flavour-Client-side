import React from "react";
import { RiFacebookFill } from "react-icons/ri";
import { RiTwitterFill } from "react-icons/ri";
import { RiInstagramFill } from "react-icons/ri";

const Footer = () => {
  return (
    <div className="">
      <footer className=" bg-zinc-800 text-yellow-600 text-center h-full ">
        <div className="container p-4 ">
          {/* <section className="mb-4"> */}
          <a className="btn btn-outline-light  m-1" href="#!" role="button" data-aos="zoom-in">
            <RiFacebookFill className="text-2xl ml-1 mt-1" />
          </a>

          <a className="btn btn-outline-light  m-1" href="#!" role="button" data-aos="zoom-in">
            <RiTwitterFill className="text-2xl mx-1 mt-1" />
          </a>

          <a className="btn btn-outline-light  m-1 " href="#!" role="button" data-aos="zoom-in" >
            <RiInstagramFill className="text-2xl mx-1" />
          </a>

          {/* </section> */}
          {/* <!-- Section: Social media --> */}
        </div>

        <div className="text-center p-3 bg-black">
          <p>
            <span className="text-lg">©</span> Copyright {new Date().getFullYear()} FASHION FLAVOUR 
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
