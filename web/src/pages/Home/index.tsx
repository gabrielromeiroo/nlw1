import React from 'react'
import { Link } from 'react-router-dom'
import './Home.css'
// import { FiLoginIn } from 'react-icons/fi'

import logo from './../../assets/logo.svg'

const Home = () =>{
    return (
        <div id="page-home">
            <div className="content">
                <header>
                <img src={logo} alt='Ecoleta' />
                </header>
                <main>
                    <h1>Seu marktplace de coleta de resíduos</h1>
                    <p>Ajudamos pessoas a encontrarem pontos de coleta de forma eficiente</p>
                    <Link to='/create-point'>
                        <span>
                            {/* <FiLoginIn /> */}
                        </span>
                        <strong>Cadastre um ponto de coleta</strong>
                    </Link>
                
                </main>
            </div>
        </div>
    )
}

export default Home