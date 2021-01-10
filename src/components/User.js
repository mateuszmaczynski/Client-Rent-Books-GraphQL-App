import React from "react";
import { Flex, Heading, Avatar } from "@chakra-ui/react";

export default function User({ user }) {
  const {avatar, name} = user;
  return (
    <Flex alignItems="center" direction="column" w="100%" mt="5">
      <Avatar
        size="xl"
        src={avatar.image.url}
        showBorder={true}
      />
      <Heading mx="4" color="gray.700">
        {name}
      </Heading>
    </Flex>
  )
}