import React, { useState } from "react";
import logoImg from "../../images/header/logo.png";
import uaImg from "../../images/header/lang-ua.png";
import ruImg from "../../images/header/lang-ru.png";
import ukImg from "../../images/header/lang-uk.png";
import searchImg from "../../images/header/search-icon.svg";
import vectorImg from "../../images/header/vector.svg";

const Header = () => {
  const [searchValue, setSearchValue] = useState("");

  const toggleSearchPanel = (e) => {
    e.stopPropagation();
    const searchPanel = document.querySelector(".header__search-panel");
    if (searchPanel.style.display) {
      searchPanel.style.display = "";
    } else {
      searchPanel.style.display = "flex";
    }
  };

  const searchMeSomething = (e) => {
    e.stopPropagation();
    e.preventDefault();
    setSearchValue("");
    toggleSearchPanel(e);

    //doing search magic
  };

  const handleChange = (e) => {
    setSearchValue(e.target.value);
  };

  const toggleLangPanel = (e) => {
    e.stopPropagation();
    e.preventDefault();
    const langPanel = document.querySelector(".header__lang__lang-list");
    if (langPanel.style.display) {
      langPanel.style.display = "";
    } else {
      langPanel.style.display = "flex";
    }
  };

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
              <button
                className="header__search"
                onClick={toggleSearchPanel}
                onBlur={toggleSearchPanel}
              >
                <img src={searchImg} alt="search" />
                <form
                  className="header__search-panel"
                  onSubmit={searchMeSomething}
                >
                  <input
                    type="text"
                    placeholder="Поиск..."
                    onChange={handleChange}
                    value={searchValue}
                  />
                  <button type="submit">
                    <img src={searchImg} alt="search" />
                  </button>
                </form>
              </button>
              <div className="header__lang">
                <div className="header__lang__chosen-lang">
                  <img src={ruImg} alt="flag ru" />
                </div>
                <div className="header__lang__lang-list">
                  <img src={uaImg} alt="flag ua" />
                  <img src={ukImg} alt="flag uk" />
                </div>
                <button
                  className="header__lang__dropdown-button"
                  onClick={toggleLangPanel}
                  onBlur={toggleLangPanel}
                >
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
