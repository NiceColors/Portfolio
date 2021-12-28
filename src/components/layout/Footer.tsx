import { Flex, Link, Text, Button, Image } from "@chakra-ui/react";
import ReactTypingEffect from "react-typing-effect";

const Footer = () => {
  const repoLink = "https://github.com/NiceColors";

  return (
    <Flex
      as="footer"
      width="full"
      align="center"
    >
      <Text>
        {new Date().getFullYear()} -{" "}
        <Link href={repoLink} isExternal>
          <ReactTypingEffect
            text={["Desenvolvido por Victor Batista", ""]}
            speed={100}
            eraseDelay={1000}
            eraseSpeed={50}
          />
        </Link>
      </Text>
      
    </Flex>
  );
};

export default Footer;
