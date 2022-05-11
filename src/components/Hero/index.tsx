/* eslint-disable prettier/prettier */
import {
  Heading,
  Grid,
  Box,
  Text,
  useColorMode,
  Image,
  Button,
  useBreakpointValue,
  Flex,
} from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Embla from "components/Slider/embla";
import EmblaContainer from "components/Slider/emblaContainer";
import EmblaSlide from "components/Slider/emblaSlide";
import { ArrowRightIcon } from "@chakra-ui/icons";

interface HeroProps {
  avatarUrl: string;
}

export default function Hero({ avatarUrl }: HeroProps) {
  const { colorMode } = useColorMode();
  const repoLink = "https://github.com/NiceColors";
  const variant = useBreakpointValue({
    base: "none",
    sm: "none",
    md: "none",
    lg: "block",
    xl: "block",
  });

  const boxImg = useBreakpointValue({ xl: "xl" });

  return (
    <>
      <Flex
        mt="24"
        minH={{ base: "100%", sm: "", lg: "80vh", xl: "110vh" }}
        position="relative"
        justifyContent="space-between"
      >
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
            mt={{ base: 32, lg: 8 }}
            gridTemplateColumns={{ md: "1fr 1fr", lg: "1fr" }}
          >
            <Box display={variant}>
              <Box position="absolute">
                <Image
                  maxW={{ md: "0", lg: "400px", xl: "550px" }}
                  src="/img/gt-aion.png"
                />
              </Box>
              <Box
                position="absolute"
                top={{ lg: "260px", xl: "350px" }}
                left={{ lg: "200px", xl: "300px" }}
              >
                {boxImg == "xl" ? (
                  <Image
                    src="/img/interfaces.png"
                    maxW={{ md: "0", lg: "400px", xl: "550px" }}
                  />
                ) : (
                  <Image
                    maxW={{ md: "0", lg: "400px", xl: "700px" }}
                    src="/img/interfaces.png"
                  />
                )}
              </Box>
            </Box>
          </Grid>
        </Box>

        <Box
          h={{ md: "200px", lg: "300px", xl: "450px" }}
          w={{ md: "200px", lg: "300px", xl: "450px" }}
          borderRadius="100%"
          border="1px solid #77dd77"
          bottom={{ md: "100px", lg: "auto" }}
          backgroundImage={`url(${avatarUrl})`}
          backgroundRepeat="no-repeat"
          backgroundSize="cover"
          display={{ base: "none", md: "flex" }}
          flexDirection="column"
          justifyContent="flex-end"
          alignItems="center"
        >
          <Button
            as="a"
            colorScheme="green"
            href={repoLink}
            target="_blank"
            leftIcon={<AiFillGithub />}
            size={"lg"}
            rounded="10px"
          >
            Open in Github
          </Button>
        </Box>
      </Flex>
      <Embla>
        <EmblaContainer>
          <EmblaSlide size="100%">
            <Image src="/img/interfaces.png" />
          </EmblaSlide>
          <EmblaSlide size="100%">
            <Image src="/img/gt-aion.png" />
          </EmblaSlide>
        </EmblaContainer>
      </Embla>
    </>
  );
}
