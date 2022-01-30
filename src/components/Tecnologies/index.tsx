import { Box, Flex, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";
import {
  DiJavascript,
  DiNodejsSmall,
  DiPhp,
  DiReact,
  DiSass,
} from "react-icons/di";
import { CgFigma } from "react-icons/cg";
import {
  SiChakraui,
  SiCss3,
  SiFlask,
  SiHtml5,
  SiLaravel,
  SiMongodb,
  SiMysql,
  SiNestjs,
  SiStyledcomponents,
  SiWordpress,
} from "react-icons/si";
import Tec from "./Tec";
import { AiFillGithub } from "react-icons/ai";
import Github from "./Github";

export default function index() {
  return (
    <>
      <Box id="tecnologies">
        <Flex
          m="0 auto"
          flexDirection="column"
          mt="140px"
          alignItems="center"
          justifyContent="center"
        >
          <Heading fontSize="clamp(3rem, 5vw, 6rem)">Tecnologies</Heading>
          <Box>
            <Text mt={8}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              voluptate fuga earum commodi error? Voluptas ipsa molestias
              voluptates perspiciatis, sequi iste corrupti nihil quasi aliquam
              cumque quam explicabo minima quod. fuga earum commodi error?
              Voluptas ipsa molestias voluptates perspiciatis, sequi iste
              corrupti nihil
            </Text>
            <Flex>
              <Box mr="3vw">
                <Heading fontSize="clamp(1rem, 5vw, 2rem)" mt={24}>
                  Front-End
                </Heading>
                <Tec nome="HTML5" icon={<SiHtml5 />} />
                <Tec nome="CSS3" icon={<SiCss3 />} />
                <Tec nome="JavaScript" icon={<DiJavascript />} />
                <Tec nome="React" icon={<DiReact />} />
                <Tec nome="ChakraUI" icon={<SiChakraui />} />
                <Tec nome="Sass" icon={<DiSass />} />
                <Tec nome="Wordpress" icon={<SiWordpress />} />
              </Box>

              <Box mr="3vw">
                <Heading fontSize="clamp(1rem, 5vw, 2rem)" mt={24}>
                  Back-End
                </Heading>
                <Tec nome="NodeJS" icon={<DiNodejsSmall />} />
                <Tec nome="PHP" icon={<DiPhp />} />
                <Tec nome="MySQL" icon={<SiMysql />} />
                <Tec nome="MongoDB" icon={<SiMongodb />} />
              </Box>
              <Box mr="3vw">
                <Heading fontSize="clamp(1rem, 5vw, 2rem)" mt={24}>
                  Tools
                </Heading>
                <Tec nome="Git" icon={<AiFillGithub />} />
                <Tec nome="Figma" icon={<CgFigma />} />
              </Box>
            </Flex>
          </Box>
        </Flex>
        <Stack>
          <Heading mb={8} mt={24} fontWeight={400}>
            <a href="https://github.com/NiceColors">
              GitHub{" "}
              <Text as="span" color="green.400">
                Code
              </Text>{" "}
              Stats
            </a>
          </Heading>
          <Github />
        </Stack>
      </Box>
    </>
  );
}
