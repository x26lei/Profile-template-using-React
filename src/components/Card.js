import { Box, Link, Heading, HStack, Image, Text, VStack } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import React from "react";

const Card = ({ title, description, imageSrc }) => {
  return (
    <Box bg="white" borderRadius="lg" height="100%" display="flex" flexDirection="column">
      <Image src={imageSrc} alt={title} borderRadius="lg" objectFit="cover" />
      <VStack align="start" flex="1" p={4} spacing={4} justifyContent="space-between" height="100%">
        <VStack align="start" spacing={2}>
          <Heading color="black" fontSize="sm"> {title} </Heading>
          <Text color="gray" fontSize="xs"> {description} </Text>
        </VStack>
        <Link color="#1b76d1" href="#" fontSize="xs" alignSelf="flex-start">
          See more <FontAwesomeIcon icon={faArrowRight} size="1x" color="#1b76d1"/>
        </Link>
      </VStack>
    </Box>
  );
};


export default Card;
