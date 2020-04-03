import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../../../components/Menu';
import { Wrapper } from './styles';

export default function SystemWeb({ children }) {
  return (
    <Wrapper>
      <Menu />
      {children}
    </Wrapper>
  );
}

SystemWeb.propTypes = {
  children: PropTypes.element.isRequired,
};
