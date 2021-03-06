import React from "react";
import Slider from "react-slick";
import mainBannerImg from "../../images/banner/main-banner.png";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 400,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: false,
    arrows: false,
    autoplay: false
  };

  return (
    <div className="banner">
      <Slider {...settings}>
        <div>
          <img src={mainBannerImg} alt="banner" />

          <div className="banner__title">
            <h1 className="banner__descr">
              Высокоточное изготовление изделий из металла по чертежам
            </h1>
          </div>
        </div>
        <div>
          <img src={mainBannerImg} alt="banner" />

          <div className="banner__title">
            <h1 className="banner__descr">
              Высокоточное изготовление изделий из металла по чертежам
            </h1>
          </div>
        </div>
        <div>
          <img src={mainBannerImg} alt="banner" />

          <div className="banner__title">
            <h1 className="banner__descr">
              Высокоточное изготовление изделий из металла по чертежам
            </h1>
          </div>
        </div>
        <div>
          <img src={mainBannerImg} alt="banner" />

          <div className="banner__title">
            <h1 className="banner__descr">
              Высокоточное изготовление изделий из металла по чертежам
            </h1>
          </div>
        </div>
      </Slider>


    </div>
  );
};

export default Banner;
