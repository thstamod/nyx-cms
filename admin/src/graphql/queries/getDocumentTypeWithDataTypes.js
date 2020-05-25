import gql from 'graphql-tag';

export default gql`
  query getDocumentTypeWithDataTypes($_id: String!) {
    documentType(_id: $_id) {
      _id
      name
      inheritFrom
      parentDocumentType
      privileges
      descendants {
        documentType {
          _id
          name
        }
      }
      creator {
        _id
        name
        authorization
      }
      createdAt
      updatedAt
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
        compilationItemId
      }
      __typename
    }
  }
`;
