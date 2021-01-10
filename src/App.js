import React from "react";
import { Routes, Route, Link as RouterLink } from "react-router-dom";
import AuthorsPage from "./pages/AuthorsPage";
import BooksPage from "./pages/BooksPage";
import UserPage from "./pages/UserPage";
import { Flex, Box, Divider, Heading, Link } from "@chakra-ui/react"

export default function App() {
  return (
    <Flex direction="column" align="center" width="75%" mx="auto">
      <Flex align="center" justify="space-between" w="100%" mx="5">
        <Link to="/" as={RouterLink}>
          <Heading as="h1">Personal Library</Heading>
        </Link>
        <Box d="flex">
          <Link to="/" as={RouterLink}>
            <h1>Authors</h1>
          </Link>
          <Divider orientation="vertical" />
          <Link to="/users" as={RouterLink}>
            <h1>Users</h1>
          </Link>
          <Divider orientation="vertical" />
          <Link to="/books" as={RouterLink}>
            <h1>Books</h1>
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
