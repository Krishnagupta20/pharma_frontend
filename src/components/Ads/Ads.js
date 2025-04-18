import React from "react";
import "./Ads.css";
import image1 from "../../assets/i1.png";
import image2 from "../../assets/i2.png";
import image3 from "../../assets/i3.png";
import image4 from "../../assets/i4.png";
import image5 from "../../assets/i5.png";
import image6 from "../../assets/i6.png";

export default function Ads() {
  return (
    <>
      <div className="parent">
        <h3>Today's Trending</h3>
        <div className="imagediv">
          <div className="im">
            <a href="https://www.amazon.in/K7-Anti-Virus-Security-Premium-Software/dp/B01MAXF88R/?_encoding=UTF8&pd_rd_w=tIPrX&content-id=amzn1.sym.32dff6c6-13b7-4216-ba2c-d6652e6e6efc&pf_rd_p=32dff6c6-13b7-4216-ba2c-d6652e6e6efc&pf_rd_r=03EQHBD9KRSCNX471AYV&pd_rd_wg=kPAgM&pd_rd_r=63c6e4ba-46d6-465d-8934-a220a6e052c5&ref_=pd_gw_ls_gwc_pc_en7_">
              <img src={image1} alt="" />
            </a>
          </div>
          <div className="im">
            <a href="https://www.amazon.in/K7-Anti-Virus-Security-Premium-Software/dp/B01MAXF88R/?_encoding=UTF8&pd_rd_w=tIPrX&content-id=amzn1.sym.32dff6c6-13b7-4216-ba2c-d6652e6e6efc&pf_rd_p=32dff6c6-13b7-4216-ba2c-d6652e6e6efc&pf_rd_r=03EQHBD9KRSCNX471AYV&pd_rd_wg=kPAgM&pd_rd_r=63c6e4ba-46d6-465d-8934-a220a6e052c5&ref_=pd_gw_ls_gwc_pc_en7_">
              <img src={image2} alt="" />
            </a>
          </div>
          <div className="im">
            <a href="https://www.amazon.in/K7-Anti-Virus-Security-Premium-Software/dp/B01MAXF88R/?_encoding=UTF8&pd_rd_w=tIPrX&content-id=amzn1.sym.32dff6c6-13b7-4216-ba2c-d6652e6e6efc&pf_rd_p=32dff6c6-13b7-4216-ba2c-d6652e6e6efc&pf_rd_r=03EQHBD9KRSCNX471AYV&pd_rd_wg=kPAgM&pd_rd_r=63c6e4ba-46d6-465d-8934-a220a6e052c5&ref_=pd_gw_ls_gwc_pc_en7_">
              <img src={image3} alt="" />
            </a>
          </div>
        </div>


        <div className="imagediv2">
          <div className="im">
            <a href="https://www.amazon.in/K7-Anti-Virus-Security-Premium-Software/dp/B01MAXF88R/?_encoding=UTF8&pd_rd_w=tIPrX&content-id=amzn1.sym.32dff6c6-13b7-4216-ba2c-d6652e6e6efc&pf_rd_p=32dff6c6-13b7-4216-ba2c-d6652e6e6efc&pf_rd_r=03EQHBD9KRSCNX471AYV&pd_rd_wg=kPAgM&pd_rd_r=63c6e4ba-46d6-465d-8934-a220a6e052c5&ref_=pd_gw_ls_gwc_pc_en7_">
              <img src={image4} alt="" />
            </a>
          </div>
          <div className="im">
            <a href="https://www.amazon.in/K7-Anti-Virus-Security-Premium-Software/dp/B01MAXF88R/?_encoding=UTF8&pd_rd_w=tIPrX&content-id=amzn1.sym.32dff6c6-13b7-4216-ba2c-d6652e6e6efc&pf_rd_p=32dff6c6-13b7-4216-ba2c-d6652e6e6efc&pf_rd_r=03EQHBD9KRSCNX471AYV&pd_rd_wg=kPAgM&pd_rd_r=63c6e4ba-46d6-465d-8934-a220a6e052c5&ref_=pd_gw_ls_gwc_pc_en7_">
              <img src={image5} alt="" />
            </a>
          </div>
          <div className="im">
            <a href="https://www.amazon.in/K7-Anti-Virus-Security-Premium-Software/dp/B01MAXF88R/?_encoding=UTF8&pd_rd_w=tIPrX&content-id=amzn1.sym.32dff6c6-13b7-4216-ba2c-d6652e6e6efc&pf_rd_p=32dff6c6-13b7-4216-ba2c-d6652e6e6efc&pf_rd_r=03EQHBD9KRSCNX471AYV&pd_rd_wg=kPAgM&pd_rd_r=63c6e4ba-46d6-465d-8934-a220a6e052c5&ref_=pd_gw_ls_gwc_pc_en7_">
              <img src={image6} alt="" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
