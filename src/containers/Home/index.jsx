import {useRef} from 'react'
import { useNavigate } from 'react-router-dom';

import axios from 'axios';



import {Container, Image, InputLabel,Input} from './styles'
import Button from '../../components/Button';
import  H1  from '../../components/Title';
import Logo from '../../assets/logo.svg'


function App() {
  const navigate = useNavigate()
  const inputClientName = useRef();
  const inputOrderDetails = useRef();

// TODO:CORRIGIR FALHA PARA SO ENVIAR OS DADOS APOS PREENCHIMENTO DOS CAMPOS
  async function addNewOrder () {
    
    const {data:newData} = await axios.post('http://localhost:3001/order', {
      order:inputOrderDetails.current.value,
      clientName:inputClientName.current.value
    })

    console.log(newData);
    navigate('/order')


  }


  return (
    <Container>
      <Image src={Logo} alt='logo-image'/>
      <H1>Faça seu pedido!</H1>
      <InputLabel  htmlFor='pedido'>Pedido</InputLabel>
      <Input  ref={inputOrderDetails} id='pedido' placeholder="Digite seu pedido"/>
      <InputLabel htmlFor='nomeCliente'>Nome do Cliente</InputLabel>
      <Input  ref={inputClientName} id='nomeCliente' placeholder="Digite seu nome"/>
      <Button onClick={addNewOrder}>Novo Pedido</Button>
    </Container>
  )
}

export default App
