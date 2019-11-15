import React from 'react';
import { fetchMultipleStreams } from '../../actions';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchMultipleStreams();
  }

  renderAdminButons(stream) {

    if (stream.userId === this.props.currentUserID) {
      return (
        <div className='right floated content'>
          <Link className='ui button primary' to={`/streams/StreamEdit/${stream.id}`}> Edit </Link>
          <Link className='ui button negative' to={`/streams/StreamDelete/${stream.id}`}> Delete</Link>
        </div >
      );
    }

  }

  renderList() {
    return this.props.streams.map(stream => {
      return (

        <div className='item' key='{stream.id}'>
          {this.renderAdminButons(stream)}
          <i className='large middle aligned file video outline icon  ' />
          <div className='content'>
            <Link to={`/streams/${stream.id}`} className='header'>
              {stream.title}
            </Link>
            <div className='description'>
              {stream.description}
            </div>
          </div>
        </div>
      );

    });
  }

  renderCreate() {
    if (this.props.isSignedIn) {
      return (
        <div style={{ textAlign: 'right' }} >
          <Link to='/streams/StreamNew' className='ui button primary'>Create Stream </Link>
        </div>
      )
    }

  }
  render() {
    return (
      <div>
        <h3 > Streams</h3>
        <div className='ui celled list'> {this.renderList()} </div>
        {this.renderCreate()}
      </div>
    );

  }

}

const mapStateToProps = (state) => {
  return (
    {
      streams: Object.values(state.streams),
      currentUserID: state.auth.userId,
      isSignedIn: state.auth.isSignedIn
    }
  )
}
export default connect(mapStateToProps, { fetchMultipleStreams })(StreamList);