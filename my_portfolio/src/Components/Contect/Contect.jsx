import { Box, Button, Flex, Grid, Img, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import "./Contacts.css";
// import { FiPhone, FiAtSign } from 'react-icons/fi';
// import { HiOutlineLocationMarker } from 'react-icons/hi';
import {
  FaTwitter,
  FaLinkedinIn,
  FaGithub,
  FaYoutube,
  FaBloggerB,
  FaRedditAlien,
  FaStackOverflow,
  FaCodepen,
  FaInstagram,
  FaGitlab,
  FaMediumM,
} from "react-icons/fa";
import { useEffect, useState } from "react";
import "./Contacts.css";
import { socialMediaLinks } from "./Portfolio";

const Contect = () => {
  const [contactsDetails, setContactDetails] = useState("");

  return (
    <Box id="contect">
     
      <section id="contact">
        <div className="contact-me2">
          <Grid templateColumns='repeat(2,1fr)'>
            <div class="col-lg-5 col-md-12">
              <div class="work-togather-text">
                <h2 class="h2-title text-white ">Let's Work Together</h2>
                <p>
                  Are you impressed and want a project done, give a call or
                  email me any time.
                </p>
              </div>
            </div>
            <div>              
                <input
                  type="email"
                  name="Email"
                  class="form-input-one subscribe-input"
                  placeholder="Email Address"
                  required=""
                />                      
                <Button type="submit" class="sec-btn">
                  Subscribe Now
                </Button>             
            </div>
            
          </Grid>


          <div className="contact-row">
            {socialMediaLinks &&
              socialMediaLinks.map((details) => (
                <div className="contact-info " key={details.id}>
                  <div className="contact-details">
                    <i className={details.icon}></i>
                    <h4 className="icon-name">{details.name}:</h4>
                    <a href={details.link} className="d-name">
                      {details.contact_info}
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>
    </Box>
  );
};

export default Contect;

{
  /* <section className="qualification section"  id="qualification1"> */
}
{
  /* <h2 className="section__title">Qualification</h2> */
}
{
  /* <span className="section__subtitle">My Persional Journey</span> */
}

{
  /* <div className="qualification__container container"> */
}
{
  /* <div className="qualification__tabs"> */
}
{
  /* <div className="qualification__button button--flex qualification__active" data-target="#education">
                        <i class="uil uil-graduation-cap qualification__icon"></i>
                        Education */
}
{
  /* </div> */
}
{
  /* </div> */
}

{
  /* </div> */
}
{
  /* </section> */
}
