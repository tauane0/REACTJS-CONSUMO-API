import { Link } from 'react-router-dom'
import './style.css'
export default function Header () {
    return(
        <header>
            <h1> SISTEMA I LOVE ME</h1>
            <nav>
                <Link to='/'>Home Loves</Link>
                <Link to='/cadastro'>Cadastro Loves</Link>
                <Link to='/lista'>Listar Loves</Link>
                
            </nav>
        </header>
    )
}