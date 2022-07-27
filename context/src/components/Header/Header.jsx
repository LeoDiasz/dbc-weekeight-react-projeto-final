import { Link } from 'react-router-dom'
import { useAuth } from '../../hooks/useAuth'

export const Header = () => {
  const {token, signOut} = useAuth()
  
  return (
    <header style={{display: "flex"}}>
      <nav>
        <ul>
          {token ? <li><Link to="/endereco">Endereço</Link></li> : <li><Link to="/">Login</Link></li>}
          {token ?<li><Link to="/pessoa">Pessoa</Link></li> : <li><Link to="/cadastrar">Cadastrar usuários</Link></li>}
        </ul>
      </nav>
      {token && <button style={{cursor: "pointer"}} onClick={signOut}>Sair</button>}
    </header>
  )
}
