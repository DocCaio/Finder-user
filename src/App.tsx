
import { Outlet } from 'react-router-dom';

import classes from './App.module.css';

function App() {
  

  return (
    <div className={classes.app}>
      <Outlet/>
      <h1>Ola</h1>
      
      </div>
  )
}

export default App
