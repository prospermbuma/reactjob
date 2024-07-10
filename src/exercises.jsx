import React from 'react'

const App = () => {
  const name = 'Prosper';
  const x = 10;
  const y = 20;
  const names = ['Prosper', 'Victoria', 'Gladness', 'Joseph'];
  const loggedIn = true;
  const styles = {
    color: 'lightgray',
    fontSize: '55px',
  }
  return (
    <>
      <div className='text-5xl'>App</div>
      {/* Inline CSS */}
      <p style={{color : 'green', fontSize: '24px'}}>Hello, {name}</p>
      <p>The sum of {x} and {y} is {x + y}</p>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
      {/* Display welcome message to Members and Non Members */}
      {/* {loggedIn ? <h1>Hello, Member({name})</h1> : <h1>Hello, Guest</h1>} */}
      {/* Display the message to members only */}
      {loggedIn && <h1 style={styles}>Hello, Member({name})</h1>}
    </>
  )
}

export default App

  // const jobListings = isHome ? jobs.slice(0,3) : jobs;
