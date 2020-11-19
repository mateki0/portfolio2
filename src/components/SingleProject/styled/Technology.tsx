import styled from 'styled-components';

const Technology = styled.li`
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 16px;
  margin-top: 10px;

  svg {
    width: 32px;
    height: 32px;
    fill: #fff;

    transition: all 0.3s;
    &:hover {
      cursor: pointer;
      fill: rgb(24, 236, 141);
    }
  }
  @media only screen and (min-width: 1024px) {
    font-size: 20px;
  }
`;

export default Technology;
