import React from "react";
import "../../css/Footer.css";
import { GoChecklist } from "react-icons/go";
import { FaRegNewspaper } from "react-icons/fa6";
import { VscCopy } from "react-icons/vsc";
import { MdCastConnected } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { MdAddCall } from "react-icons/md";
import { FaLocationArrow } from "react-icons/fa6";

function Footer() {
  return (
    <div className="Footer">
      <div className="row">
        <div className="col">
          <div className="headingcol">
            {" "}
            <GoChecklist className="icon" />
            About
          </div>
          <div className="s-links">
            <div className="sicon">
              <MdLocationOn />
            </div>
            <div className="scontent">Lorem ipsum dolor</div>
          </div>
          <div className="s-links">
            <div className="sicon">
              <MdAddCall />
            </div>
            <div className="scontent">+977 9822935490</div>
          </div>
          <div className="s-links">
            <div className="sicon">
              <FaLocationArrow />
            </div>
            <div className="scontent">nir123@gmail.com</div>
          </div>
        </div>
        <div className="col">
          <div className="headingcol">
            <FaRegNewspaper className="icon" />
            Latest News
          </div>
        </div>
        <div className="col">
          <div className="headingcol">
            <VscCopy className="icon" />
            Information
          </div>
        </div>
        <div className="col">
          <div className="headingcol">
            <MdCastConnected className="icon" />
            Socialmedia
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
