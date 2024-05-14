
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './Home.jsx'
import About from './About.jsx'
import Contact from './Contact.jsx'
import UseEffect from './UseEffect.jsx'

function App() {

  const name="Ajaya"
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/useeffect' element={<UseEffect />}/>
      </Routes>
    </BrowserRouter>
   
  )
}

export default App


