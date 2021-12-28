import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function index() {
  return (
    <>
      <Box>
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
                <Box
                  mt={4}
                  w="10vw"
                  h="5vh"
                  mr="3vw"
                  bgColor="gray.700"
                  borderRadius="7px"
                ></Box>
                <Box
                  mt={4}
                  w="10vw"
                  h="5vh"
                  bgColor="gray.700"
                  borderRadius="7px"
                ></Box>
                <Box
                  mt={4}
                  w="10vw"
                  h="5vh"
                  bgColor="gray.700"
                  borderRadius="7px"
                ></Box>
                <Box
                  mt={4}
                  w="10vw"
                  h="5vh"
                  bgColor="gray.700"
                  borderRadius="7px"
                ></Box>
                <Box
                  mt={4}
                  w="10vw"
                  h="5vh"
                  bgColor="gray.700"
                  borderRadius="7px"
                ></Box>
              </Box>
              <Box mr="3vw">
                <Heading fontSize="clamp(1rem, 5vw, 2rem)" mt={24}>
                  Back-End
                </Heading>
                <Box
                  mt={4}
                  w="10vw"
                  h="5vh"
                  bgColor="gray.700"
                  borderRadius="7px"
                ></Box>
                <Box
                  mt={4}
                  w="10vw"
                  h="5vh"
                  bgColor="gray.700"
                  borderRadius="7px"
                ></Box>
                <Box
                  mt={4}
                  w="10vw"
                  h="5vh"
                  bgColor="gray.700"
                  borderRadius="7px"
                ></Box>
              </Box>
              <Box>
                <Heading fontSize="clamp(1rem, 5vw, 2rem)" mt={24}>
                  Others
                </Heading>
                <Box
                  mt={4}
                  w="10vw"
                  h="5vh"
                  bgColor="gray.700"
                  borderRadius="7px"
                ></Box>
                <Box
                  mt={4}
                  w="10vw"
                  h="5vh"
                  bgColor="gray.700"
                  borderRadius="7px"
                ></Box>
              </Box>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
