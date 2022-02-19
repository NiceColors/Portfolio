import { Skeleton, Box, Flex, SkeletonCircle } from "@chakra-ui/react";
import React from "react";

export default function index() {
  return (
    <>
      <Flex justifyContent="space-between">
        <Box transform="translateY(10%)">
          <Skeleton w="100px" h="25px" />
          <Skeleton w="700px" mt={4} h="90px" />
          <Skeleton w="540px" mt={4} h="25px" />
          <Skeleton w="550px" mt={28} h="300px" />
          <Skeleton
            w="550px"
            mt={4}
            h="300px"
            transform="translateY(-60%) translateX(50%)"
          />
        </Box>
        <Box transform="translateY(10%) translateX(-15%)">
          <SkeletonCircle
            size="400px"
            position="relative"
          />
          <Skeleton
            startColor="green.400"
            endColor="green.800"
            w="200px"
            h="40px"
            transform="translate(50%, -70%)"
          />
        </Box>
      </Flex>
    </>
  );
}
