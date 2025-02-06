import {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom'

import axios from 'axios'

import H1  from '../../components/Title'
import Button from '../../components/Button'
import {Container,NumberOrders,WrapperAmount, Image, Order, TextOrder,TextName,WrapperOrders,ButtonI} from './styles'
import Logo from '../../assets/bagFood.png'
import TrashIcon from '../../assets/trash.svg'


function OrderPage() {

  const navigate = useNavigate()
  const [orders, setOrders] = useState([]);


  useEffect(()=>{

    async function fetchOrders() {
      const {data:newData} = await axios.get('http://localhost:3001/order')
      setOrders(newData)
    }
    fetchOrders()
  },[])


  async function deleteOrder(orderId){
    await axios.delete(`http://localhost:3001/order/${orderId}`)
    
    const newOrders = orders.filter(order=> order.id !==orderId )
    setOrders(newOrders)
    
  }

  function backToPage(){
    navigate('/')
    
  }

  function amountOrders(){
    const amount = orders.length
    return amount
  }


  return (
    <Container>
      <WrapperAmount>
        <Image src={Logo} alt='logo-image'/>  
        <NumberOrders>{amountOrders()}</NumberOrders>
      </WrapperAmount>
      <H1>Pedidos</H1>
      <ul>
        { orders.map((order)=>(
          <Order key={order.id}>
            <WrapperOrders>
              <TextOrder>{order.order}</TextOrder>
              <TextName>{order.clientName}</TextName>
            </WrapperOrders>
            <ButtonI  onClick={()=>deleteOrder(order.id)}>
              <img src={TrashIcon} alt='icon-trash'/>
            </ButtonI>
          </Order>

        ))
        }
      </ul>
      <Button isBlack={true} onClick={backToPage}>Voltar</Button>

    </Container>
  )
}

export default OrderPage
