import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

import Footer from "./Footer";
import Header from "./NavBar/";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <>
      <Header />
      <Box
        margin="0 auto"
        mt={24}
        maxWidth={1580}
        transition="0.5s ease-out"
      >
        <Box margin="8">
          <Box as="main" minH="80vh">
            {children}
          </Box>
        </Box>
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
