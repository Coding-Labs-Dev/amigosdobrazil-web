import styled from 'styled-components';
import { darken } from 'polished';

export const Button = styled.button`
  margin: 20px 0;
  height: 44px;
  padding: 0 25px;
  color: #fff;
  background: linear-gradient(135deg, #eea849 0%, #f2994a 100%);
  box-shadow: 3px 5px 8px 2px rgba(0, 0, 0, 0.1);
  font-weight: 500;
  border: 0;
  border-radius: 8px;
  transition: all 5s;

  font-family: Montserrat, sans-serif;
  color: #ffffff;
  letter-spacing: 0.04125rem;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    background: ${() =>
      `linear-gradient(135deg, ${darken(0.03, '#eea849')} 0%, ${darken(
        0.03,
        '#f2994a'
      )} 100%)`};
  }
`;
