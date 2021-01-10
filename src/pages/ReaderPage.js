import React from "react";
import { gql, useQuery } from "@apollo/client";
import {Box, Text} from "@chakra-ui/react";
import Reader from "../components/Reader";

const READER_QUERY = gql`
  query GetRandomBook {
    users {
      reader {
        name
      }
    }
  }
`;

export default function ReaderPage() {
  const { loading, error, data } = useQuery(READER_QUERY);
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load book...</p>;
  }

  const { users } = data;
  return (
    <Box bg="gray.50" mt="5">
      <Text fontSize="xl" as="em" color="tomato">
        The most active readers of this month are:
      </Text>
      <Box>
        {users.map(user => <Reader key={user.name} user={user} />)}
      </Box>
    </Box>
  );
}
