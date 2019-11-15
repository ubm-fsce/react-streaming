import React from 'react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load("client:auth2", () => {
      window.gapi.client.init({
        clientId: '351461620846-n2eh3j2fpu25bfs83e641oj4pknkqals.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange)
      })
    });
  }

  initiateSignIn = () => {
    this.auth.signIn();
  };
  initiateSignOut = () => {
    this.auth.signOut();
  };

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(
        this.auth.currentUser.get().getId()
      );
    } else {
      this.props.signOut();
    }
  }

  renderAuthButton() {
    if (this.props.isSignedIn == null) {
      return null;
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.initiateSignOut} className='ui red google button' >
          <i className='google icon' />
          Sign out
        </button >
      );
    } else {
      return (
        <button onClick={this.initiateSignIn} className='ui red google button' >
          <i className='google icon' />
          Sign in with Google
        </button>
      );
    }
  }

  render() {
    return <div > {this.renderAuthButton()} </div>;
  }
}

const mapStateToProps = (state) => {
  return { isSignedIn: state.auth.isSignedIn }
};

export default connect(
  mapStateToProps,
  { signIn, signOut }
)(GoogleAuth);