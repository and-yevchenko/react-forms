import './App.css'
import { FormIngridient } from './components/FormIngridient/FormIngridient'
import { FormRegister } from './components/FormRegister/FormRegister'

function App() {

  return (
    <section className='section'>
      <FormRegister />
      <FormIngridient />
    </section>
  )
}

export default App
