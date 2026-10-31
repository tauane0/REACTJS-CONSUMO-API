import './style.css';
import { useState } from 'react';
import { toast } from 'react-toastify';
import api from '../../services/api';

export default function CadastroPage() {
    const [nome, setNome] = useState('');
    const [email, setEmail] = useState('');
    const [telefone, setTelefone] = useState('');

    async function cadastrar(evento) {
        evento.preventDefault();

        try {
            await api.post('/lovers', { nome, email, telefone });

            toast.success('Lover cadastrado com sucesso!');
            setNome('');
            setEmail('');
            setTelefone('');
        } catch (erro) {
            toast.error('Erro ao cadastrar lover. Tente novamente.');
            console.error(erro);
        }
    }

    return (
        <div className='cadastro-page'>
            <form onSubmit={cadastrar}>
                <h2>Cadastro de Lovers</h2>

                <label>
                    Nome:
                    <input
                        id='nome'
                        type='text'
                        value={nome}
                        onChange={(evento) => setNome(evento.target.value)}
                        required
                    />
                </label>

                <label>
                    Email:
                    <input
                        id='email'
                        type='email'
                        value={email}
                        onChange={(evento) => setEmail(evento.target.value)}
                        required
                    />
                </label>

                <label>
                    Telefone:
                    <input
                        id='telefone'
                        type='text'
                        value={telefone}
                        onChange={(evento) => setTelefone(evento.target.value)}
                        required
                    />
                </label>

                <button type='submit'>Cadastrar</button>
            </form>
        </div>
    );
}