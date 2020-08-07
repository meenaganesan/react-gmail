import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import {useHistory} from 'react-router-dom';
import EmailOverlay from '../EmailOverlay/EmailOverlay'



const Dashboard = (props) => {
  const history = useHistory()
  const [overlay, openOverlay] = useState(false)
  const [showDropDown, openDropDown] = useState(false)

  const logout = () => {
    window.localStorage.setItem('getCurrentUser', '')
    history.push('/')
  }

  const overlayLayout = overlay  ? <EmailOverlay close={openOverlay}/> : ''
  return (
    <div id='app'>
      {overlayLayout}
      <div className='header'>
        <i class="fa fa-google" aria-hidden="true"></i>
        <input type='text' className='searchBox' placeholder='Search'></input>
        <div className='iconDiv'>
          <i class="fa fa-bell" aria-hidden="true"></i>
          <i class="fa fa-user-circle" aria-hidden="true" onClick={() => {openDropDown(true)}}></i>
          <div className='logoutDiv' style={{visibility: showDropDown ? 'visible' : 'hidden'}}>
            <div className='cursorPointer' onClick={logout}>Logout</div>
          </div>
        </div>
      </div>
      <div className='flex'>
        <div className='sideNav'>
          <div className='buttonDiv'><button className='sendButton' type='submit' onClick={() => {openOverlay(true)}}>COMPOSE</button></div>
          <div className='sideNavButton cursorPointer'>Inbox</div>
          {/* <div className='sideNavButton cursorPointer'>Sent</div>
          <div className='sideNavButton cursorPointer'>Important</div> */}
        </div>
        <div style={{width: '93%'}}>
          <div className='mailHeader'>
            <input type='checkbox'></input>
            <i class="fa fa-refresh ml-5" aria-hidden="true"></i>
          </div>
          <div className='bodyHeader'>
            <div className='tab'>Primary</div>
            <div className='tab'>Social</div>
            <div className='tab'>Updates</div>
            <div className='tab'>Forums</div>
          </div>
          <div>
            {
              props.mail.mails.length > 0 ? props.mail.mails.map((i, key) => {
                return (
                  <div key={key} className='mail'>
                    <div><input type='checkbox'/></div>
                    <div className='fromName'>{i.from}</div>
                    <div className='mailContent'>{i.content}</div>
                  </div>
                )
              })
              :
              <div className='noData'>No mails!!!</div>
            }
          </div>
        </div>
      </div>
    </div>  
  );
}

function mapStateToProps(state) {
  const user = window.localStorage.getItem('getCurrentUser')
  return {
    mail: state.users.find((item) => item.name === user) 
  }
}

export default connect(mapStateToProps)(Dashboard);