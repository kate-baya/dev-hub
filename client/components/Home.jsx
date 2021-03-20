import React from 'react'
import {connect} from 'react-redux'

function Home (props) {

  return (
    <div>
      <img src={props.user.image}/>
      <p>Welcome {props.user.name}!</p>
    </div>
  )
}

const mapStateToProps = (globalState) => {
  return {
    user: globalState.user
  }
}

export default connect(mapStateToProps)(Home)