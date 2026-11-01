import { Link, NavLink } from 'react-router-dom'
import './style.css'

export default function Header() {
  return (
    <header className='topbar'>
      <div className='topbar__inner'>
        <Link to='/' className='brand' aria-label='Página inicial'>
          <span className='brand__mark'>L</span>
          <span className='brand__text'>Lovers</span>
        </Link>

        <nav className='nav' aria-label='Navegação principal'>
          <NavLink to='/' end>Início</NavLink>
          <NavLink to='/cadastro'>Cadastro</NavLink>
          <NavLink to='/lista'>Lovers</NavLink>
        </nav>

        <Link to='/cadastro' className='nav-cta'>Quero fazer parte</Link>
      </div>
    </header>
  )
}