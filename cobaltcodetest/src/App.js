import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Grid, Row, Panel } from 'react-bootstrap';
import { fetchTags } from './actions/index';
import { map } from 'lodash/fp';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import CodeBlock from './components/CodeBlock/CodeBlock';
import './App.css';

class BaseApp extends Component {
  constructor(props) {
    super(props);

    this.onClick = this.onClick.bind(this);
  }

  onClick = () => {
    const { endpoint, tag } = this.props;
    this.props.dispatch(fetchTags(endpoint, tag));
  }

  render() {
    const { tag, tags } = this.props;

    return (
      <Grid>
        <Row>
          <Panel className='customPanel'>
            <h1>Cobalt HTML body parser</h1>
            <p className='cheekyText'>Now IE 6 certified!</p>
            <Input inputKey='endpoint' placeholder='Endpoint' />
            <Input inputKey='tag' placeholder='Tag' />
            <Button value='Search' onClick={this.onClick} />
          </Panel>
        </Row>
        <Row>
          {tags[tag] && tags[tag].length > 0 ? 
            map((item) => <CodeBlock content={item} />)(tags[tag])
          : null}
        </Row>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    tags: state.tags,
    endpoint: state.endpoint,
    tag: state.tag,
  };
};

export default connect(mapStateToProps)(BaseApp);