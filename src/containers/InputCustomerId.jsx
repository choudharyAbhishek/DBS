import React from 'react';
import { connect } from 'react-redux';
import { setCityName } from '../actions';

const styles = {
  display: 'block',
  width: '30%',
  margin: '10%',
  fontSize: '30px',
  borderRadius: '4em',
  paddingLeft: '20px',
  color: 'orange',
};

const SearchField = ({ setCityName }) => (
  <div>
    <input style={styles} onChange={(evt) => { setCityName(evt.target.value); }} type="text" placeholder="Enter UserName" />
  </div>
);

const mapDispatchToProps = {
  setCityName
};

const Search = connect(
  null,
  mapDispatchToProps,
)(SearchField);

export default Search;
