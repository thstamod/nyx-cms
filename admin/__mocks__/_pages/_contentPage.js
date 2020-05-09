export const sidebar = {
  data: {
    documentTypes: [
      {
        _id: '5e986ce27a141e6a5ca5f2ee',
        name: 'depth_0',
        __typename: 'DocumentType',
        descendants: [
          {
            documentType: {
              _id: '5e986cfb7a141e6a5ca5f2ef',
              name: 'depth_11',
              __typename: 'DocumentType',
              descendants: [],
            },
          },
          {
            documentType: {
              _id: '5e986d007a141e6a5ca5f2f0',
              name: 'depth12_with_child',
              __typename: 'DocumentType',
              descendants: [
                {
                  documentType: {
                    _id: '5e986d097a141e6a5ca5f2f1',
                    name: 'depth_2',
                    __typename: 'DocumentType',
                    descendants: [],
                  },
                },
              ],
            },
          },
        ],
      },
      {
        _id: '5e98743e707dfc01d6ce173e',
        name: 'depth0_no child',
        __typename: 'DocumentType',
        descendants: [],
      },
      {
        _id: '5e989eee707dfc01d6ce173f',
        name: 'depth0_1_no child',
        __typename: 'DocumentType',
        descendants: [],
      },
    ],
  },
};
export const panel = {
  data: {
    documentType: {
      _id: '5e98743e707dfc01d6ce173e',
      name: 'depth0_no child',
      parentDocumentType: null,
      compilation: [
        {
          dataType: {
            type: 'Text',
            name: 'text',
          },
          value: {
            val: 'I am a Title!!',
          },
          title: 'title',
          options: null,
        },
        {
          dataType: {
            type: 'TextArea',
            name: 'TextArea',
          },
          value: {
            val:
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
          },
          title: 'big text',
          options: null,
        },
      ],
      __typename: 'DocumentType',
    },
  },
};
