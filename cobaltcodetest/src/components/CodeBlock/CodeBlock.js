import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Panel } from 'react-bootstrap';
import './CodeBlock.css';

class CodeBlock extends Component {
  render() {
    const { content } = this.props;
    return (
      <Panel>
        <pre>
          {JSON.stringify(content, null, ' ')}
        </pre>
      </Panel>
    );
  }
}

const mapStateToProps = (state) => {
};

export default connect(mapStateToProps)(CodeBlock);