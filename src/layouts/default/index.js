import React from 'react';
import PropTypes from 'prop-types';
import { FaFacebook, FaInstagram } from 'react-icons/fa';

import { Wrapper, Footer } from './styles';

export default function DefaultLayout({ children }) {
  return (
    <>
      <Wrapper>{children}</Wrapper>
      <Footer>
        <div className="content">
          <span>
            Desenvolvido por {'<'}Coding Labs/{'>'}
          </span>
          <span>&copy; Copyright Amigos do Brazil, 2020</span>
          <span>
            <FaInstagram size={24} />
            <FaFacebook size={24} />
          </span>
        </div>
      </Footer>
    </>
  );
}

DefaultLayout.propTypes = {
  children: PropTypes.element.isRequired,
};
