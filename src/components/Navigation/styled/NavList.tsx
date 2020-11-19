import styled from 'styled-components';

const NavList = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 20px 0;
  display: flex;
  align-items: center;
  > * {
    :not(:last-child) {
      margin-right: 20px;
    }
  }
`;
export default NavList;
