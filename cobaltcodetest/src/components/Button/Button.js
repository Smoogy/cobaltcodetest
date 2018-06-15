import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'react-bootstrap';
import './Button.css';
import { fetchTags } from '../../actions';

class CustomButton extends Component {
  constructor (props){
    super(props);
  }

  render() {
    const { dispatch, onClick, value } = this.props;
    return (
      <div>
        <Button onClick={onClick}>{value}</Button>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
};

export default connect(mapStateToProps)(CustomButton);