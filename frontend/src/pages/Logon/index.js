import React, {useState} from 'react'
import { FiLogIn } from 'react-icons/fi'
import { Link, useHistory } from 'react-router-dom'

import logoImg from '../../assets/logo.svg'
import heroesImage from '../../assets/heroes.png'

import api from '../../services/api'

import './styles.css'

export default function Logon(){
    const [id, setId] = useState('')
    const history = useHistory()

    async function handleLogin(e){
        e.preventDefault()
        try {
            const resp = await api.post('/sessions', {id})
            localStorage.setItem('ongId', id)
            localStorage.setItem('ongName', resp.data.name)
            history.push('/profile')
        } catch (err) {
            console.log(err)
            alert('Falha no login. Tente novamente')
        }
    }

    return (
        <div className="logon-container">
            <section className="form">
                <img src={logoImg} alt="Be the hero" />
                <form onSubmit={handleLogin}>
                    <h1>Faça seu logon</h1>
                    <input type="text"
                        value={id}
                        onChange={e => setId(e.target.value)}
                        placeholder="sua id" />
                    <button  className="button" type="submit" >Entrar</button>

                    <Link className="backLink" to="register">
                        <FiLogIn size={16} color="#e02041"  />
                        Não tenho cadastro
                    </Link>
                </form>
            </section>
            <img src={heroesImage} alt="Heroes"/>
        </div>
    )
}