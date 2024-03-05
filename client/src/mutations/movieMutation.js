import { gql } from '@apollo/client';

export const ADD_MOVIE = gql`
  mutation addMovie($title: String!, $plot: String!, $type: String!) {
    addMovie(title: $title, plot: $plot, type: $type) {
      title
      plot
      type
    }
  }
`;

export const DELETE_MOVIE = gql`
  mutation deleteMovie($id: ID!) {
    deleteMovie(id: $id) {
      id
      title
      poster
      year
    }
  }
`;
