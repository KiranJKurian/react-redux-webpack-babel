import React from 'react';
import PropTypes from 'prop-types';
import RaisedButton from 'material-ui/RaisedButton';
import { withRouter } from 'react-router';

const LinkButton = (props) => {
  const {
    history,
    to,
    label,
    location,
    extraProps, // eslint-disable-line react/prop-types
  } = props;

  const redirect = () => { history.push(to); };

  return (<RaisedButton
    disabled={location.pathname === to}
    label={label}
    onClick={redirect}
    {...extraProps}
  />);
};

LinkButton.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  to: PropTypes.string,
  label: PropTypes.string,
};

LinkButton.defaultProps = {
  history: () => {},
  to: '',
  label: '',
  location: { pathname: '/' },
};

const LinkButtonWithRouter = withRouter(LinkButton);

export default LinkButtonWithRouter;

