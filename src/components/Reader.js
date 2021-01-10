import React from "react";
import { Flex, Text } from "@chakra-ui/react";

export default function Reader({ user }) {
  const {reader} = user;
  return (
    <Flex alignItems="center" direction="column" w="100%" mt="5">
      <Text size="xs">
        {reader.name}
      </Text>
    </Flex>
  )
}