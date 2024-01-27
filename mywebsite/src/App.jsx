import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
   <div className='w-full h-screen bg-blue-200'>
        <div className='bg-red-400 w-full h-10 text-center  '>
            Welcome to my website
      </div>
    <div className='bg-blue-100 flex items-center'>
      Prathamesh Sawant 
    </div>
    <div></div>


   </div>
      
    </>
  )
}

export default App
