import {
  Box,
  Heading,
  HStack,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import React from "react";
import Company from "./Company";
import Dots from "./Dots";
import Item from "./Item";

export default function index() {
  const text = "Work Experience";
  return (
    <>
      <Stack
        m="0 auto"
        bgColor="white"
        minH="150vh"
        maxW="50vw"
        position="relative"
        px={20}
        py={12}
      >
        <Heading
          align="center"
          fontSize="3.35rem"
          color="gray.600"
          fontWeight={300}
        >
          Victor{" "}
          <Text as="span" color="gray.700" fontWeight={600}>
            Batista
          </Text>
        </Heading>
        <Text
          as="i"
          color="gray.500"
          transform="translateY(-40%)"
          fontWeight={300}
          align="center"
        >
          Rio de Janeiro, Brasil
        </Text>
        <Item title="Work Experience">
          <Company
            title="Lorem Ipsum"
            date="October. 2021 - January. 2022"
            charge="Developer"
          />
          <UnorderedList>
            <Dots text="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"/>
            <Dots text="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"/>
            <Dots text="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"/>

          </UnorderedList>
        </Item>
        <Item title="Projects">
          <Company
            title="Lorem Ipsum"
            date="October. 2021 - January. 2022"
            charge="Developer"
          />
          <UnorderedList>
            <Dots text="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"/>
            <Dots text="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"/>
            <Dots text="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"/>
          </UnorderedList>
          <Company
            title="Lorem Ipsum"
            date="October. 2021 - January. 2022"
            charge="Developer"
          />
          <UnorderedList>
            <Dots text="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"/>
            <Dots text="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"/>
            <Dots text="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"/>
          </UnorderedList>
        </Item>
        <Item title="Education">
          <Company
            title="Lorem Ipsum"
            date="October. 2021 - January. 2022"
            type="RJ, Brasil"
            charge="Developer lorem ipsum"
          />
          <UnorderedList>
            <Dots text="Lorem Ipsum dolor sit amet, consectetur adipiscing elit"/>

          </UnorderedList>
        </Item>
        <Item title="Tecnologies and Tools">
        
        </Item>
      </Stack>
    </>
  );
}
