import React from 'react'

function Card({userName,btnText,information,imgSrc,btnLink}) {
  console.log(userName);
    
  
  return (
        <div className="max-w-xs rounded-md shadow-md bg-black text-gray-100 ">
        {/* <img
          src="https://images.pexels.com/photos/2738173/pexels-photo-2738173.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500"
        /> */}
    {imgSrc && ( <img src={imgSrc} alt={userName} className="object-cover object-center w-full rounded-t-md h-72 bg-gray-500" /> )}

        <div className="flex flex-col justify-between p-6 space-y-8">
          <div className="space-y-2">
            <h2 className="text-3xl font-semibold tracking-wide">{userName}</h2>
            <p className="text-gray-400">
              {information}
            </p>
          </div>
          {/* <button
            type="button"
            className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200"
          >
          {btnText}
          </button> */}

<a href={btnLink} className="flex items-center justify-center w-full p-3 font-semibold tracking-wide rounded-md bg-gray-800 text-gray-200" target="_blank" rel="noopener noreferrer" > {btnText} </a>
        </div>
      </div>
    )
}

export default Card