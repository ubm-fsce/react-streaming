import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleStream } from '../../actions'
import { runInThisContext } from 'vm';
import { thisTypeAnnotation } from '@babel/types';

class StreamShow extends React.Component {
  componentDidMount() {
    this.props.fetchSingleStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return <div> Loading ... </div>
    }
    const { title, description } = this.props.stream;
    return (
      <div>
        <h1>{title}</h1>
        <h4> {description}</h4>
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
}

export default connect(mapStateToProps, { fetchSingleStream })(StreamShow);