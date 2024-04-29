import {
  Collapse,
  Nav as ReactNav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
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
      <NavbarBrand href="/" style={{ fontSize: "1rem" }}>
        <img
          alt="logo"
          src={icon_conway}
          style={{
            height: 30,
            width: 30,
            marginRight: 5,
          }}
        />
        Game of Life
      </NavbarBrand>
      <NavbarToggler
        className="me-2"
        onClick={toggle}
        style={{ fontSize: "1rem" }}
      />
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
