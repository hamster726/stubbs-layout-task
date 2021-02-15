import React from "react";
import card1Img from "../../images/services/card-1.png"
import card2Img from "../../images/services/card-2.png"
import card3Img from "../../images/services/card-3.png"
import card4Img from "../../images/services/card-4.png"
import card5Img from "../../images/services/card-5.png"
import card6Img from "../../images/services/card-6.png"
import card7Img from "../../images/services/card-7.png"
import card8Img from "../../images/services/card-8.png"

let gearImg = () => {
    return (
        <svg width="263" height="296" viewBox="0 0 263 296" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M38.8646 84.374C34.8095 82.2814 29.8268 83.8766 27.7298 87.9362L15.4971 111.694C13.4046 115.749 14.9997 120.74 19.0504 122.828L34.5809 130.813C33.1067 137.682 32.5601 144.601 32.8693 151.452L16.223 156.789C11.8811 158.164 9.47491 162.829 10.8729 167.166L19.0235 192.622C20.4081 196.964 25.0592 199.374 29.3966 197.976L46.0563 192.644C49.7754 198.397 54.2517 203.716 59.4137 208.448L51.4154 223.956C49.3139 228.029 50.918 233.012 54.9776 235.1L78.726 247.35C82.7811 249.434 87.7728 247.83 89.8608 243.797L97.8591 228.253C104.724 229.723 111.647 230.274 118.493 229.969L123.812 246.607C125.192 250.962 129.852 253.346 134.199 251.957L159.641 243.819C164.005 242.43 166.393 237.775 164.995 233.428L159.681 216.796C165.43 213.072 170.758 208.596 175.485 203.429L191.006 211.432C195.066 213.511 200.053 211.929 202.141 207.861L214.378 184.117C216.466 180.066 214.88 175.075 210.821 172.978L195.294 164.979C196.755 158.133 197.315 151.21 197.006 144.35L213.63 139.036C217.985 137.637 220.378 132.995 218.998 128.64L210.852 103.189C209.463 98.8426 204.803 96.4498 200.465 97.8388L183.833 103.162C180.104 97.4087 175.624 92.0944 170.462 87.3627L178.46 71.8456C180.539 67.786 178.953 62.7944 174.907 60.7108L151.154 48.4736C147.09 46.3721 142.116 47.9763 140.006 52.0314L132.025 67.5485C125.17 66.0878 118.242 65.5321 111.382 65.8413L106.068 49.1906C104.683 44.8576 100.019 42.4604 95.6724 43.8495L70.2303 51.9956C65.8884 53.3891 63.4822 58.0268 64.8713 62.3821L70.2034 79.0149C64.4501 82.7519 59.1358 87.2148 54.3996 92.3722L38.8646 84.374ZM134.88 109.189C156.249 120.198 164.655 146.474 153.65 167.829C142.627 189.23 116.36 197.618 94.9914 186.599C73.5999 175.586 65.1894 149.314 76.2212 127.95C87.2261 106.585 113.497 98.1749 134.88 109.189Z" fill="#C4C4C4" fill-opacity="0.33"/>
        </svg>

    )
}


const Services = () => {
  return (
    <>
      <section className="services">
          <div className="container">
        <div className="title">Услуги</div>
          <div className="services__cards">
              <div className="services__card"><img src={card1Img} alt="machines"/>
                  <div className="services__card__title">
                      <div className="services__card__descr">Производство оборудования</div>
                  </div>
              </div>
              <div className="services__card"><img src={card2Img} alt="furniture"/>
                  <div className="services__card__title">
                      <div className="services__card__descr">Металлическая мебель</div>
                  </div>
              </div>
              <div className="services__card"><img src={card3Img} alt="roof"/>
                  <div className="services__card__title">
                      <div className="services__card__descr">Металлоконструкции</div>
                  </div>
              </div>
              <div className="services__card"><img src={card4Img} alt="milling thread"/>
                  <div className="services__card__title">
                      <div className="services__card__descr">Металлообработка</div>
                  </div>
              </div>
              <div className="services__card"><img src={card5Img} alt="millimg thread"/>
                  <div className="services__card__title">
                      <div className="services__card__descr">Раскрой металла</div>
                  </div>
              </div>
              <div className="services__card"><img src={card6Img} alt="sculptures"/>
                  <div className="services__card__title">
                      <div className="services__card__descr">Конструкторское бюро</div>
                  </div>
              </div>
              <div className="services__card"><img src={card7Img} alt="building tech"/>
                  <div className="services__card__title">
                      <div className="services__card__descr">Аренда техники</div>
                  </div>
              </div>
              <div className="services__card"><img src={card8Img} alt="tech repair"/>
                  <div className="services__card__title">
                      <div className="services__card__descr">Ремонт техники</div>
                  </div>
              </div>
          </div>
          <a className="services__calculating" href="#">
              <button>Быстрый расчет цены по чертежу</button>
          </a>
        <div className="gear-1">{gearImg()}</div>
        <div className="gear-2">{gearImg()}</div>
        <div className="gear-3">{gearImg()}</div>
        <div className="gear-4">{gearImg()}</div>
          </div>
      </section>
    </>
  );
};

export default Services;
