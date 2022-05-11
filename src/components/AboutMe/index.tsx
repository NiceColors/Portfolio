import {
  Box,
  Divider,
  Flex,
  Grid,
  Image,
  Link,
  Switch,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Company from "components/Curriculum/Company";
import Dots from "components/Curriculum/Dots";
import React from "react";
import {
  AiFillLinkedin,
  AiFillGithub,
  AiFillTwitterSquare,
  AiOutlineTwitter,
} from "react-icons/ai";

import Item from "../Curriculum/Item";

function index() {
  return (
    <>
      <Box minH="100vh" mt={16} position={"relative"}>
        <Box as="header" mb={12}>
          <Image
            borderRadius="100%"
            w="200px"
            transform="translateX(-10%)"
            mb={{ base: 4, md: 12 }}
            src="https://avatars.githubusercontent.com/u/54453426?v=4"
          />
          <Flex
            justifyContent="space-between"
            w="100%"
            flexDirection={{ base: "column", md: "inherit" }}
          >
            <Box>
              <Text fontSize="clamp(2rem, 5vw, 4rem)">
                Victor Batista, <br /> Front-End developer
              </Text>
              <Switch colorScheme="green" isChecked={true} /> Available
            </Box>

            <Box mt={8}>
              <Link>victorbtst77@gmail.com</Link>
              <Text mt={2}>Tel: +21 99 9999-9999</Text>
              <Link mt={2}>nicecolors.vercel.app/tecnologies</Link>
              <Flex mt={5}>
                <Link href="#" mr={4}>
                  <AiFillLinkedin size="35px" />
                </Link>
                <Link href="#" mr={4}>
                  <AiFillGithub size="35px" />
                </Link>
                <Link href="#">
                  <AiOutlineTwitter
                    color="white"
                    style={{
                      borderRadius: "100%",
                      backgroundColor: "#1a202c",
                    }}
                    size="35px"
                  />
                </Link>
              </Flex>
            </Box>
          </Flex>
        </Box>
        <Divider />
        <Text mt={12} fontWeight="light">
          Desenvolvedor Front-end com experiência na construção de aplicações
          Web com JavaScript / Reactjs / Nodejs e algumas outras bibliotecas e
          frameworks interessantes. Atualmente sou graduando em Sistemas de
          Informações pela UFRRJ e atuo como bolsista do Laboratório de
          Psicologia e Informações Afro-Descendentes da UFRRJ e como tutor do
          projeto de extensão StoryGirl com o intuito de apresentar conceitos da
          programação de computadores para crianças e jovens. Também adoro
          participar de comunidades, ajudar e apoiar organizações para promover
          a diversidade na tecnologia.
        </Text>

        <Box as="header" mt={12}>
          <Item title="Work Experience" />
          <Box>
            <Company
              page="index"
              title="LAPSIAFRO 📖⌨️"
              date="October. 2021 - January. 2022"
              charge="Full Stack Developer"
            />
            <Text fontWeight={300} mb={2}>
              Criação e manuntenção de sites do LapsiAfro da UFRRJ
            </Text>
            <Link href="google.com" color="green.400">
              GT-Aion 2021 - Covid-19
            </Link>
            <br />
            <Link href="google.com" color="green.400">
              GT-Aion 2022
            </Link>
          </Box>
          <Box mt={16}>
            <Company
              page="index"
              title="Sphera Educacional 📖⌨️ 🌍"
              date="March. 2022 - ~~~"
              charge="Front-end Developer"
            />
            <Text fontWeight={300} mb={2}>
              Criação (React/Nextjs) e manutenção de sites referentes a educação na Sphera
            </Text>
           
          </Box>
          <Item title="Personal Projects" />
          <Company
            page="index"
            title="Lorem Ipsum"
            date="October. 2021 - January. 2022"
            charge="Full Stack Developer"
          />
          <Box>
            <UnorderedList>
              <Dots src="google.com" text="Lorem Ipsum" />
              <Dots src="google.com" text="Lorem Ipsum" />
              <Dots src="google.com" text="Lorem Ipsum" />
            </UnorderedList>
          </Box>
        </Box>
      </Box>
    </>
  );
}

export default index;
