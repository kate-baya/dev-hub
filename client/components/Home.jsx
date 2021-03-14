import React from 'react'

function Home () {
  // const [isAuthenticated, setIsAuthenticated]
  return (
      <div>
        <h3>Welcome!</h3>
        <p>Dev Hub is a place where aspiring developers can blog about their experiences and share their learning journey. It's a place to connect with other new developers and learn how to solve coding problems together.</p>
        <p>If you are new to Dev-Hub, please create a user profile to begin posting blogs about your current projects.</p>
        <p>If you are just wanting to take a look around, feel free to have a wander throughout the site!</p>
        {/* <GoogleLogin
        clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
        />   */}
      </div>
  )
}

export default Home