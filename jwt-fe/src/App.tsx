import { useRef } from 'react'
import { ToastContainer } from 'react-toastify';
import TokenButtons from './components/TokenButton';


function App() {
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <>
      <div className='main'>
        <div className='form'>
          <label htmlFor="input">Ingrese un nombre para generar el payload</label>
          <input type="text" ref={inputRef} />
        </div>
        <TokenButtons inputRef={inputRef} />
      </div>
      <ToastContainer />
    </>
  )
}

export default App