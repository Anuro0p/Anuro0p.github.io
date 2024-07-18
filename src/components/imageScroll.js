import React from "react";
import img1 from "../a1.jpg";
import img2 from "../a2.jpg";
import img3 from "../a3.jpg";
import img7 from "../a4.jpg";
import img4 from "../4.png";
import img5 from "../5.png";
import img6 from "../6.png";
import "./styles.css";

const ImageScroll = () => {
  return (
    <div className=" container1 flex">
      <div className="grad  "></div>
      <div className="images ">
        <div className="img-slide ">
          <div className="flex">
            <img
              src={img1}
              style={{
                maxWidth: "310px",
                borderRadius: "17px",
              }}
              alt=""
            />
          </div>

          <div className="flex">
            <img
              src={img2}
              style={{ maxWidth: "310px", borderRadius: "17px" }}
              alt=""
            />
          </div>
          <div className="flex">
            <img
              src={img3}
              style={{ maxWidth: "310px", borderRadius: "17px" }}
              alt=""
            />
          </div>
          <div className="flex">
            <img
              src={img7}
              style={{ maxWidth: "310px", borderRadius: "17px" }}
              alt=""
            />
          </div>
        </div>
        <div className="img-slide ">
          <div className="flex">
            <img
              src={img1}
              style={{ maxWidth: "310px", borderRadius: "17px" }}
              alt=""
            />
          </div>
          <div className="flex">
            <img
              src={img2}
              style={{ maxWidth: "310px", borderRadius: "17px" }}
              alt=""
            />
          </div>
          <div className="flex">
            <img
              src={img3}
              style={{ maxWidth: "310px", borderRadius: "17px" }}
              alt=""
            />
          </div>
          <div className="flex">
            <img
              src={img7}
              style={{ maxWidth: "310px", borderRadius: "17px" }}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="images ">
        <div className="img-slide1 ">
          <div className="flex">
            <img src={img4} alt="" className="pad" />
          </div>

          <div className="flex">
            <img src={img5} alt="" className="pad" />
          </div>
          <div className="flex">
            <img src={img6} alt="" className="pad" />
          </div>
        </div>
        <div className="img-slide1 ">
          <div className="flex">
            <img src={img4} alt="" className="pad" />
          </div>
          <div className="flex">
            <img src={img5} alt="" className="pad" />
          </div>
          <div className="flex">
            <img src={img6} alt="" className="pad" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImageScroll;
