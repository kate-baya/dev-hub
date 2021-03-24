import React from 'react'
import {connect} from 'react-redux'
import ProjectList from './ProjectList'

function Home (props) {

  var items = [
    { name: 'Edward', value: 21 },
    { name: 'Sharpe', value: 37 },
    { name: 'And', value: 45 },
    { name: 'The', value: -12 },
    { name: 'Magnetic', value: 13 },
    { name: 'Zeros', value: 37 }
  ];
  
  console.log(items.sort(function (a, b) {
    return a.value - b.value;
  }));
  
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