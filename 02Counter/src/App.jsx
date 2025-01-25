import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter, setcounter] = useState(15);
  // let Counter = 15;

  const addcustomer = () =>{
    console.log("Customer Added", Counter);
    // Counter = Counter + 1;
    setcounter(Counter+1);
    // setcounter(PrevCounter => PrevCounter + 1 );
    // setcounter(PrevCounter => PrevCounter + 1 );
    // setcounter(PrevCounter => PrevCounter + 1 );  
    // setcounter(PrevCounter => PrevCounter + 1 );
  }

  const removecustomer = ()=> {
    console.log("Customer Removed", Counter);
  setcounter(Counter-1);
    
  }

  return (
    <>
       <h1>Raj Hair Saloon</h1>
       <h2>Customer Count : {Counter}</h2>
       <button
       onClick={addcustomer}>Add Customer {Counter}</button>
       <br />
       <button onClick={removecustomer}>Remove Customer {Counter}</button>
       <p> footer: {Counter}</p>
    </>
  )
}

export default App
