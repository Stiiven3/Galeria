import Buscador from './components/Buscador'
import Imagenes from './components/Imagenes'

import './App.css'

export default function App() {
 { /*const [count, setCount] = useState(0)*/}
  return (
    <>
    <div className="min-h-screen bg-gray-100 p-6">
        <h1 className='text-center'>Galeria de imagenes</h1>
           <Buscador/>
            <Imagenes/>
    </div>

     </>
  )
}


