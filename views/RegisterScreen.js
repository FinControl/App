import { useNavigation } from '@react-navigation/core'
import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import styleRegister from '../styles/styleRegister'
import * as Animatable from 'react-native-animatable'

const RegisterScreen = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [nome, setNome] = useState('')
  const [msg, setMsg] = useState('')
  
  const checkPassword = () => {
    if (password.length<8) {
      setMsg("A senha deve possuir 8 ou mais caracteres.")
      return false
    } 
    if (password != confirmPassword) {
      setMsg("As senhas não são iguais.")
      return false
    } 
    if (password.length >= 8 && password==confirmPassword) {
      return true
    }
  }

  const checkCampos = () => {
    if (email=='') {
      setMsg("Todos os campos devem estar preenchidos")
      return false
    }
    if (password=='') {
      setMsg("Todos os campos devem estar preenchidos")
      return false
    }
    if (confirmPassword=='') {
      setMsg("Todos os campos devem estar preenchidos")
      return false
    }
    
    if (nome=='') {
      setMsg("Todos os campos devem estar preenchidos")
      return false
    }
    
    if (email!= '' && password!= '' && nome!= '' && confirmPassword!= '' ){
      setMsg("")
      return true
    }
  }

  const checkEmail = () => {
    const verifica = email.match(
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
    if (verifica) {
      setMsg('')
      return true
    } else {
      setMsg("E-mail inválido.")
      return false
    }
  };


  const createUser = () => {
    checkCampos();
    checkPassword();
    checkEmail();
    if (checkCampos() && checkPassword() && checkEmail()){
      fetch('http://localhost:3301/create', 
    {
      method: 'POST',
      body: JSON.stringify({
        email: email,
        senha: password,
        nome: nome
  }),
  headers: {
    'Content-type': 'application/json; charset=UTF-8',
  },
}).then((response) => {
      if (response.status == 200) {
        setMsg("Usuário cadastrado com sucesso.")
      } else {
        setMsg("Usuário já cadastrado.")
      }
    })
    }
  }

  return (
    <Animatable.View
    animation="fadeInRight"
    style={styleRegister.container}
    behavior="height"
    enabled
  >
    <View
    style={styleRegister.containerTexto}>
      <Text style={styleRegister.textoPrincipal}> Crie sua conta </Text>
    </View>
    <View
    style={styleRegister.containerRegister}
    >
      <Text> {msg} </Text>
      <Text style={styleRegister.textFormulario}>
        Nome
      </Text>
      <TextInput
      maxLength={200}
      onChangeText={(value) => setNome(value)}
      style={styleRegister.textoInput}
      placeholder="Insira seu nome."
      placeholderTextColor="#959595"
      />
      <Text style={styleRegister.textFormulario}>
        E-mail
      </Text>
      <TextInput
      maxLength={200}
      onChangeText={(value) => setEmail(value)}
      style={styleRegister.textoInput}
      placeholder="Insira seu e-mail."
      placeholderTextColor="#959595"
      />
      <Text
      style={styleRegister.textFormulario}>
        Senha
      </Text>
      <TextInput 
      maxLength={32}
      onChangeText={(value) => setPassword(value)}
      style={styleRegister.textoInput}
      placeholder="Insira sua senha."
      placeholderTextColor="#959595"
      secureTextEntry={true}
      />
      <Text style={styleRegister.textFormulario}>
        Confirme a senha
      </Text>
      <TextInput
      maxLength={32}
      onChangeText={(value)=>setConfirmPassword(value)}
      style={styleRegister.textoInput}
      placeholder="Insira sua senha novamente."
      placeholderTextColor="#959595"
      secureTextEntry={true}
      />

      <TouchableOpacity
      style={styleRegister.botaoRegister}
      onPress={() => {createUser()}}
      >
        <Text>Registrar</Text>
      </TouchableOpacity>

    </View>
  </Animatable.View>
  )
}

export default RegisterScreen