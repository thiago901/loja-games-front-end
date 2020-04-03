import React from 'react';
import PropTypes from 'prop-types';
import { Panel } from './style';

export default function painel({ children }) {
  return <Panel>{children}</Panel>;
}

painel.propTypes = {
  children: PropTypes.element.isRequired,
};
