import { Box, Image } from "@chakra-ui/react";
import Hero from "../components/Hero";
// import dynamic from "next/dynamic";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import AboutMe from "components/AboutMe";

interface dadosProps {
  dados: {
    nome: string;
    avatar_url: string;
  };
}

const Home = ({
  dados,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <Box mb={8} w="full">
      <Hero avatarUrl={dados.avatar_url} />
      <AboutMe />
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const data = await fetch("https://api.github.com/users/NiceColors").then(
    (res) => res.json()
  );
  return {
    props: {
      dados: data,
    },
  };
};

export default Home;
