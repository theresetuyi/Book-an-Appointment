import React, { useEffect } from 'react';
// import { connect } from 'react-redux';
// import PropTypes from 'prop-types';
// import { getGreetings } from '../redux/greetings/greetingsSlice';

const Greeting = ({ message, getGreetings }) => {
  // useEffect(() => {
  //   getGreetings();
  // }, [getGreetings]);

  // return (
  //   <div>
  //     <h1>{message}</h1>
  //   </div>
  // );
  return (
    <div>
      Rails app with redux
    </div>
  )
};

// Greeting.defaultProps = {
//   message: '',
//   getGreetings: () => {},
// };

// Greeting.propTypes = {
//   message: PropTypes.string,
//   getGreetings: PropTypes.func,
// };

// const mapStateToProps = (state) => ({
//   message: state.greetings.message,
// });

export default Greeting;

// export default connect(mapStateToProps, { getGreetings })(Greeting);
