import './style.css'
import { useState } from 'react'
import { toast } from 'react-toastify'
import api from '../../services/api'

export default function CadastroPage() {
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')

  async function cadastrar(evento) {
    evento.preventDefault()

    try {
      // Alteração da rota: o controller Java recebe o cadastro em /clientes.
      await api.post('/clientes', { nome, email, telefone })

      toast.success('Lover cadastrado com sucesso!')
      setNome('')
      setEmail('')
      setTelefone('')
    } catch (erro) {
      toast.error('Erro ao cadastrar lover. Tente novamente.')
      console.error(erro)
    }
  }

  return (
    <div className='cadastro-page page-shell'>
      <div className='cadastro-page__content'>
        <div className='cadastro-page__info'>
          <span className='eyebrow'>Faça parte</span>
          <h1>Cadastre seu perfil Lover</h1>
          <p>
            Complete seus dados e aproveite benefícios exclusivos, promoções incríveis
            e momentos especiais feitos para você.
          </p>
        </div>

        <form className='cadastro-form card' onSubmit={cadastrar}>
          <h2>Cadastro de Lovers</h2>

          <label>
            Nome
            <input
              id='nome'
              type='text'
              value={nome}
              onChange={(evento) => setNome(evento.target.value)}
              placeholder='Seu nome completo'
              required
            />
          </label>

          <label>
            Email
            <input
              id='email'
              type='email'
              value={email}
              onChange={(evento) => setEmail(evento.target.value)}
              placeholder='seu@email.com'
              required
            />
          </label>

          <label>
            Telefone
            <input
              id='telefone'
              type='text'
              value={telefone}
              onChange={(evento) => setTelefone(evento.target.value)}
              placeholder='(11) 99999-9999'
              required
            />
          </label>

          <button type='submit' className='button button-primary'>Cadastrar</button>
        </form>
      </div>
    </div>
  )
}