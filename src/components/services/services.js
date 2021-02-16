import React, { useState, useEffect } from "react";
import card1Img from "../../images/services/card-1.png";
import card2Img from "../../images/services/card-2.png";
import card3Img from "../../images/services/card-3.png";
import card4Img from "../../images/services/card-4.png";
import card5Img from "../../images/services/card-5.png";
import card6Img from "../../images/services/card-6.png";
import card7Img from "../../images/services/card-7.png";
import card8Img from "../../images/services/card-8.png";

let gearImg = () => {
  return (
    <svg
      width="286"
      height="287"
      viewBox="0 0 286 287"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M200.26 224.671C203.636 227.742 208.861 227.491 211.938 224.112L229.902 204.331C232.973 200.955 232.724 195.721 229.352 192.656L216.417 180.923C219.619 174.67 221.938 168.128 223.412 161.431L240.872 160.584C245.423 160.379 248.954 156.496 248.726 151.945L247.442 125.247C247.228 120.695 243.359 117.163 238.808 117.39L221.336 118.229C219.233 111.709 216.285 105.413 212.524 99.5066L224.264 86.597C227.348 83.2066 227.088 77.9786 223.707 74.911L203.938 56.9313C200.561 53.8692 195.324 54.1267 192.263 57.4816L180.515 70.4258C174.264 67.2295 167.72 64.9054 161.028 63.4276L160.196 45.9806C159.99 41.4165 156.106 37.9078 151.548 38.1246L124.867 39.3996C120.292 39.6118 116.78 43.4906 117.005 48.0507L117.834 65.4922C111.317 67.6009 105.012 70.5458 99.109 74.3127L86.1876 62.5653C82.8044 59.5064 77.5778 59.7434 74.5079 63.1329L56.5424 82.9006C53.4771 86.2728 53.7173 91.5049 57.0958 94.5811L70.0227 106.325C66.8397 112.561 64.5069 119.103 63.03 125.809L45.5972 126.64C41.0284 126.863 37.5157 130.727 37.7215 135.292L39.0028 161.984C39.2196 166.542 43.1016 170.059 47.6508 169.84L65.0946 169.003C67.2065 175.525 70.1592 181.818 73.9206 187.725L62.1787 200.643C59.1197 204.026 59.36 209.258 62.729 212.318L82.5053 230.286C85.887 233.367 91.1064 233.105 94.1945 229.735L105.919 216.812C112.163 219.997 118.711 222.327 125.417 223.804L126.241 241.262C126.457 245.806 130.342 249.329 134.899 249.112L161.583 247.828C166.138 247.606 169.662 243.749 169.448 239.183L168.602 221.737C175.127 219.616 181.415 216.681 187.325 212.925L200.26 224.671ZM113.939 175.852C96.1479 159.687 94.8289 132.131 110.986 114.351C127.172 96.5328 154.715 95.2288 172.504 111.402C190.316 127.577 191.64 155.13 175.455 172.912C159.295 190.7 131.743 192.024 113.939 175.852Z"
        fill="#C4C4C4"
        fill-opacity="0.33"
      />
    </svg>
  );
};

const Services = () => {
  let degOfGears = 0;

  const rotateGears = (e) => {
    degOfGears = window.pageYOffset;
    degOfGears = Math.floor(degOfGears);

    const gears = document.querySelectorAll(".gear");

    window.requestAnimationFrame(() => {
      gears.forEach((item, index) => {
        if (index % 2 === 0) {
          return (item.style.transform = `rotate(${degOfGears}deg)`);
        } else {
          return (item.style.transform = `rotate(${-degOfGears}deg)`);
        }
      });
    });
  };
  window.addEventListener("scroll", rotateGears, false);

  return (
    <>
      <section className="services">
        <div className="container">
          <h2 className="title">Услуги</h2>
          <div className="services__cards">
            <div className="services__card">
              <img src={card1Img} alt="machines" />
              <div className="services__card__title">
                <div className="services__card__descr">
                  Производство оборудования
                </div>
              </div>
            </div>
            <div className="services__card">
              <img src={card2Img} alt="furniture" />
              <div className="services__card__title">
                <div className="services__card__descr">
                  Металлическая мебель
                </div>
              </div>
            </div>
            <div className="services__card">
              <img src={card3Img} alt="roof" />
              <div className="services__card__title">
                <div className="services__card__descr">Металлоконструкции</div>
              </div>
            </div>
            <div className="services__card">
              <img src={card4Img} alt="milling thread" />
              <div className="services__card__title">
                <div className="services__card__descr">Металлообработка</div>
              </div>
            </div>
            <div className="services__card">
              <img src={card5Img} alt="millimg thread" />
              <div className="services__card__title">
                <div className="services__card__descr">Раскрой металла</div>
              </div>
            </div>
            <div className="services__card">
              <img src={card6Img} alt="sculptures" />
              <div className="services__card__title">
                <div className="services__card__descr">
                  Конструкторское бюро
                </div>
              </div>
            </div>
            <div className="services__card">
              <img src={card7Img} alt="building tech" />
              <div className="services__card__title">
                <div className="services__card__descr">Аренда техники</div>
              </div>
            </div>
            <div className="services__card">
              <img src={card8Img} alt="tech repair" />
              <div className="services__card__title">
                <div className="services__card__descr">Ремонт техники</div>
              </div>
            </div>
          </div>
          <a className="services__calculating" href="#">
            <button>Быстрый расчет цены по чертежу</button>
          </a>
          <div className="gear gear-1">{gearImg()}</div>
          <div className="gear gear-2">{gearImg()}</div>
          <div className="gear gear-3">{gearImg()}</div>
          <div className="gear gear-4">{gearImg()}</div>
        </div>
      </section>
    </>
  );
};

export default Services;
