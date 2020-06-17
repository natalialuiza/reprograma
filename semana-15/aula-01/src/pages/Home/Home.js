import React from 'react';
import './Home.css';
import logoGoogle from '../../img/google.png';
import Button from '../../components/Button/Button'

function Home() {
  const cliqueButton = () => {
    alert('Oi')
  }
  return (
    <div className="centro">
    <img src={logoGoogle} alt="Logo do Google"/>
    <input type="text"/>
    <div className="box__buttons">
    <Button 
    name="Pesquisa no google"
    clicar={cliqueButton}
    ></Button>
    <Button name="Estou com sorte"></Button> 
    </div>

    </div>

  )
}

export default Home;