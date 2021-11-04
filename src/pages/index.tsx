import { Box, Image } from "@chakra-ui/react";
// import Hero from "../components/Hero";
import dynamic from "next/dynamic";

import {
  GetServerSideProps,
  InferGetServerSidePropsType,
  InferGetStaticPropsType,
} from "next";

const Hero = dynamic(() => import("../components/Hero"), {
  loading: () => <p>...</p>,
});

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
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  const data = await fetch("https://api.github.com/users/NiceColors").then(
    (res) => res.json()
  );

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      dados: data,
    },
  };
};

export default Home;
