import gql from 'graphql-tag';

export default gql`
  mutation updateDocumentType(
    $_id: String!
    $compilation: [InputDataType]
    $name: String
    $parentDocumentType: String
    $inheritFrom: String
    $privileges: String
    $descendants: [String]
  ) {
    updateDocumentType(
      _id: $_id
      name: $name
      parentDocumentType: $parentDocumentType
      inheritFrom: $inheritFrom
      privileges: $privileges
      descendants: $descendants
      compilation: $compilation
    ) {
      _id
      compilation {
        title
      }
    }
  }
`;
