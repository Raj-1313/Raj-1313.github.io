import {  Box, MenuItem } from "@chakra-ui/react";
import React from "react";
import "./NavbarIcon.css"
import {Link} from 'react-scroll';

const NavbarIcons = ({ props }) => {
  const { url, title } = props;
  return (
    <>
      <MenuItem icon={url}>
        {title}
      </MenuItem>
    </>
  );
};

export default NavbarIcons;

// const scrollPage = () =>{
//   window.scrollX  
//     console.log(window)
//  }


  // const changeBackground = () => {
  //     console.log(window.scrollX)
  //     if (window.scrollX > 120) {
  //         // setNavbar(true)
  //     }

  //     if (window.scrollX === 0) {
  //         // setNavbar(false)
  //     }
  // }

  // window.addEventListener('scroll', scrollPage)




const NavbarIcons1 = ({ props }) => {
  const { url, title ,id } = props;
  return (
    <>
   <Link  to={id} spy={true}  smooth={true} fontSize={{base:'xs',sm:'sm',md:'md',lg:'xl'}}  className="md_n_text" >
        {title}   
        </Link>
    </>
  );
};

export { NavbarIcons1}
