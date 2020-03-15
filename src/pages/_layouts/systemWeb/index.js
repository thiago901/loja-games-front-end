import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function SystemWeb({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

SystemWeb.prototype = {
  children: PropTypes.element.isRequired,
};
