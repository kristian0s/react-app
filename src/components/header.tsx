import logo from "./../assets/logo.png";
import hamburger from "./../assets/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div>
          <img className="header__logo" src={logo} alt="" />
        </div>
        <div className="header__actions">
          <nav className="header__nav">
            <a className="header__nav__item" href="/">
              Home
            </a>
            <a className="header__nav__item" href="/ispit">
              CSS Ispit
            </a>
            <a className="header__nav__item" href="/zavrsni">
              Zavrsni
            </a>
            <a className="header__nav__item" href="/parcijalni1905">
              Parcijalni 1905
            </a>
            <a className="header__nav__item" href="/netflix">
              Netflix
            </a>
          </nav>
          <div>KR</div>
        </div>
        <div className="header__hamburger">
          <img src={hamburger} alt="hamburger menu icon" />
        </div>
      </div>
    </header>
  );
};

export default Header;
