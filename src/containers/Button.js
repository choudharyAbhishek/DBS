import React from 'react';
import { connect } from 'react-redux';
import { getTemp } from '../actions'

let styles = {
  backgroundColor: 'red ',
  width: '150px',
  height: '50px',
  borderRadius: '40px',
  display: 'block',
  margin: '50px auto',
  fontSize: '25px',
  border: '3px solid '
}

class Button extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hover: false };
  }
  render() {
    return (
      <button style={!this.state.hover ? styles : { ...styles, backgroundColor: 'DarkTurquoise ' }}
        onMouseOut={() => { this.setState({ hover: false }) }}
        onMouseOver={() => { this.setState({ hover: true }) }}
        onClick={() => this.props.getTemp(this.props.name)}
      >Login</button>
    );
  }

};
/*
let Button=({getTemp,name})=>(
  <button onClick={()=>getTemp(name)}>Get temperature</button>
)
*/
const mapStateToProps = (state) => (
  { name: state.reducer.cityName }
)
const mapDispatchToProps = {
  getTemp,
};

Button = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Button);

export default Button;
