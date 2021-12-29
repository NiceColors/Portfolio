import { Box, Flex, Heading, Text } from "@chakra-ui/react";
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
          overflow="hidden"
        >
          <Heading fontSize="clamp(4rem, 5vw, 6rem)">Tecnologies</Heading>
          <Box>
            <Text mt={8}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quasi
              voluptate fuga earum commodi error? Voluptas ipsa molestias
              voluptates perspiciatis, sequi iste corrupti nihil quasi aliquam
              cumque quam explicabo minima quod. fuga earum commodi error?
              Voluptas ipsa molestias voluptates perspiciatis, sequi iste
              corrupti nihil quasi aliquam cumque quam explicabo minima quod.
              fuga earum commodi error? Voluptas ipsa molestias voluptates
              perspiciatis, sequi iste corrupti nihil quasi aliquam cumque quam
              explicabo minima quod.
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
                <Tec nome="Laravel" icon={<SiLaravel />} />
                <Tec nome="Wordpress" icon={<SiWordpress />} />
                <Tec nome="Sass" icon={<DiSass />} />
                <Tec nome="Figma" icon={<CgFigma />} />
              </Box>

              <Box mr="3vw">
                <Heading fontSize="clamp(1rem, 5vw, 2rem)" mt={24}>
                  Back-End
                </Heading>
                <Tec nome="NodeJS" icon={<DiNodejsSmall />} />
                <Tec nome="PHP" icon={<DiPhp />} />
                <Tec nome="NestJS" icon={<SiNestjs />} />
                <Tec nome="Flask" icon={<SiFlask />} />
                <Tec nome="MySQL" icon={<SiMysql />} />
                <Tec nome="MongoDB" icon={<SiMongodb />} />
                <Tec nome="Git" icon={<AiFillGithub />} />
              </Box>
              <Box mr="3vw">
                <Heading fontSize="clamp(1rem, 5vw, 2rem)" mt={24}>
                  Others
                </Heading>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
