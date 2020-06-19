import React from 'react';

import Form from '../../../../../components/Addresses/Form';
import AccountProfile from '../../../../../components/AccountProfile';

function FormAddress(props) {
  const { id } = props.match.params;

  return (
    <AccountProfile>
      <Form idAddress={id} />
    </AccountProfile>
  );
}

export default FormAddress;
