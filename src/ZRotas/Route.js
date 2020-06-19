import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

import { store } from '../store';

export default function RouterWrapper({
  component: Component,
  isPrivate,
  isAdm,
  isProvider,
  ...rest
}) {
  const { user } = store.getState();
  const { signed } = store.getState().auth;

  if (!signed && isPrivate) {
    return <Redirect to="/signIn" />;
  }
  if (!signed && isProvider) {
    return <Redirect to="/" />;
  }

  if (signed && !isProvider === user.profile.provider && isPrivate) {
    return <Redirect to="/" />;
  }

  // const Layout = signed && user.profile.provider ? SystemLayout : ClientLayout;
  if (
    signed &&
    user.profile.paperUser &&
    isAdm &&
    user.profile.paperUser.title !== 'Administração'
  ) {
    return <Redirect to="/system" />;
  }

  return (
    <Route
      // eslint-disable-next-line react/jsx-props-no-spreading
      {...rest}
      // eslint-disable-next-line react/jsx-props-no-spreading
      render={props => <Component {...props} />}
    />
  );
}

RouterWrapper.propTypes = {
  isPrivate: PropTypes.bool,
  isProvider: PropTypes.bool,
  isAdm: PropTypes.string,
  component: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
};

RouterWrapper.defaultProps = {
  isPrivate: false,
  isProvider: false,
  isAdm: null,
};
