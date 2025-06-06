import { MenuItem } from "@chakra-ui/react";
import React from "react";
import "./NavbarIcon.css";
import { Link } from "react-scroll";

const NavbarIcons = ({ props }) => {
  const { url, title, id } = props;
  return (
    <>
      <Link to={id} spy={true} smooth={true}>
        <MenuItem color="black" icon={url}>
          {title}
        </MenuItem>
      </Link>
    </>
  );
};

export default NavbarIcons;

const NavbarIcons1 = ({ props }) => {
  const { url, title, id } = props;
  return (
    <>
      {
        <Link
          to={id}
          spy={true}
          smooth={true}
          fontSize={{ base: "xs", sm: "sm", md: "md", lg: "xl" }}
          className="md_n_text"
        >
          {title}
        </Link>
      }
    </>
  );
};

export { NavbarIcons1 };
