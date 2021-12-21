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
      <Grid minH="60vh" mt="24" templateColumns="1fr 1fr" position="relative">
        <Box>
          <Text fontSize="1.975rem" fontWeight="normal" color="green.400">
            Hey, i&apos;m
          </Text>
          <Heading ml="6" fontSize="clamp(2rem, 5vw, 6rem)">
            Victor Batista
            <Text as="span" color="green.400">
              .
            </Text>
          </Heading>

          <Text
            fontSize="clamp(0.875rem, 2vw, 1.4rem)"
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
              UFRRJ
            </Text>
            .
          </Text>
          <Grid
            mt="32"
            h="50vh"
            position="relative"
            gridTemplateColumns={{ md: "1fr 1fr", lg: "1fr" }}
          >
            <Box
              w={{ sm: "450px", md: "360px", lg: "440px", xl: "480px" }}
              h={{ md: "200px", xl: "230px" }}
              mr="20px"
              // border="1px solid #77dd77"
              // bg={colorMode === "light" ? "#fff" : "transparent"}
              backgroundImage="./GT-AION.png"
              backgroundSize="contain"
              shadow="lg"
              backgroundRepeat="no-repeat"
            />
            <Box
              w={{ sm: "450px", md: "360px", lg: "440px", xl: "480px" }}
              h={{ md: "200px", xl: "230px" }}
              mt={{ sm: "2", md: "0", lg: "0", xl: "0" }}
              position={{ xl: "absolute" }}
              top="140px"
              ml={{ xl: "180px" }}
              shadow="lg"
              // border="1px solid #77dd77"
              // bg={colorMode === "light" ? "#fff" : "transparent"}
              backgroundImage="./Interfaces.png"
              backgroundSize="contain"
              backgroundRepeat="no-repeat"
            />
          </Grid>
        </Box>
        <Box
          h={{ sm:"0", md: "200px", lg: "400px", xl: "500px" }}
          w={{ sm:"0", md: "200px", lg: "400px", xl: "500px" }}
          borderRadius="50%"
          position="absolute"
          backgroundImage={`url(${avatarUrl})`}
          backgroundRepeat={["no-repeat", "no-repeat", "no-repeat"]}
          backgroundSize="cover"
          right={{md: "70"}}
        >
          <Button
            as="a"
            position="absolute"
            bottom={{sm:"-200px", md:"-2"}}
            colorScheme="green"
            right={{ md: "-5%", lg: "25%", xl: "30%" }}
            href={repoLink}
            target="_blank"
            leftIcon={<AiFillGithub />}
            size={"lg"}
            rounded="10px"
          >
            Open in Github
          </Button>
        </Box>
      </Grid>
    </>
  );
}
