import gql from 'graphql-tag';

export default gql`
  query getDocumentTypeWithDataTypes($_id: String!) {
    documentType(_id: $_id) {
      _id
      name
      parentDocumentType
      compilation {
        dataType {
          type
          name
          _id
        }
        title
        value
        options
        description
      }
      __typename
    }
  }
`;
