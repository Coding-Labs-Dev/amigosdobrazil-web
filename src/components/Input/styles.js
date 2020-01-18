import styled, { css } from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  background: linear-gradient(
    135deg,
    rgba(200, 199, 249, 0.4) 0%,
    rgba(251, 199, 212, 0.4) 100%
  );
  border-radius: 16px;
  padding: 12px 25px;
  height: 64px;
  width: 100%;
  margin: 24px 0;
  cursor: text;
  color: #000;

  ${props =>
    props.textArea &&
    css`
      height: 128px;
      align-items: flex-start;
    `}

  input,
  textarea {
    margin-left: 16px;
    height: 100%;
    width: 100%;
    border: none;
    outline: none;
    appearance: none;
    background: none;
    font-family: Montserrat, sans-serif;
    font-size: 1rem;
    font-weight: 400;
    color: #000;
    letter-spacing: 0.05rem;
    line-height: 1.5rem;
  }

  textarea {
    padding: 0;
  }
`;
