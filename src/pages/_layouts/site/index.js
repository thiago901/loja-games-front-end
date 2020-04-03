import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../../components/Header';
import { Wrapper } from './styles';

export default function Site({ children }) {
  return (
    <Wrapper>
      <Header />
      {children}
    </Wrapper>
  );
}

Site.propTypes = {
  children: PropTypes.element.isRequired,
};
