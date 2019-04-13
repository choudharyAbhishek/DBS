import React from 'react';
import Button from '../containers/Button';
import Temperature from '../containers/Temperature'
import Loading from '../containers/Loading';
import InputCustomerId from  '../containers/InputCustomerId';
import InputPassword from  '../containers/InputPassword';
import DbsLogo from '../containers/Logo'
import {connect } from 'react-redux'

let App = ({ callDone, id,getByUrl }) => {
  if(id && !callDone){getByUrl(id)}
  return (
    <div>
      <DbsLogo/>
      <InputCustomerId/>
      <InputPassword/>
      <Button />
      <Loading />
      <Temperature name={id} />
    </div>
  );
}

const mapStateToProps = (state, ownProps) => ({
  id: ownProps.match.params[0],
  callDone: state.reducer.callDone,
});

const mapDispatchToProps = dispatch => ({
  getByUrl: (name) => { dispatch({type:'GET_TEMP',name}); },
});

App = connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);

export default App;
