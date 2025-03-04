import React from 'react';
import { connect } from 'react-redux';
import { fetchSingleStream, editStream } from '../../actions';
import StreamForm from './StreamForm';
import _ from 'lodash';


class StreamEdit extends React.Component {
  componentDidMount() {
    this.props.fetchSingleStream(this.props.match.params.id);
  }


  onSubmit = (formValues) => {
    this.props.editStream(this.props.match.params.id, formValues)

  }
  render() {
    if (!this.props.stream) {
      return <div> Loading ... </div>;
    }
    return (
      <div> <h3> Edit a Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit} />
      </div >
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] };
}

export default connect(mapStateToProps, { fetchSingleStream, editStream })(StreamEdit);