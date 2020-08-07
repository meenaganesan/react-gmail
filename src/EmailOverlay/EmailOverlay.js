import React from 'react'
import '../EmailOverlay/EmailOverlay.css'
import { connect } from 'react-redux'

class EmailOverlay extends React.Component{

  constructor(props){
    super(props)
    this.state={
      to: '',
      subject: '',
      content: '',
      from : window.localStorage.getItem('getCurrentUser')
    }

    this.handleTextChange = this.handleTextChange.bind(this)
    this.sendMail = this.sendMail.bind(this)
  }

  handleTextChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  sendMail() {
    this.props.send({name: this.state.to, mail:{from : this.state.from, subject: this.state.subject, content: this.state.content}})
    this.props.close()
  }
  render() {
    return(
      <div id='emailOverlay'>
        <div>
          <div className='header'>
            New Message
            <div className='cursorPointer' onClick={() => {this.props.close()}}>X</div>
          </div>
          <div className='mr-8'>
            <div className='mr-5'><span>To</span><input className='toField' name='to' type='email' onChange={this.handleTextChange}></input></div>
            <hr/>
            <div className='mr-5'><span>Subject</span><input className='subjectField' name='subject' type='text' onChange={this.handleTextChange}></input></div>
            <hr/>
          </div>
        </div>
        <div className='emailBody'>
          <textarea className='textArea' name='content' onChange={this.handleTextChange}></textarea>
        </div>
        <div className='mr-8'>
          <button className='sendButton' type='submit' onClick={this.sendMail}>SEND</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => ({
  close: ownProps.close
})

const mapDispathToProps = (dispatch) => {
  return{
    send: (data) => {dispatch({type: 'ADD_MAIL', payload: data})},
  }
}

export default connect( mapStateToProps,mapDispathToProps) (EmailOverlay)