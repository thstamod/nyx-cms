import gql from 'graphql-tag';

export default gql`
  {
    documentTypes {
      name
      descendants {
        ...dtRecursive
      }
    }
  }

  fragment dtRecursive on descendants {
    documentType {
      ...documentTypeFields
      descendants {
        documentType {
          ...documentTypeFields
          descendants {
            documentType {
              ...documentTypeFields
              descendants {
                documentType {
                  ...documentTypeFields
                  descendants {
                    documentType {
                      ...documentTypeFields
                      descendants {
                        documentType {
                          ...documentTypeFields
                          descendants {
                            documentType {
                              ...documentTypeFields
                              descendants {
                                documentType {
                                  ...documentTypeFields
                                  descendants {
                                    documentType {
                                      ...documentTypeFields
                                      descendants {
                                        documentType {
                                          ...documentTypeFields
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }

  fragment documentTypeFields on DocumentType {
    _id
    name
  }
`;
