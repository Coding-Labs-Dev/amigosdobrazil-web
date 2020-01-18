import React, { useRef } from 'react';
import PropTypes from 'prop-types';

import { Container } from './styles';

export default function Input({ icon: Icon, type, name, placeholder }) {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <Container onClick={handleClick} textArea={type === 'textArea'}>
      {Icon && <Icon size={24} />}

      {type === 'text' && (
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          ref={inputRef}
        />
      )}

      {type === 'textArea' && (
        <textarea
          type={type}
          name={name}
          placeholder={placeholder}
          ref={inputRef}
        />
      )}
    </Container>
  );
}

Input.propTypes = {
  icon: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string,
  placeholder: PropTypes.string,
};

Input.defaultProps = {
  type: 'text',
  placeholder: '',
};
