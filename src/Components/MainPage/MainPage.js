import React from 'react'
import {MainContainer, Form, Input} from './styles'
import { useState } from 'react'

function MainPage() {

  function onChangeNome(event){
    console.log(event.target.value)
    setNome(event.target.value)
  }
  function onChangeIdade(event){
    console.log(event.target.value)
    setIdade(event.target.value)
  }
  function onChangeEmail(event){
    console.log(event.target.value)
    setEmail(event.target.value)
  }

  function onClick(){
    console.log({nome, idade, email})
    setNome("")
    setIdade("")
    setEmail("")
  }

  const [nome, setNome] = useState("")

  const [idade, setIdade] = useState("")

  const [email, setEmail] = useState("")

  return (
    <MainContainer>
      <h2>Formulário de inscrição</h2>
      <Form>
        <label>
          Nome:
          <Input
          type={"text"}
          placeholder={"Digite seu nome"}
          value={nome}
          onChange={onChangeNome}
          />
        </label>       
        <label>
          Idade:
          <Input
          type={"number"}
          placeholder={"Digite sua idade"}
          value={idade}
          onChange={onChangeIdade}
          />
        </label>
        <label>
          E-mail:
          <Input 
          type={"text"}
          placeholder={"Digite seu email"}
          value={email}
          onChange={onChangeEmail}
          />
        </label>

      <button onClick={onClick}>Enviar dados</button>
      </Form>
    </MainContainer>
  )
}

export default MainPage