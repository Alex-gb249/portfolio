import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import Portfolio from './pages/Portfolio'

function App() {

  return (
    <>
      <div className='all prevent-select'>
        <Header />
        <Portfolio />
        <Footer />
      </div>
    </>
  )
}

export default App
