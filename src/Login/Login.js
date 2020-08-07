import React from 'react'
import { connect } from 'react-redux'
import {useHistory} from 'react-router-dom'
import '../Login/Login.css'


const Login = (props) =>  {
  const history = useHistory()
  const openDashboard = (name) => {
    window.localStorage.setItem('getCurrentUser',name )
    history.push('/dashboard')
  }
    return(
      <div id="loginForm">
					<div class="loginFormOuter">
						<div class="formDiv">
							<h3>Log In</h3>
              <div className='userList'>
              {
                props.data.map((item, key) => {
                  return (
                  <div key={key} className='users' onClick={ () => {openDashboard(item.name)}}>
                    <div><i class="fa fa-user-circle" aria-hidden="true" ></i></div>
                    <div className='userName'>
                      <div className='name'>{item.name}</div>
                      <div className='email'>{item.email}</div>
                    </div>  
                  </div>
                  )
                })
              }
              </div>
						</div>
					</div>    
				</div>
    )
  }

 const mapStateToProps = (state) => ({
  data: state.users
})

export default connect(mapStateToProps) (Login);