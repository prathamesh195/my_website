import { useState } from 'react'


function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
   <div className='w-full h-screen bg-blue-200'>
        <div className='bg-red-400 w-full text-center p-10 '>
            Welcome to my website
      </div>
    <div className='bg-blue-100 flex items-center flex-col'>
      Prathamesh Sawant From Bicholim
      <img 
    className=' rounded-full'
    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIbm4m6qwdQruO7mmsKaWth9J9-hnGx3YOD1tdqEGgyw&s" alt="" />
    </div>
  
    <div>
      <div className='bg-red-200 w-full h-20'>
aas
      </div>

    </div>


   </div>
      
    </>
  )
}

export default App
