import './App.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Header from './componentes/Header'
import Footer from './componentes/Footer'
import HomePage from './pages/HomePage'
import CadastroPage from './pages/CadastroPage'
import ListaPage from './pages/ListaPage'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cadastro' element={<CadastroPage />} />
          <Route path='/lista' element={<ListaPage />} />
        </Routes>
      </main>
      <Footer />
      <ToastContainer autoClose={5000} />
    </>
  )
}

export default App
