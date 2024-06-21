import React from "react";
import "../../css/Home.css";
import Hsome from "../../assets/photoes/side.webp";
import Footer from "../partial/Footer";

function Home() {
  return (
    <div className="parent">
      <section className="home">
        <div className="row">
          <div className="col">
            <img src={Hsome} alt="hoe" />
          </div>
          <div className="col">
            <div className="title">Learn Anywhere.... At Any Anytime</div>
            <div className="stitle">We are best Educators !!</div>
          </div>
        </div>
      </section>
      <section className="home">
        <div className="row">
          <div className="col">
            <img src={Hsome} alt="hoe" />
          </div>
          <div className="col">
            <div className="title">Learn Anywhere.... At Any Anytime</div>
            <div className="stitle">We are best Educators !!</div>
          </div>
        </div>
      </section>
      <section className="home">
        <div className="row">
          <div className="col">
            <img src={Hsome} alt="hoe" />
          </div>
          <div className="col">
            <div className="title">Learn Anywhere.... At Any Anytime</div>
            <div className="stitle">We are best Educators !!</div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Home;
