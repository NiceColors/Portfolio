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
} from "@chakra-ui/react";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import Embla from "components/Slider/embla";
import EmblaContainer from "components/Slider/emblaContainer";
import EmblaSlide from "components/Slider/emblaSlide";

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
      <Grid
        mt="24"
        minH={{ base: "100%", sm: "", lg: "80vh", xl: "110vh" }}
        templateColumns={{ md: "1fr 1fr" }}
        position="relative"
        overflow="none"
        
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
          <Grid mt="32" gridTemplateColumns={{ md: "1fr 1fr", lg: "1fr" }}>
            <Box display={variant}>
              <Box position="absolute">
                <Image
                  maxW={{ md: "0", lg: "400px", xl: "700px" }}
                  src="/img/gt-aion.png"
                />
              </Box>
              <Box
                position="absolute"
                top={{ lg: "400px", xl: "500px" }}
                left={{ lg: "200px", xl: "400px" }}
              >
                {boxImg == "xl" ? (
                  // <motion.div
                  //   style={{
                  //     position: "absolute",
                  //     left: framerLeft,
                  //     top: framerTop,
                  //     width: framerScale,
                  //     opacity: framerOpacity,
                  //   }}
                  //   animate="visible"
                  // >
                    <Image
                      src="/img/interfaces.png"
                      maxW={{ md: "0", lg: "400px", xl: "700px" }}
                      // style={{
                      //   width: framerScale,
                      // }}
                    />
                  // </motion.div>
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

        {/* <motion.div
          style={{
            cursor: "grab",
          }}
          drag
          dragConstraints={{
            top: -225,
            right: 20,
            bottom: 165,
            left: -525,
          }}
          dragElastic={0.4}
          dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
          whileTap={{ cursor: "grabbing" }}
        > */}
          <Box
            h={{ base: "0", md: "200px", lg: "400px", xl: "450px" }}
            w={{ base: "0", md: "200px", lg: "400px", xl: "450px" }}
            borderRadius="50%"
            border="1px solid #77dd77"
            position="absolute"
            bottom={{ md: "100px", lg: "auto" }}
            backgroundImage={`url(${avatarUrl})`}
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            right={{ md: "70" }}
          >
            <Button
              as="a"
              position="absolute"
              bottom={{ base: "-200px", sm: "-200px", md: "-2" }}
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
        {/* </motion.div> */}
      </Grid>
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
