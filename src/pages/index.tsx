import {
  Box,
  Button,
} from "@chakra-ui/react";
import Hero from "../components/Hero";
// import dynamic from "next/dynamic";

import { GetServerSideProps, InferGetServerSidePropsType } from "next";
import AboutMe from "components/AboutMe";
import SkeletonAboutMe from "components/SkeletonAboutMe";
import SkeletonHero from "components/SkeletonHero";

import { useEffect, useState } from "react";
import { ArrowLeftIcon, ArrowRightIcon } from "@chakra-ui/icons";

interface dadosProps extends InferGetServerSidePropsType<typeof getServerSideProps>{
  dados: {
    nome: string;
    avatar_url: string;
  };
}

const Home = ({
  dados,
}: dadosProps) => {
  const [isLoadedAboutMe, setLoadedAboutMe] = useState(true);
  const [isLoadedHero, setLoadedHero] = useState(true);

  const [passOut, setPassOut] = useState(true);

  function handlePage() {
    setPassOut(!passOut);
  }

  if (!passOut) {
    setTimeout(() => {
      setLoadedAboutMe(false);
    }, 2000);
  }
  if (passOut) {
    console.log("ta caindo aqui");
    setTimeout(() => {
      setLoadedHero(false);
    }, 2000);
  }

  return (
    <Box mb={8} w="full">
      {passOut ? (
        isLoadedHero ? (
          <SkeletonHero />
        ) : (
          <Hero avatarUrl={dados.avatar_url} />
        )
      ) : isLoadedAboutMe ? (
        <SkeletonAboutMe />
      ) : (
        <AboutMe />
      )}
      <Button
        rightIcon={passOut ? <ArrowRightIcon /> : <ArrowLeftIcon />}
        bgColor="transparent"
        position="fixed"
        top="40%"
        onClick={handlePage}
        right="100px"
      >
        {passOut ? "Resume" : "Back"}
      </Button>
    </Box>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
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
