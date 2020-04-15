const data = {
  documentTypes: [
    {
      name: 'Home',
      descendants: null,
    },
    {
      name: 'About',
      descendants: null,
    },
    {
      name: 'About2',
      descendants: null,
    },
    {
      name: 'About3',
      descendants: null,
    },
    {
      name: 'Test',
      descendants: null,
    },
    {
      name: 'Test',
      descendants: [
        {
          documentType: null,
        },
        {
          documentType: null,
        },
      ],
    },
    {
      name: 'Test',
      descendants: [
        {
          documentType: null,
        },
        {
          documentType: null,
        },
      ],
    },
    {
      name: 'Test',
      descendants: [
        {
          documentType: null,
        },
        {
          documentType: null,
        },
      ],
    },
    {
      name: 'Test',
      descendants: [
        {
          documentType: {
            _id: '5e765ba31427b934d26c920d',
            name: 'Home',
            descendants: null,
          },
        },
        {
          documentType: {
            _id: '5e765bca1427b934d26c920e',
            name: 'About',
            descendants: null,
          },
        },
      ],
    },
    {
      name: 'Test',
      descendants: [
        {
          documentType: {
            _id: '5e765ba31427b934d26c920d',
            name: 'Home',
            descendants: null,
          },
        },
        {
          documentType: {
            _id: '5e765bca1427b934d26c920e',
            name: 'About',
            descendants: null,
          },
        },
      ],
    },
    {
      name: 'Test',
      descendants: [
        {
          documentType: {
            _id: '5e765ba31427b934d26c920d',
            name: 'Home',
            descendants: null,
          },
        },
        {
          documentType: {
            _id: '5e765bca1427b934d26c920e',
            name: 'About',
            descendants: null,
          },
        },
      ],
    },
    {
      name: 'depth1',
      descendants: null,
    },
    {
      name: 'depth2',
      descendants: [
        {
          documentType: {
            _id: '5e91f67b575ff41f07d791b3',
            name: 'depth1',
            descendants: null,
          },
        },
      ],
    },
    {
      name: 'depth3',
      descendants: [
        {
          documentType: {
            _id: '5e91f6cd575ff41f07d791b4',
            name: 'depth2',
            descendants: [
              {
                documentType: {
                  _id: '5e91f67b575ff41f07d791b3',
                  name: 'depth1',
                  descendants: null,
                },
              },
            ],
          },
        },
      ],
    },
    {
      name: 'depth4',
      descendants: [
        {
          documentType: {
            _id: '5e91f6e0575ff41f07d791b5',
            name: 'depth3',
            descendants: [
              {
                documentType: {
                  _id: '5e91f6cd575ff41f07d791b4',
                  name: 'depth2',
                  descendants: [
                    {
                      documentType: {
                        _id: '5e91f67b575ff41f07d791b3',
                        name: 'depth1',
                        descendants: null,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },

        {
          documentType: {
            _id: '5e91f6e0575ff41f07d791b5',
            name: 'depth31',
            descendants: [
              {
                documentType: {
                  _id: '5e91f6cd575ff41f07d791b4',
                  name: 'depth32',
                },
              },
            ],
          },
        },
      ],
    },
  ],
};

// eslint-disable-next-line import/prefer-default-export
export { data };
