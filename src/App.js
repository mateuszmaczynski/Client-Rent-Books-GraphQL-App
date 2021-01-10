import React from "react";
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import AuthorsPage from "./pages/AuthorsPage";
import BooksPage from "./pages/BooksPage";
import UserPage from "./pages/UserPage";
import { Flex, Box, Divider, Heading, Link, Text } from "@chakra-ui/react"

export default function App() {
  return (
    <Flex direction="column" align="center" width="75%" mx="auto">
      <Flex align="center" justify="space-between" w="100%" mx="5">
        <Link to="/" as={RouterLink}>
          <Heading as="h1">Personal Library</Heading>
        </Link>
        <Box d="flex" height="30px">
          <Link to="/" as={RouterLink}>
            <Text fontSize="xl" mx="4">Authors</Text>
          </Link>
          <Divider orientation="vertical" />
          <Link to="/users" as={RouterLink}>
            <Text fontSize="xl" mx="4">Users</Text>
          </Link>
          <Divider orientation="vertical" />
          <Link to="/books" as={RouterLink}>
            <Text fontSize="xl" mx="4">Books</Text>
          </Link>
        </Box>
      </Flex>
      <Routes>
        <Route path="/" element={<AuthorsPage />} />
        <Route path="/users" element={<UserPage />} />
        <Route path="/books" element={<BooksPage />} />
      </Routes>
    </Flex>
  );
}
