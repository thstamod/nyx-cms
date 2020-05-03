import styled from 'styled-components';

export const Item = styled('div')`
  font-family: ${(props) => props.theme.fonts[1]};
  width: 100%;
  color: ${(props) => props.theme.colors.powderWhite};
`;

export const WrapperSubmenu = styled.div`
  max-height: ${(props) => (props.open ? '100%' : '0')};
  opacity: ${(props) => (props.open ? '1' : '0')};
  overflow: hidden;
  transition: all 0.3s ease-out;
  padding-left: 10px;
`;
