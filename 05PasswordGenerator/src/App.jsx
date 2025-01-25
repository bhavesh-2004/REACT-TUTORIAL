import { useCallback, useEffect, useState } from 'react'
 
// import './App.css'

function App() {
   const[length, setLength] = useState(8);
   const[numberAllowed, setNumberAllowed] = useState(false);
   const[charAllowed, setCharAllowed] = useState(false);
   const[password, setPassword] = useState('')
   const[buttonText, setButtonText] = useState('Copy');


   const PasswordGenerator = useCallback(() => {
    let pass =''
    let str = " ZRAMBKFJXCHLDUGYWPEISNTQVOrmbkfjxchldugywpeisntqvo"

    if(numberAllowed) str += "0123456789"
    if(charAllowed) str += "@ # $ % ^ & * ( ) _ + ? ~ > <"
  
    for( let i = 1; i<=length; i++ ){
      let char = Math.floor(Math.random() * str.length + 1 );
      pass += str.charAt(char);
    }
    setPassword(pass);

   } , [length, numberAllowed, charAllowed]);

   useEffect(() => {
    PasswordGenerator()
   }, [length, numberAllowed, charAllowed,PasswordGenerator]);


   let copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    setButtonText('Copied'); // Change button text to "Copied"
    setTimeout(() => {
      setButtonText('Copy'); // Reset button text after 2 seconds
    }, 2000);
    // alert('Password copied to clipboard');
    
   };

  return (
    <>
    {/* <h1 className='text-5xl text-center text-yellow-400'>Password Generator</h1> */}
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-8 text-orange-500 bg-gray-500'>
      <h1 className='text-center text-white my-3'>Password Generator</h1>
      <div className='flex shadow-md rounded-lg overflow-hidden mb-4 '>
        <input
         type="text"
         value={password}
         className='outline-none w-full py-1 px-2  rounded-l-md    '
         placeholder='password'
         readOnly
         />

         <button className='outline-none bg-blue-900 text-white px-3 py-0.5 shrink-0 rounded-r-md' 
         
         onClick={copyToClipboard}>

          {buttonText}
         </button>
      </div>

      <div className='flex text-sm gap-x-2 '>
      <div className='flex items-center gap-x-1'>
      <input
       type="range"
       min={6}
       max={100}
       value={length}
       className='cursor-pointer'
      //  style={{color: blue }}
       onChange={(e) => {setLength(e.target.value)}}
       
        />
        <label>Length : {length}</label>
      </div>
      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={numberAllowed}
        id='numberInput'
        onChange={() => 
        {
          setNumberAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="numberInput">Numbers</label>

      </div>

      <div className='flex items-center gap-x-1'>
        <input 
        type="checkbox"
        defaultChecked={charAllowed}
        id='charInput'
        onChange={() => 
        {
          setCharAllowed((prev) => !prev);
        }}
        />
        <label htmlFor="charInput">Characters</label>

      </div>
      </div>
    </div>

     
    </>
  )
}

export default App
