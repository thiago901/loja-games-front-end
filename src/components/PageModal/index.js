import React from 'react';

import { Container } from './styles';

function PageModal({ children, visible, setVisible }) {
  return (
    <Container visible={visible}>
      <button type="submit" onClick={() => setVisible(false)}>
        x
      </button>
      {children}
    </Container>
  );
}

export default PageModal;
