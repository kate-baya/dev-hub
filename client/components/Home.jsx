import React from 'react'
import {connect} from 'react-redux'
import ProjectList from './ProjectList'

function Home (props) {

  return (
    <>
      <p className='title'>Welcome {props.user.name}!</p>
      <p className='subtitle'> Check out the latest popular projects</p>
      <ProjectList />
    </>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(Home)