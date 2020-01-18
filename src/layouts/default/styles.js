import styled from 'styled-components';

export const Wrapper = styled.div`
  min-height: 100%;
  width: 100%;
`;

export const Footer = styled.footer`
  width: 100%;
  background: #2f3640;
  display: flex;
  justify-content: center;

  .content {
    width: 100%;
    max-width: 1170px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-template-rows: 1fr;
    justify-items: center;
    padding: 32px 0;
    color: #aaa69d;

    span {
      svg {
        margin-left: 24px;
      }
      &:first-of-type {
        justify-self: flex-start;
      }
      &:last-of-type {
        justify-self: flex-end;
      }
    }

    a {
      color: #fff;
      transition: opacity 0.2s;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }
`;
