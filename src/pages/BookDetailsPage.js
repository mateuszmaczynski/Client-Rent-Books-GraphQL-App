import React from "react";
import { gql, useQuery } from "@apollo/client";
import { Box } from "@chakra-ui/react";
import { useParams } from "react-router";
import BookDetails from "../components/BookDetails";

const GET_BOOK_QUERY = gql`
  query GetBook($bookId: ID!) {
    book(id: $bookId) {
      id
      title
      description
      cover {
        url
      }
      author {
        id
        name
      }
    }
  }
`;

export default function BookDetailsPage() {
  const { bookId } = useParams();
  const { loading, error, data } = useQuery(GET_BOOK_QUERY, {
    variables: { bookId }
  });
  if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Could not load book "{bookId}"</p>;
  }
  const { book } = data;
  return (
    <Box>
      <BookDetails book={book} />
    </Box>
  );
}
