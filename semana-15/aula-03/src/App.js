import React from 'react';
import './App.css';
import Card from './components/Card/Card'
import Batman from './img/batman.jpg'
import Superman from './img/superman.jpeg'
import MulherMaravilha from './img/mulhermaravilha.jpeg'
import Input from './components/Input/Input'

function App() {
  return (
    <>
    <Input />
    <Card 
     titulo="Batman"
     arquivo={Batman}
     texto= "Eu sou batman"
     />
    <Card 
    titulo="SuperMan"
    arquivo={Superman}
    texto= "Eu sou superman"
    />
   <Card 
     titulo="Mulher Maravilha"
     arquivo={MulherMaravilha}
     texto= "Eu sou a Mulher Maravilha"
     />
    </>
  );
}

export default App;
