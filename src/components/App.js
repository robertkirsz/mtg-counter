import React, { PropTypes } from 'react';
import { Link, IndexLink } from 'react-router';

const App = (props) => {
  return (
    <div style={{ height: '100vh' }}>
      {props.children}
    </div>
  );
};

App.propTypes = {
  children: PropTypes.element
};

export default App;
