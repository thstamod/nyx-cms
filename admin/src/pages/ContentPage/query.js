import gql from 'graphql-tag';

export default gql`
  query dt {
    documentTypes: getDocunemtTypes {
      _id
      name
      descendants {
        documentType {
          name
          _id
        }
      }
    }
  }
`;
