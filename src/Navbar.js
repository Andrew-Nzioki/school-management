import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const NavUnlisted = styled.ul`
  text-decoration: none;
`;

const linkStyle = {
  margin: "1rem",
  textDecoration: "none",
  color: "blue",
};
const Nav = () => {
  return (
    <NavUnlisted>
      <Link to="/English" style={linkStyle}>
        English
      </Link>
      <Link to="/MathematicsForm" style={linkStyle}>
        Mathematics
      </Link>
      <Link to="/ScienceForm" style={linkStyle}>
        Science
      </Link>
      <Link to="/About" style={linkStyle}>
        About
      </Link>
      <Link to="/Contact" style={linkStyle}>
        Contact
      </Link>
    </NavUnlisted>
  );
};

export default Nav;
