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
        name: 'depth0_no_child',
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
      name: 'depth0_no_child',
      parentDocumentType: null,
      compilation: [
        {
          dataType: {
            type: 'Text',
            name: 'text',
            _id: '5e7658d052a8500c640f3b91',
            __typename: 'DataType',
          },
          title: 'title2',
          value: { val: 'I am a Title2!!' },
          options: null,
          description: null,
          compilationItemId: 'ba4ce241-9bcd-4135-9edc-ddcef273b20f',
          __typename: 'compilation',
        },
        {
          dataType: {
            type: 'Text',
            name: 'text',
            _id: '5e7658d052a8500c640f3b91',
            __typename: 'DataType',
          },
          title: 'title2_1',
          value: { val: 'I am a Title2_1!!' },
          options: null,
          description: null,
          compilationItemId: '5fa907d1-be20-4605-801d-7094f266db29',
          __typename: 'compilation',
        },
      ],
      __typename: 'DocumentType',
    },
  },
};
