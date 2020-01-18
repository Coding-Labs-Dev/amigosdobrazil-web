import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Spacer = styled.div`
  height: ${props => `${props.margin}px`};
`;

export const Container = styled.div`
  transition: all 1s ease-in-out;
  cursor: pointer;
`;

export const Video = styled.div`
  width: 370px;
  height: 660px;
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);
  border-radius: 32px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  background-image: ${props => `url(${props.src})`};
`;

Video.propTypes = {
  src: PropTypes.string.isRequired,
};
