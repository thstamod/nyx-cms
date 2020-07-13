import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/react-testing';
import { ContentPageProvider } from '../../../context/ContentPageContext';
import MainContent from '../MainContent';
import { panel } from '../../../../__mocks__/_pages/_contentPage';

afterEach(cleanup);

test('MainContent renders', () => {
  const { asFragment } = render(
    <ContentPageProvider>
      <MockedProvider mocks={[]} addTypename={false}>
        <MainContent data={panel.data} />
      </MockedProvider>
    </ContentPageProvider>
  );

  expect(asFragment()).toMatchSnapshot();
});
