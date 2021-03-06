import React from "react";
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import AuthorsPage from "./pages/AuthorsPage";
import BooksPage from "./pages/BooksPage";
import UsersPage from "./pages/UsersPage";
import ReaderPage from "./pages/ReaderPage";
import { Flex, Box, Divider, Heading, Link, Text } from "@chakra-ui/react"

export default function App() {
  return (
    <Flex
      direction="column"
      align="center"
      width={["100%", "80%", "60%"]}
      mx="auto">
      <Flex
        direction={["column", null, "row"]}
        align="center"
        justify="space-between"
        w="100%"
        mx="5"
      >
        <Link to="/" as={RouterLink}>
          <Heading as="h1">Personal Library</Heading>
        </Link>
        <Box d="flex" height="30px">
          <Link to="/" as={RouterLink}>
            <Text fontSize="xl" mx="4">Books</Text>
          </Link>
          <Divider orientation="vertical" />
          <Link to="/authors" as={RouterLink}>
            <Text fontSize="xl" mx="4">Authors</Text>
          </Link>
          <Divider orientation="vertical" />
          <Link to="/users" as={RouterLink}>
            <Text fontSize="xl" mx="4">Users</Text>
          </Link>
          <Link to="/reader" as={RouterLink}>
            <Text fontSize="xl" mx="4">Readers</Text>
          </Link>
        </Box>
      </Flex>
      <Routes>
        <Route path="/" element={<BooksPage />} />
        <Route path="authors/" element={<AuthorsPage />} />
        <Route path="users/" element={<UsersPage />} />
        <Route path="reader/" element={<ReaderPage />} />
      </Routes>
    </Flex>
  );
}
