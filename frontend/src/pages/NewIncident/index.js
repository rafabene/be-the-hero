import React, {useState} from 'react'
import { Link , useHistory } from 'react-router-dom'
import { FiArrowLeft } from 'react-icons/fi'

import './styles.css'
import logoImg from '../../assets/logo.svg'
import api from '../../services/api'

export default function NewIncident(){
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [value, setValue] = useState('')
    const ongId = localStorage.getItem('ongId')
    const history = useHistory()

    async function handleNewIncident(e){

        e.preventDefault()
        const data = {
            title,
            value,
            description
        }
        try {
          await api.post('/incidents', data, {
              headers: {
                  Authorization: ongId
              }
          })
          history.push('/profile')
        } catch (error) {
            alert('Erro ao cadastrar caso. Tente novamente')
        }
    }
    return (
        <div className="new-incident ">
            <div className="content">
                <section>
                    <img src={logoImg} alt="Be the hero" />
                    <h1>Cadastrar novo caso</h1>
                    <p>
                        Descreva o caso detalhadamente para encotrar um heroi
                        para resolver isso.
                    </p>
                    <Link className="backLink" to="/profile">
                        <FiArrowLeft size={16} color="#e02041"  />
                        Voltar para Home
                    </Link>
                </section>
                <form onSubmit={handleNewIncident}>
                    <input type="text" 
                        value={title} 
                        onChange={ e => setTitle(e.target.value)} 
                        placeholder="Titulo do caso"/>
                    <textarea 
                        value={description} 
                        onChange={ e => setDescription(e.target.value)} 
                        placeholder="descricao"/>
                    <input type="text" 
                        value={value} 
                        onChange={ e => setValue(e.target.value)} 
                        placeholder="Valor em Reais"/>
                    <button className="button" type="submit">Cadastrar</button>
                </form>
            </div>
        </div>
    )
}