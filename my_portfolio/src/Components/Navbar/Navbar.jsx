import React from "react";
import {
  Menu,
  Flex,
  Text,
  Box,
  Show,
  MenuButton,
  MenuList,
  IconButton,

  Wrap,
  WrapItem,
  Avatar,
  Tooltip,
} from "@chakra-ui/react";
import NavbarIcons, { NavbarIcons1 } from "../../Parts/NavbarIcons";
import {
  ChatIcon,
  EditIcon,
  HamburgerIcon,
  InfoIcon,
  PhoneIcon,
  StarIcon,
} from "@chakra-ui/icons";
import "./Navbar.css";
import {HiOutlineDownload} from 'react-icons/hi'


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
      title: "Github",
      id: "Github",
    },
    {
      url: <PhoneIcon />,
      title: "Contect",
      id: "contect",
    },
    // {
    //   url: <AttachmentIcon />,
    //   title: "Resume",
    //   id: "https://drive.google.com/u/0/uc?id=1wucaOltUjDlKKx7y820FAH1PrdRJtURQ&export=download",
    // },
  ];

  return (
    <>
      <Show below="md">
        <Flex
          pos="fixed"
          w="100vw"
          background="black"
          zIndex="20"
          h="20"
          borderBottomRadius="20px"
          alignItems="center"
          justifyContent="space-between"
          p="5"
          borderBottom="1px solid #fdc50f"
        >
          <Box className="n-signature">
            <Text
              fontSize={{ base: "sm", sm: "md", md: "3xl", lg: "2xl" }}
              style={{ fontFamily: "Playball" }}
              bgGradient="linear(to-b, #fdc50f, #fb982f)"
              bgClip="text"
              p="3"
              borderLeft="4px"
              borderRadius="45%"
              borderColor="#fb982f"
            >
              Raj Rathor
            </Text>
          </Box>

          <Menu>
            <MenuButton
              as={IconButton}
              aria-label="Options"
              transition="all 0.2s"
              icon={<HamburgerIcon />}
              variant="outline"
              colorScheme="yellow"
              _hover={{ bg: "gray.400" }}
              _focus={{ boxShadow: "outline" }}
            />
            <MenuList bg="linear-gradient(180deg, #fdc50f 26.71%, #fb982f 99.36%)">
              {data.map((ele) => (
                <NavbarIcons
                  props={{ url: ele.url, title: ele.title, id: ele.id }}
                />
              ))}
            </MenuList>
          </Menu>
        </Flex>
      </Show>

      <Show above="md">
        <Box
          pos="absolute"
          right="6"
          top="4"
          className="n-signature"
          zIndex="3"
        >
          <Wrap as='a' href="https://drive.google.com/file/d/1wucaOltUjDlKKx7y820FAH1PrdRJtURQ/view?usp=sharing" target="_blank">
          <Tooltip label='Preview Resume'>    
            <WrapItem>
              <Avatar
                name="RAJ RATHOR"
                src="https://static.vecteezy.com/system/resources/thumbnails/013/062/986/small/glasses-logo-design-spectacles-icon-design-template-free-vector.jpg"
                />
            </WrapItem>
                </Tooltip>
          </Wrap>
        </Box>

        <Box
          pos="fixed"
          w="200px"
          backgroundColor="black"
          borderRight="3px solid #fdc50f"
          borderRightRadius="30px"
        >
          <Box textAlign="center" p="10px" mt="10" h="95vh">
            <Flex flexDirection="column" gap="10px" alignItems="center">
              {data.map((ele) => (
                <NavbarIcons1
                  key={ele.id}
                  props={{ id: ele.id, url: ele.url, title: ele.title }}
                />)
              )}
               <Tooltip label='Download Resume' placement='right-end' closeDelay={500} hasArrow bg='#fdc50f' color="black">

              <Box
                as="a"
                href='https://drive.google.com/u/0/uc?id=1wucaOltUjDlKKx7y820FAH1PrdRJtURQ&export=download'
                fontSize={{ base: "xs", sm: "sm", md: "md", lg: "md" }}
                className="md_n_text"
                w='150px'
                >
                Resume 
                 <Box as="Button" p="1">
                 <HiOutlineDownload  />
                 </Box>
              </Box>
                </Tooltip>
               
               
           


            </Flex>
          </Box>
        </Box>
      </Show>
    </>
  );
}
