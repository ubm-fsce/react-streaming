import React from 'react';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import StreamList from './streams/StreamList';
import Header from './Header';
import { Router, Route, Link, Switch } from 'react-router-dom';
import history from '../history';

const PageOne = () => {
  return <div className='ui reaised very padded text container segment'>
    <div className='ui header'> Page one </div>
    <div className='ui section divider'>
      <div className='ui header'> Bad approach with anchor tag</div>
      <a class='ui label' href='/pagetwo'>  GOTO Page 2 </a>

      <div className='ui section divider'>
        <div className='ui header'> Good  approach with anchor tag</div>
        <Link to='/pagetwo' class='ui label' >  GOTO Page 2  with anchor tag</Link>
      </div >
    </div >
  </div>
}

const PageTwo = () => {
  return <div className='ui reaised very padded text container segment'>
    <div className='ui header'> Page one </div>
    <div className='ui section  divider'>
      <div className='ui header'> Bad approach with anchor tag </div>
      <a class='ui label' href='/'> GOTO Page 1</a>
      <div className='ui section divider'>
        <div className='ui header'> Good  approach with anchor tag</div>
        <Link to='/' class='ui label' >  GOTO Page 1 wtih link </Link>
      </div >
    </div>

  </div>

}

const App = () => {
  return (
    <div className='ui container'>
      <Router history={history}>
        <div>
          <Header />
          <Switch>
            <Route path='/' exact component={StreamList} />
            <Route path='/streams/StreamNew' component={StreamCreate} />
            <Route path='/streams/StreamEdit/:id' component={StreamEdit} />
            <Route path='/streams/StreamDelete/:id' component={StreamDelete} />
            <Route path='/streams/:id' component={StreamShow} />
          </Switch>
        </div>
      </Router >
    </div >
  )
}

export default App;