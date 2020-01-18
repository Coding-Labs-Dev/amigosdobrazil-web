import styled, { css } from 'styled-components';

export const Container = styled.div`
  width: 100%;
  padding: 192px 0 64px 0;
  display: flex;
  justify-content: center;
  align-items: center;

  .submit {
    display: flex;
    justify-content: flex-end;
  }
`;

export const Card = styled.div`
  width: 100%;
  max-width: ${props => `${props.maxWidth}px`};
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  padding-bottom: 32px;
  background: #fff;
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);
  border-radius: 32px;
  padding: 64px;
  padding-left: 204px;

  h5 {
    padding: 0 0 24px 0;
  }

  form {
    width: 100%;
  }

  ${props =>
    props.float &&
    css`
      position: absolute;
      top: -64px;
      padding-left: 64px;
      background: linear-gradient(135deg, #c8c7f9 0%, #fbc7d4 100%);
    `}
`;

export const Spacer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`;

export const Info = styled.div`
  p {
    font-size: 1rem;
    color: #000000;
  }

  ul {
    margin: 24px 0;
    li {
      padding: 24px 0;
      display: flex;
      justify-content: flex-start;
      align-items: flex-start;
      color: #000;
      p {
        display: block;
        margin-left: 24px;
        span {
          display: block;
        }
      }
    }
  }
`;
