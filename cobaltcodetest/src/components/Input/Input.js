import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setEndpoint, setTag } from './../../actions/index'
import './Input.css';

class Input extends Component {
  constructor (props){
    super(props);
  }

  render() {
    const { dispatch, inputKey, placeholder } = this.props;
    return (
      <span>
        <input type='text' placeholder={placeholder} onChange={event => {
          switch(inputKey) {
            case 'endpoint':
              dispatch(setEndpoint(event.target.value));
              break;
            case 'tag':
              dispatch(setTag(event.target.value));
              break;
            default:
              return;
          }
        }}/>
      </span>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  key: ownProps.key
};

export default connect(mapStateToProps)(Input);