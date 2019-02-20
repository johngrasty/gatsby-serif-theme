import React from "react";
import { Link } from "gatsby";
import Menu from "./Menu";
import Hamburger from "./Hamburger";
import logo from "../images/header-logo.jpeg";
import MenuMobile from "./MenuMobile";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuActive: false
    };
  }

  toggleMenu = menuActive => {
    this.setState(prevState => ({
      menuActive: !prevState.menuActive
    }));
  };

  render() {
    return (
      <div className="navbar is-fixed-top has-shadow">
        <div className="navbar-brand">
          <div className="logo navbar-item">
            <Link to="/">
              <img alt="Church Name" src={logo} />
            </Link>
          </div>
          <div className="navbar-item">
            <Hamburger toggleMenu={this.toggleMenu} />
          </div>
        </div>
        <MenuMobile active={this.state.menuActive} />
        <Menu />
      </div>
    );
  }
}

export default Header;
