/* eslint-disable prettier/prettier */
import {
  Heading,
  Grid,
  Box,
  Text,
  useColorMode,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";

interface HeroProps {
  avatarUrl: string;
}

export default function Hero({ avatarUrl }: HeroProps) {
  const { colorMode } = useColorMode();
  const repoLink = "https://github.com/NiceColors";

  return (
    <>
      <Grid minH="60vh" mt="32" templateColumns="1fr 1fr" position="relative">
        <Box>
          <Text fontSize="1.975rem" fontWeight="normal" color="green.400">
            Hey, i&apos;m
          </Text>
          <Heading ml="6" display="flex" fontSize="6rem">
            Victor Batista<Text color="green.400">.</Text>
          </Heading>

          <Text
            fontSize="1.4rem"
            color={colorMode === "light" ? "gray.600" : "gray.500"}
          >
            I am a
            <Text
              as="span"
              color={colorMode === "light" ? "#000" : "#fff"}
              fontWeight="bold"
            >
              {" "}
              student
            </Text>{" "}
            of Information systems at{" "}
            <Text
              as="span"
              color={colorMode === "light" ? "#000" : "#fff"}
              fontWeight="bold"
            >
              {" "}
              UFRRJ
            </Text>
            .
          </Text>
          <Grid mt="32" h="50vh" position="relative">
            <Box
              w="480px"
              h="210px"
              border="1px solid #77dd77"
              // bg={colorMode === "light" ? "#fff" : "transparent"}
              backgroundImage="./GT-AION.png"
              backgroundSize="contain"
              backgroundRepeat="no-repeat"
            />
            <Box
              w="480px"
              h="230px"
              position="absolute"
              top="140px"
              right="10px"
              border="1px solid #77dd77"
              // bg={colorMode === "light" ? "#fff" : "transparent"}
              backgroundImage="./Interfaces.png"
              backgroundSize="contain"
              backgroundRepeat="no-repeat"
            />
          </Grid>
        </Box>
        <Box
          h="400px"
          w="400px"
          borderRadius="50%"
          position="absolute"
          backgroundImage={`url(${avatarUrl})`}
          right="70"
        >
          <Button
            as="a"
            position="absolute"
            bottom="-2"
            colorScheme="green"
            right="25%"
            href={repoLink}
            target="_blank"
            leftIcon={<AiFillGithub />}
            size="lg"
            rounded="10px"
          >
            Open in Github
          </Button>
        </Box>
      </Grid>
    </>
  );
}
