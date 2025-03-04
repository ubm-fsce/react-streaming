import React from 'react';
import Modal from '../Modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchSingleStream, deleteStream } from '../../actions';
import { Link } from 'react-router-dom';
import { thisTypeAnnotation } from '@babel/types';

class StreamDelete extends React.Component {

  componentDidMount() {
    this.props.fetchSingleStream(this.props.match.params.id);

  }

  renderActions() {
    const { id } = this.props.match.params;
    return (
      <React.Fragment>
        <button
          onClick={() => { this.props.deleteStream(id) }}
          className='ui negative button'>Delete</button>
        <Link to='/' className='ui  button' >Cancel</Link>
      </React.Fragment >
    );
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Are you sure you want to delete the stream';
    }
    return `Are you sure you want to delete the stream wtih title : ${this.props.stream.title}`;
  }

  render() {
    return (
      < Modal title='Delete Stream'
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')} />
    )
  }


}


const mapStateToProps = (state, ownProps) => {
  return { stream: state.streams[ownProps.match.params.id] }
};

export default connect(mapStateToProps, { fetchSingleStream, deleteStream })(StreamDelete);