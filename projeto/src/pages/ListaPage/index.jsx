import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { toast } from 'react-toastify'
import api from '../../services/api'
import './style.css'

export default function ListaPage() {
  const [clientes, setClientes] = useState([])
  const [carregando, setCarregando] = useState(true)
  const [erro, setErro] = useState(false)

  // -----------------
  // Busca de clientes - carrega os registros da API ao abrir a página.
  // -----------------
  useEffect(() => {
    async function carregarClientes() {
      try {
        const resposta = await api.get('/clientes')
        setClientes(resposta.data)
      } catch (erroRequisicao) {
        setErro(true)
        toast.error('Não foi possível carregar os clientes.')
        console.error(erroRequisicao)
      } finally {
        setCarregando(false)
      }
    }

    carregarClientes()
  }, [])

  // -----------------
  // Exibição da lista - mostra carregamento, erro, estado vazio ou os clientes recebidos.
  // -----------------
  return (
    <div className='lista-page page-shell'>
      <div className='lista-page__header'>
        <div>
          <span className='eyebrow'>Seus Lovers</span>
          <h1>Lista de membros</h1>
          {!carregando && !erro && (
            <p className='lista-page__count'>
              {clientes.length} {clientes.length === 1 ? 'cliente cadastrado' : 'clientes cadastrados'}
            </p>
          )}
        </div>
        <Link to='/cadastro' className='button button-primary'>Adicionar cliente</Link>
      </div>

      {carregando && <p className='lista-page__message'>Carregando clientes...</p>}

      {erro && (
        <p className='lista-page__message lista-page__message--error'>
          Não foi possível consultar a API. Confira se o backend está ativo e tente novamente.
        </p>
      )}

      {!carregando && !erro && clientes.length === 0 && (
        <div className='lista-page__empty'>
          <h2>Nenhum cliente cadastrado ainda</h2>
          <p>Quando você cadastrar alguém, essa pessoa aparecerá aqui.</p>
          <Link to='/cadastro' className='button button-secondary'>Fazer primeiro cadastro</Link>
        </div>
      )}

      {!carregando && !erro && clientes.length > 0 && (
        <div className='lista-grid'>
          {clientes.map((cliente) => (
            <article key={cliente.id ?? cliente.email} className='lover-card card'>
              <div className='lover-card__avatar'>
                {cliente.nome?.charAt(0)?.toUpperCase() ?? '?'}
              </div>
              <div className='lover-card__info'>
                <h3>{cliente.nome}</h3>
                <p>{cliente.email}</p>
                <p>{cliente.telefone}</p>
                {cliente.endereco && <p>{cliente.endereco}</p>}
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  )
}
