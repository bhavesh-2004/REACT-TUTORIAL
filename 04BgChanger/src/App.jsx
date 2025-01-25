import { useState } from "react"

 

function App() {
   const [color, setColor] = useState(" ")

  return (
    <div className="w-full h-screen duration 200"
    style={{backgroundColor : color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

        <button
        onClick={() => setColor("red")}
        className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "red",border: "2px solid black"}}>Red</button>
         <button
         onClick={() => setColor("green")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "green",border: "2px solid black"}}>Green</button>
         <button
        onClick={() => setColor("pink")}
         className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor : "pink",border: "2px solid black"}}>Pink</button>

        <button
        onClick={() => setColor("olive")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "olive",border: "2px solid black"}}>Olive</button>

        <button
        onClick={() => setColor("grey")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "grey",border: "2px solid black"}}>Grey</button>

        <button
        onClick={() => setColor("yellow")}
         className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor : "yellow", border: "2px solid black"}}>Yellow</button>

        <button
        onClick={() => setColor("purple")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "purple",border: "2px solid black"}}>Purple</button>

        <button
        onClick={() => setColor("brown")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "brown",border: "2px solid black"}}>Brown</button>

        <button
        onClick={() => setColor("white")}
         className="outline-none px-4 py-1 rounded-full text-black shadow-lg"
        style={{backgroundColor : "white", border: "2px solid black"}}
        >White</button>

        <button
        onClick={() => setColor("black")}
         className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
        style={{backgroundColor : "black"}}>Black</button>
      </div>
      </div>
    </div>
  )
}

export default App
