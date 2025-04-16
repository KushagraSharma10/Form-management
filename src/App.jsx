import React from 'react'
import Register from './components/Register'
import Details from './components/Details'

const App = () => {
  return (
    <div className='w-full flex items-center justify-center gap-10 h-screen rounded-md bg-zinc-900'>
        <Register />
        <Details />
    </div>
  )
}

export default App