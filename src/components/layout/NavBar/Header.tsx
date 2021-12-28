import { Box, Grid, Flex, Heading } from "@chakra-ui/react";
import Link from "next/link";

import ThemeToggle from "../ThemeToggle";
import Title from "./Title";
import LinkPort from "./LinkPort";

const Header = () => {
  return (
    <Flex as="header"  display={{ base: `none`, md: `flex` }} width="full" align="center">
      <Heading as="h1" size="lg" position="relative">
        <Link href="/">
          <Title name={"Portfolio"} />
        </Link>
      </Heading>

      <Grid ml="auto" templateColumns="repeat(3, auto)" gap="6">
        <LinkPort href={"/"} name="About me" />
        <LinkPort href={"/"} name="Projects" />
        <LinkPort href={"/"} name="Tecnologies" />
      </Grid>


      <Box ml="12">
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
