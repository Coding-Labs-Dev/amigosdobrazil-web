import styled from 'styled-components';
import PropTypes from 'prop-types';

export const Container = styled.div`
  position: relative;
  top: -64px;
  width: 100%;
  max-width: 370px;
  padding-top: 56.25%;
  transition: all 1s ease-in-out;
  cursor: pointer;

  &:hover {
    transform: scale(1.02);
    .container {
      bottom: 50%;
      transform: translateY(-50%);
    }
  }

  .container {
    position: absolute;
    left: 0;
    right: 0;
    bottom: 64px;
    text-align: center;
    align-items: center;
    transition: all 1s ease-in-out;
  }
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  box-shadow: 4px 4px 8px 4px rgba(0, 0, 0, 0.2);
  border-radius: 32px;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: ${props => props.position};
  background-image: ${props => `url(${props.background})`};
`;

Background.propTypes = {
  position: PropTypes.string,
  background: PropTypes.string.isRequired,
};

Background.defaultProps = {
  position: 'center',
};
