import './App.css'
import Footer from './components/footer/Footer'
import Header from './components/header/Header'
import { ProjectsProvider } from './contexts/ProjectsContext'
import Projects from './pages/Projects'

function App() {

  return (
    <>
      <ProjectsProvider>
        <div className='all prevent-select'>
          <Header />
          <Projects />
          <Footer />
        </div>
      </ProjectsProvider>
    </>
  )
}

export default App
