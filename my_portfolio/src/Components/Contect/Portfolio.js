import { FaHackerrank} from "react-icons/fa";
import {MdMarkEmailRead} from "react-icons/md";
import {ImPhoneHangUp,ImLocation} from "react-icons/im"
import {BsGithub} from "react-icons/bs"

export const socialMediaLinks = [
   
    {
      id:1,
      name: "Email",
      contact_info: 'raj1rathore.1@gmail.com',
      link: "mailto:raj1rathore.1@gmail.com",
      fontAwesomeIcon: <MdMarkEmailRead/>, // Reference https://fontawesome.com/icons/google?style=brands
      backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
    },
       {
        id:2,
      name: "Phone",
      contact_info: "+91 9784070693",
      link: "tel:9784070693",
      fontAwesomeIcon: <ImPhoneHangUp/>, // Reference https://fontawesome.com/icons/instagram?style=brands
      backgroundColor: "Blue", // Reference https://simpleicons.org/?q=instagram
    },
    {
      id:3,
      name: "Location",
      contact_info: "Kota (Rajasthan)",
      link: "#",
      fontAwesomeIcon: <ImLocation/>, // Reference https://fontawesome.com/icons/instagram?style=brands
      backgroundColor: "Blue", // Reference https://simpleicons.org/?q=instagram
    },
       {
        id:4,
      name: "Github",
      contact_info: "Raj-1313",
      link: "https://github.com/Raj-1313",
      fontAwesomeIcon: <BsGithub/>, // Reference https://fontawesome.com/icons/github?style=brands
      backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    },
    {
      id:5,
      name: "HackerRank",
      contact_info: "raj-hacker/1313",
      link: "https://www.hackerrank.com/theromeo_1313",
      fontAwesomeIcon: <FaHackerrank/>, // Reference https://fontawesome.com/icons/github?style=brands
      backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
    },
 
  ];