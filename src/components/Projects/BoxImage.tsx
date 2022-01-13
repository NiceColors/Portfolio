import {
  Box,
  useColorModeValue,
  Image,
  Text,
  Heading,
  Badge,
  useBreakpointValue,
} from "@chakra-ui/react";
import { motion, useAnimation } from "framer-motion";
import React, { useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface BoxImageProps {
  imageUrl: string;
  title: string;
  description: string;
  link: string;
  direction: string;
  firstBadge: string;
  secondBadge: string;
}

export default function BoxImage({
  imageUrl,
  title,
  description,
  link,
  direction,
  ...props
}: BoxImageProps) {
  const variant = useBreakpointValue({ xl: "xl", lg: "lg" });

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <>
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        transition={{ duration: 0.5 }}
        variants={{
          visible: { x: 0, opacity: 1, scale: 1 },
          hidden: { x: direction == "left" ? "-50vw" : "50vw", opacity: 0, scale: 0.5 },
        }}
      >
        {variant == "xl" ? (
          <Box position="relative">
            <Image
              position="relative"
              w={{ lg: "700px", xl: "clamp(700px, 60vw, 900px)" }}
              src={imageUrl}
              left={direction == "left" ? "-150px" : ""}
            />
            <Box
              position="absolute"
              minH="150px"
              w="260px"
              boxShadow="lg"
              bgColor={useColorModeValue("white", "gray.800")}
              right={direction == "right" ? "-80px" : ""}
              left={direction == "left" ? "-250px" : ""}
              top="30%"
              border="1px solid #cc22"
              borderRadius="7px"
              p={5}
            >
              <Heading fontSize="1.1rem">
                <a>{title}</a>
              </Heading>
              <Badge colorScheme="red" mr="2">
                {props.firstBadge}
              </Badge>
              {props.secondBadge ? "+" : ""}
              <Badge colorScheme="blue" ml="2">
                {props.secondBadge}
              </Badge>
              <Text fontSize="0.8rem">{description}</Text>
            </Box>
          </Box>
        ) : (
          <Box>
            <Image position="relative" src={imageUrl} />
            <Box
              minH="120px"
              position="relative"
              bottom="80px"
              w="87%"
              margin="0 auto"
              boxShadow="lg"
              bgColor={useColorModeValue("white", "gray.800")}
              border="1px solid #77dd77"
              borderRadius="7px"
              p={5}
            >
              <Heading fontSize="1.1rem">
                <a>{title}</a>
              </Heading>
              <Badge colorScheme="red" mr="2">
                {props.firstBadge}
              </Badge>
              {props.secondBadge ? "+" : ""}
              <Badge colorScheme="blue" ml="2">
                {props.secondBadge}
              </Badge>
              <Text fontSize="0.8rem">{description}</Text>
            </Box>
          </Box>
        )}
      </motion.div>
    </>
  );
}
