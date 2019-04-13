import React from 'react';
//import { connect } from 'react-redux'
import logoImg from '../Image/DBS_LOGO.jpg'

let Logo = () => (
    <div style={{ textAlign: 'center'
     }}>
      <img src={logoImg} alt='logo' style={{ width: '80px', height: '60px'}}/>
    </div>
);

/* const mapStateToProps = (state) => ({
  loading: state.reducer.loading
})

Logo = connect(
  mapStateToProps,
  null
)(Logo) */

export default Logo;
