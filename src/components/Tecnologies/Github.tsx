import { Flex } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

export default function Github() {
  const colourTheme = {
    level0: "#e0f3e5",
    level1: "#77dd77",
    level2: "#208f3c",
    level3: "#136d2d",
    level4: "#011d07",
  };
  return (
    <Flex>
      <GitHubCalendar
        username="NiceColors"
        blockSize={15}
        blockMargin={5}
        fontSize={16}
        theme={colourTheme}
      />
    </Flex>
  );
}
