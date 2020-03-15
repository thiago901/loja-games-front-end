import React from 'react';
import PropTypes from 'prop-types';

import { Wrapper } from './styles';

export default function Site({ children }) {
  return <Wrapper>{children}</Wrapper>;
}

Site.prototype = {
  children: PropTypes.element.isRequired,
};
