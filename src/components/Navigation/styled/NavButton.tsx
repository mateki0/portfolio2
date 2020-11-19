import styled from 'styled-components';

const NavButton = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 20px;
  font-family: 'Goldman';
  font-weight: 600;
  text-transform: uppercase;
  transition: all 0.3s;

  &:hover {
    cursor: pointer;
    color: rgb(24, 236, 141);
  }
  @media only screen and (max-width: 480px) {
    font-size: 14px;
  }
`;
export default NavButton;
