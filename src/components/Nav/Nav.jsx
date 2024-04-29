import {
  Collapse,
  NavItem,
  Nav as ReactNav,
  Navbar,
  NavbarBrand,
  NavbarText,
  NavbarToggler,
  Button,
} from "reactstrap";
import { useState } from "react";
import { About, ThemeToggler } from "../../features";
import icon_conway from "../../assets/icon_conway.svg";

import "./css/nav.css";

const Nav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <Navbar className="justify-content-between" color="dark" dark expand="sm">
      <NavbarBrand href="/">
        <img
          alt="logo"
          src={icon_conway}
          style={{
            height: 40,
            width: 40,
            marginRight: 5,
          }}
        />
        Conway's Game of Life
      </NavbarBrand>
      <NavbarToggler className="me-2" onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <ReactNav className="ms-auto" navbar>
          <About />
          <ThemeToggler />
        </ReactNav>
      </Collapse>
    </Navbar>
  );
};
export default Nav;
