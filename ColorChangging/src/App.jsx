import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [color, setcolor] = useState('red')

  const addColor = (newcolor) =>{
    document.body.style.background = newcolor;
    setcolor(newcolor)
    console.log('color changed',newcolor);
  }

  

  return (
    <>
       <h1>Favourite Colors</h1>
       <h2>My Favourite is {color}</h2>
       <button 
        onClick={ () => addColor('blue')}>blue </button>
        <br />
       <button 
       onClick={ () => addColor('black')}>black </button>
       <br />
       <button 
       onClick={ () => addColor('yellow')}>yellow </button>
       <br />
       <button
       onClick={() => addColor('pink')} >Pink </button> <br />
        <button
       onClick={() => addColor('orange')} >Orange</button>
        
    </>
  )

}
export default App
