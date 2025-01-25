import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

function MyApp(){
  return(
    <div>
      <h1>Custom App ! Chai Aur Code ! College Wallah ! Apna College !</h1>
    </div>
  )

}
// const reactElement = {
//   type: 'a',
//   props: {
//       href: 'https://amazon.in',
//       target: '_blank'
//   },
//   children: 'click me to visit amazon website'
// };

const reactElement = React.createElement(
  'a',
  {href: 'https://amazon.in', target: '_blank'},
  'visit amazon for salling any cosmetic product'
)

const anotherElement = <a href="https://amazon.in" target='_blank'>visit Amazon</a>

createRoot(document.getElementById('root')).
render(
  
    reactElement
   
)
