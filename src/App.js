import React, {useState} from 'react'; 
import Tweet from './tweet'

function App() {


  const [isRed, setRed] = useState(false)
  const [count, setCount] = useState(0) 

  const inc = () => {
    setCount(count +1)
    setRed(!isRed)
  }

  const [users, setUser] = useState([
    {name : 'John', message: 'I am the true king', likes: '10k'},
    {name: 'Sansa', message: 'I am Sansa Stark of Winterfell', likes: '6k'},
    {name: 'Daenerys', message: 'I will take what is mine with fire and blood', likes: '26k'}

  ])

  return (
    <div className="app">
      <h1 className={isRed ? "red" : ""}>Change my color</h1>
      <button onClick={inc}>Inc</button>
      <h1>{count}</h1>
      {users.map(user => (
        <Tweet name={user.name} message={user.message} likes={user.likes}/>
      ))}
    </div>
  );
};

export default App;
