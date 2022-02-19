import { Box, Flex, SkeletonCircle, Skeleton, SkeletonText } from "@chakra-ui/react";
import React from "react";

export default function index() {
  return (
    <div>
      <Box>
        <Flex w="100%" justifyContent="space-between">
          <Box ml={10} transform="translateX(-10%)">
            <SkeletonCircle size="200px" />
            <Skeleton mt={8} w="300px" h="20px" />
            <Skeleton mt={4} w="500px" h="20px" />

            <Skeleton mt={4} w="100px" h="20px" />
          </Box>
          <Box transform="translateY(60%)">
            <Skeleton w="300px" h="10px" />
            <Skeleton mt={6} w="300px" h="10px" />
            <Skeleton mt={4} w="300px" h="10px" />
            <Flex mt={4}>
              <Skeleton w="30px" h="30px" />
              <Skeleton ml={4} w="30px" h="30px" />
              <Skeleton ml={4} w="30px" h="30px" />
            </Flex>
          </Box>
        </Flex>
        <SkeletonText mt="100px" noOfLines={6} spacing="4" maxW="90%" />
        <Skeleton mt="90px" w="300px" h="20px" />
        <SkeletonText mt={4} noOfLines={2} spacing="4" maxW="90%" />
        <Skeleton mt="50px" w="300px" h="20px" />
        <SkeletonText mt={4} noOfLines={2} spacing="4" maxW="90%" />
        <Skeleton mt="50px" w="300px" h="20px" />
        <SkeletonText mt={4} noOfLines={2} spacing="4" maxW="90%" />
        <Skeleton mt="50px" w="300px" h="20px" />
        <SkeletonText mt={4} noOfLines={2} spacing="4" maxW="90%" />
        <Skeleton mt="50px" w="300px" h="20px" />
        <SkeletonText mt={4} noOfLines={2} spacing="4" maxW="90%" />
      </Box>
    </div>
  );
}
