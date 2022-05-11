import React, { useState } from "react";
import { Box } from "@chakra-ui/react";
import Hero from "../components/Hero";
import AboutMe from "components/AboutMe";

// interface dadosProps
//   extends InferGetServerSidePropsType<typeof getServerSideProps> {
//   dados: {
//     nome: string;
//     avatar_url: string;
//   };
// }

const Home = () => {
  return (
    <Box mb={8} w="full">
      <Hero
        avatarUrl={
          "https://media-exp1.licdn.com/dms/image/C4D03AQEXt2T6DwSNMw/profile-displayphoto-shrink_800_800/0/1650915947324?e=1657756800&v=beta&t=TDNJddViDV-n-diyNfTSJNseDe0vtnXBgwS5w-uxcXk"
        }
      />
      <AboutMe />
    </Box>
  );
};
//
// export const getServerSideProps: GetServerSideProps = async () => {
//   const data = await fetch("").then(
//     (res) => res.json()
//   );
//   return {
//     props: {
//       dados: data,
//     },
//   };
// };

export default Home;
