const data = {
  documentTypes: [
    {
      _id: '5e986ce27a141e6a5ca5f2ee',
      name: 'depth_0',
      parentDocumentType: null,
      descendants: [
        {
          documentType: {
            _id: '5e986cfb7a141e6a5ca5f2ef',
            name: 'depth_11',
            parentDocumentType: '5e986ce27a141e6a5ca5f2ee',
            descendants: [],
          },
        },
        {
          documentType: {
            _id: '5e986d007a141e6a5ca5f2f0',
            name: 'depth12_with_child',
            parentDocumentType: '5e986ce27a141e6a5ca5f2ee',
            descendants: [
              {
                documentType: {
                  _id: '5e986d097a141e6a5ca5f2f1',
                  name: 'depth_2',
                  parentDocumentType: '5e986d007a141e6a5ca5f2f0',
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
      parentDocumentType: null,
      descendants: [],
    },
    {
      _id: '5e989eee707dfc01d6ce173f',
      name: 'depth0_1_no child',
      parentDocumentType: null,
      descendants: [],
    },
  ],
};

// eslint-disable-next-line import/prefer-default-export
export { data };
