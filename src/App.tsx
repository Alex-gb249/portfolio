import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Projects from './pages/Projects'

function App() {

  return (
    <>
      <div className='all prevent-select'>
        <Header />
        <Projects />
        <Footer />
      </div>
    </>
  )
}

export default App
