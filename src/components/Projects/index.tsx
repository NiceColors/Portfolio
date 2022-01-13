import {
  Box,
  Flex,
  Heading,
} from "@chakra-ui/react";
import React, {  } from "react";
import BoxImage from "./BoxImage";
// import axios from "axios";

export default function index() {
  // const api = axios.create({
  //   baseURL: "https://api.github.com/nicecolors/repos",
  // });
  const isHidden = 'hidden';

  return (
    <>
      <Box id="projects">
        <Flex
          m="0 auto"
          flexDirection="column"
          mt="140px"
          alignItems="center"
          justifyContent="center"          
        >
          <Heading fontSize="clamp(3rem, 5vw, 6rem)">Projects</Heading>
            <BoxImage
              imageUrl="/img/interfaces.png"
              direction="left"
              firstBadge={"TypeScript"}
              secondBadge={"NextJS"}
              title={"XVI Interfaces"}
              description={
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut molestie enim. Nam efficitur"
              }
              link={""}

            />
          <BoxImage
            imageUrl="/img/gt-aion.png"
            direction="right"
            firstBadge={"TypeScript"}
            secondBadge={"NextJS"}
            title={"GT-Aion"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut molestie enim. Nam efficitur"
            }
            link={""}
          />
          <BoxImage
            imageUrl="/img/interfaces.png"
            direction="left"
            firstBadge={"HTML5"}
            secondBadge={"CSS3"}
            title={"XV Interfaces"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut molestie enim. Nam efficitur"
            }
            link={""}
          />
          <BoxImage
            imageUrl="/img/gt-aion.png"
            direction="right"
            firstBadge={"TypeScript"}
            secondBadge={"React"}
            title={"Lorem Ipsum"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut molestie enim. Nam efficitur"
            }
            link={""}
          />
          <BoxImage
            imageUrl="/img/interfaces.png"
            direction="left"
            firstBadge={"TailwindCSS"}
            secondBadge={"JQuery"}
            title={"Lorem Ipsum"}
            description={
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut molestie enim. Nam efficitur"
            }
            link={""}
          />
        </Flex>
      </Box>
    </>
  );
}
