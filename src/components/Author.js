import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react"

export default function Author({ author }) {
  const {name, photo} = author;
  return (
    <Flex
      direction="column"
      align="center"
      bg="gray.50"
      m="3"
      mw="200px"
      border="1px"
      borderRadius="md"
      borderColor="gray.200"
      overflow="hidden"
    >
      <Image boxSize="200px" objectFit="cover" src={photo.url} alt={name} />
      <Heading as="h2" size="md" color="gray.700" my="3">
        {name}
      </Heading>
    </Flex>
  );
}
