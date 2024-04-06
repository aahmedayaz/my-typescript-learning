import React, { useContext } from 'react';
import AuthContext from './context/AuthContext';


function App() {
  const {auth, setAuth} = useContext(AuthContext)!
  return (
    <>
      <span>{auth?.email}</span>
      <span>{auth?.password}</span>
      <button onClick={() => setAuth({email: 'Hello', password: 'abc'})}>Add Auth</button>
    </>
  );
}

export default App;
