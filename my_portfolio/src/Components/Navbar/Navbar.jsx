import React from "react";
import {
  Menu,
  Flex,
  Text,
  Box,
  Show,
  Hide,
  MenuButton,
  MenuList,
  IconButton,
} from "@chakra-ui/react";
import NavbarIcons, { NavbarIcons1 } from "../../Parts/NavbarIcons";
import {
  AttachmentIcon,
  ChatIcon,
  EditIcon,
  HamburgerIcon,
  InfoIcon,
  PhoneIcon,
  StarIcon,
} from "@chakra-ui/icons";
import "./Navbar.css";

export default function Home() {
  const data = [
    {
      url: <ChatIcon />,
      title: "Home",
      id: "home",
    },
    {
      url: <InfoIcon />,
      title: "About Me",
      id: "about",
    },
    {
      url: <StarIcon />,
      title: "Skills",
      id: "skills",
    },
    {
      url: <EditIcon />,
      title: "Projects",
      id: "project",
    },
    {
      url: <PhoneIcon />,
      title: "Contect",
      id: "contect",
    },
    {
      url: <AttachmentIcon />,
      title: "Resume",
      id: "resume",
    },
  ];

  return (
    <>
      <Hide below="md">
        <Box  pos="fixed" left="3%">
          <Box className="n-signature">
            <Text
              fontSize={{ base: "sm", sm: "md", md: "3xl", lg: "2xl" }}
              style={{ fontFamily: "Playball" }}
              bgGradient="linear(to-b, #fdc50f, #fb982f)"
              bgClip="text"
              p="3"
              borderLeft ="4px"
              borderRadius="45%"
              borderColor="#fb982f"
            >            
              Raj Rathor
            </Text>
          </Box>

          <Box
            className="n-title"
            textAlign="center"
            p="10px"
            mt="20"
            background="whiteAlpha.300"
            borderRadius="50px"
          >
            <Menu>
              <Flex flexDirection="column" gap="10px" alignItems="center">
                {data.map((ele) => (
                  <NavbarIcons1
                    key={ele.id}
                    props={{ id: ele.id, url: ele.url, title: ele.title }}
                  />
                ))}
              </Flex>
            </Menu>
          </Box>
        </Box>
      </Hide>
      <Show below="md">
        <Menu pos="fixed">
          <MenuButton
            as={IconButton}
            aria-label="Options"
            icon={<HamburgerIcon />}
            variant="outline"
          />
          <MenuList>
            {data.map((ele) => (
              <NavbarIcons props={{ url: ele.url, title: ele.title }} />
            ))}
          </MenuList>
        </Menu>
      </Show>
    </>
  );
}
