import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react"

export default function Author({ author }) {
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
      <Image size="200px" objectFit="coverFit" src={author.photo.url} alt={author.name} />
      <Heading as="h2" size="md" color="gray.700" my="3">
        {author.name}
      </Heading>
    </Flex>
  );
}
