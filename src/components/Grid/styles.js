import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1170px;
  display: flex;
  justify-content: space-between;
  align-items: ${props => props.alignItems};
  flex-wrap: wrap;
`;
