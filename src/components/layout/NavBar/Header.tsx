import { Box, Grid, Flex, Heading, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "../ThemeToggle";
import Title from "./Title";
import LinkPort from "./LinkPort";
import { useViewportScroll } from "framer-motion";
import { useState } from "react";

const Header = () => {
  const { scrollYProgress } = useViewportScroll();

  const [isScroll, setScroll] = useState(false);

  scrollYProgress.onChange((progress) => {
    if (progress > 0.14) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  return (
    <Box
      zIndex={999999}
      display={{ base: "none", md: "flex" }}
      position="fixed"
      top="0px"
      h="8vh"
      className={isScroll ? "header-scroll" : "header-scroll-none"}
      backgroundColor={
        isScroll ? useColorModeValue("gray.100", "green.600") : ""
      }
      w="full"
      transition="all 0.7s ease-out"
    >
      <Flex as="header" w="full" maxW={1580} m="0 auto" align="center" py={8}>
        <Heading as="span" position="relative">
          <Link href="/">
            <Title name={"Portfolio"} />
          </Link>
        </Heading>

        <Grid ml="auto" templateColumns="repeat(3, auto)" gap="6">
          <LinkPort href={"/"} name="About me" />
          <LinkPort href={"projects"} name="Projects" />
          <LinkPort href={"tecnologies"} name="Tecnologies" />
        </Grid>

        <Box ml="12">
          <ThemeToggle />
        </Box>
      </Flex>
    </Box>
  );
};

export default Header;
