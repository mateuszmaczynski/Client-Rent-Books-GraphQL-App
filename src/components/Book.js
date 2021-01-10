import React from "react";
import { Flex, Heading, Image } from "@chakra-ui/react";

export default function Book({ book }) {
  const { author, cover, title } = book;
  return (
    <Flex
      w="100%"
      mt="5"
      bg="gray.50"
      border="1px"
      borderRadius="md"
      borderColor="gray.200"
      overflow="hidden"
    >
      <Image boxSize="100px" objectFit="cover" src={cover.url} alt={title} />
      <Flex direction="column" mx="2" justify="center">
        <Heading as="h3" size="xs" color="gray.700">
          {title}
        </Heading>
        <Heading as="h4" size="xs" color="gray.500" my="1">
          {author.name}
        </Heading>
      </Flex>
    </Flex>
  )
};