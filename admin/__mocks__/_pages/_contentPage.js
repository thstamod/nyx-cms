const data = {
  documentTypes: [
    {
      _id: '5e765ba31427b934d26c920d',
      name: 'Home',
      descendants: null,
      __typename: 'DocumentType',
    },
    {
      _id: '5e765bca1427b934d26c920e',
      name: 'About',
      descendants: null,
      __typename: 'DocumentType',
    },
    {
      _id: '5e7b8a88bb9b7822b5a088b7',
      name: 'About2',
      descendants: null,
      __typename: 'DocumentType',
    },
    {
      _id: '5e7b8a9ebb9b7822b5a088b8',
      name: 'About3',
      descendants: null,
      __typename: 'DocumentType',
    },
    {
      _id: '5e7b8ba9bb9b7822b5a088b9',
      name: 'Test',
      descendants: null,
      __typename: 'DocumentType',
    },
    {
      _id: '5e7b8fb9529e583810ff85fb',
      name: 'Test',
      descendants: [
        {
          documentType: null,
          __typename: 'descendants',
        },
        {
          documentType: null,
          __typename: 'descendants',
        },
      ],
      __typename: 'DocumentType',
    },
    {
      _id: '5e7b8feb9f4b4e3916cc6a57',
      name: 'Test',
      descendants: [
        {
          documentType: null,
          __typename: 'descendants',
        },
        {
          documentType: null,
          __typename: 'descendants',
        },
      ],
      __typename: 'DocumentType',
    },
    {
      _id: '5e7b8fed9f4b4e3916cc6a58',
      name: 'Test',
      descendants: [
        {
          documentType: null,
          __typename: 'descendants',
        },
        {
          documentType: null,
          __typename: 'descendants',
        },
      ],
      __typename: 'DocumentType',
    },
    {
      _id: '5e7b903d8b93ca3979e56e94',
      name: 'Test',
      descendants: [
        {
          documentType: {
            name: 'Home',
            _id: '5e765ba31427b934d26c920d',
            __typename: 'DocumentType',
          },
          __typename: 'descendants',
        },
        {
          documentType: {
            name: 'About',
            _id: '5e765bca1427b934d26c920e',
            __typename: 'DocumentType',
          },
          __typename: 'descendants',
        },
      ],
      __typename: 'DocumentType',
    },
    {
      _id: '5e7b907e369cbc3a39a5599c',
      name: 'Test',
      descendants: [
        {
          documentType: {
            name: 'Home',
            _id: '5e765ba31427b934d26c920d',
            __typename: 'DocumentType',
          },
          __typename: 'descendants',
        },
        {
          documentType: {
            name: 'About',
            _id: '5e765bca1427b934d26c920e',
            __typename: 'DocumentType',
          },
          __typename: 'descendants',
        },
      ],
      __typename: 'DocumentType',
    },
    {
      _id: '5e7b915f369cbc3a39a5599d',
      name: 'Test',
      descendants: [
        {
          documentType: {
            name: 'Home',
            _id: '5e765ba31427b934d26c920d',
            __typename: 'DocumentType',
          },
          __typename: 'descendants',
        },
        {
          documentType: {
            name: 'About',
            _id: '5e765bca1427b934d26c920e',
            __typename: 'DocumentType',
          },
          __typename: 'descendants',
        },
      ],
      __typename: 'DocumentType',
    },
  ],
};

// eslint-disable-next-line import/prefer-default-export
export { data };
