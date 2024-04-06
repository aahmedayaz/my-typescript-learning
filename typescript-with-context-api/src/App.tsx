import React, { useContext } from 'react';
import AuthContext from './context/AuthContext';


function App() {
  const {auth, addAuth} = useContext(AuthContext)!
  return (
    <>
      <span>{auth?.email}</span>
      <span>{auth?.password}</span>
      <button onClick={() => addAuth()}>Add Auth</button>
    </>
  );
}

export default App;
