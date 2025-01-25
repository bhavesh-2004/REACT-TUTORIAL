import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/card' 

function App() {
  // console.log("props",props);
  
  const [count, setCount] = useState(0)
  let MyObj = {
    name : "bhavesh",
    Age : 21,
    class: "T.Y.B.TECH"

  }
  let newArray = [1,2,3]

  return (
    <>
      <h1 className='bg-green-400 rounded-xl p-4 text-black'>
        Country Flags</h1> <br />
     
    <Card userName = "India" btnText = "click here" information = " India is located in South Asia and is the seventh-largest country by land area. It is bordered by Pakistan, China, Nepal, Bhutan, Bangladesh, and Myanmar."
    imgSrc = "https://th.bing.com/th/id/R.6f74e13c568cc775e34fde6dfd872e9c?rik=NcQmIaP8nYCwEQ&riu=http%3a%2f%2fwallpapercave.com%2fwp%2fwc1779186.jpg&ehk=LQAY2H4zWSWjG29poUL2dp4GboDb9h9xKNa8%2b2%2flzZo%3d&risl=&pid=ImgRaw&r=0"
    btnLink = "https://www.india.com/"
     />
    <Card userName= "USA" btnText = "visit here" information = 'The United States is a vast country in North America, bordered by Canada to the north and Mexico to the south. It also has coastlines along the Atlantic and Pacific Oceans.' 
    imgSrc = "https://www.pixelstalk.net/wp-content/uploads/2016/05/American-Flag-Wallpaper-Iphone-with-High-Resolution-2000x1411.jpg"
    btnLink = "https://www.britannica.com/place/United-States"
    />
    
    </>
  )
}

export default App
