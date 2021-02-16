import React from "react";
import logoImg from "../../images/header/logo.png";
import uaImg from "../../images/header/lang-ua.png";
import ruImg from "../../images/header/lang-ru.png";
import ukImg from "../../images/header/lang-uk.png";
import searchImg from "../../images/header/search-icon.svg";
import vectorImg from "../../images/header/vector.svg";

const Header = () => {
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="logo">
              <img src={logoImg} alt="logo" />
            </div>
            <div className="header__menu">
              <ul>
                <li>
                  <a href="" className="header__tab active">
                    Главная
                  </a>
                </li>
                <li>
                  <a href="" className="header__tab">
                    Услуги
                  </a>
                </li>
                <li>
                  <a href="" className="header__tab">
                    Наши работы
                  </a>
                </li>
                <li>
                  <a href="" className="header__tab">
                    О нас
                  </a>
                </li>
                <li>
                  <a href="" className="header__tab">
                    Контакты
                  </a>
                </li>
              </ul>
            </div>
            <div className="header__search-lang-panel">
              <div className="header__search">
                <img src={searchImg} alt="search" />
                <form className="header__search-panel">
                  <input type="text" placeholder="Поиск..." />
                  <button>
                    <img src={searchImg} alt="search" />
                  </button>
                </form>
              </div>
              <div className="header__lang">
                <div className="header__lang__chosen-lang">
                  <img src={ruImg} alt="flag ru" />
                </div>
                <div className="header__lang__lang-list">
                  <img src={uaImg} alt="flag ua" />
                  <img src={ukImg} alt="flag uk" />
                </div>
                <button className="header__lang__dropdown-button">
                  <img src={vectorImg} alt="vector arrow" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
