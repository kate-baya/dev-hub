import React from 'react'
import {connect} from 'react-redux'

function Home (props) {

  return (
    <>
      <img src={props.user.image}/>
      <p className='title'>Welcome {props.user.name}!</p>
      <p className='subtitle'> Check out the latest blogs</p>
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(Home)