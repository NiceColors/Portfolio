import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./NavBar/";
import Hero from "../Hero";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box margin="0 auto" maxWidth={1520} transition="0.5s ease-out">
      <Box margin="8">
        <Header />
        <Box as="main" minH="80vh">
          {children}
        </Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Layout;
