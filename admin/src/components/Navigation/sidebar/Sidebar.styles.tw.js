import styled from 'styled-components';

export const SidebarWrapper = styled.aside.attrs({
  className: 'flex-grow-0',
})`
  padding: 15px 10px;
  background: ${(props) => props.theme.colors.darkGrey};
  color: ${(props) => props.theme.colors.powderWhite};
  height: 100%;
  overflow: hidden;
`;

export const ListViewWrapper = styled.div.attrs({})`
  height: 100%;
  overflow-y: auto;
  scrollbar-color: red green;
  scrollbar-width: thin;
`;
