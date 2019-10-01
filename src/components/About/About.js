import React, { Component } from 'react';
import {Link, Switch, Route} from 'react-router-dom'
import History from '../History/History'
import Contact from '../Contact/Contact'


export default class About extends Component {
  render() {
    return (
      <div>
        <div className='subnav'>
          <Link className='subnav_links' to='/about'><h3>About</h3></Link>
          <Link className='subnav_links' to='/about/history'><h3>History</h3></Link>
          <Link className='subnav_links' to='/about/contact'><h3>Contact</h3></Link>
        </div>
        <div className='box'>
          <Switch>
            <Route path='/about/history' component={History}/>
            <Route path='/about/contact' component={Contact}/>
            <Route path='/about' render={() => (
              <div>
                <h1>About the University</h1>
                <p>
                  the only thing you need to know about the University is that it sucks balls and will ultimately turn you into a rule following frog marching little twit who will be looked down on for the rest of your life 
                </p>
              </div>
            )}/>
          </Switch>
        </div>
      </div>
    )
  }
}