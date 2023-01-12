import React, { useState,useEffect } from 'react'
import {Content,InputBox,ButtonInputBox,InputPesquisa,BntOfertas} from './styles'
import Carousel from 'react-elastic-carousel'
import img1 from '../../assets/img1.png'
import img2 from '../../assets/img2.png'
import { Link } from 'react-router-dom'

export default function Body() {

  const[ofertas,setOfertas]=useState([])
  const url="http://localhost:5000/Anuncios"

  useEffect(()=>{
    fetch(url)
    .then(async response=>{
        setOfertas(await response.json())
    })
  })

  return (
    <Content>
        <Carousel className='Carousel' itemsToShow={1} enableAutoPlay autoPlaySpeed={3500}>
            <img src={img1} width="150%" height="300px"/>
            <img src={img2} width="150%" height="300px"/>
        </Carousel>
        <InputBox>
            <ButtonInputBox><b>Comprar carros</b></ButtonInputBox>
            <ButtonInputBox><b>Comprar motos</b></ButtonInputBox>
            <ButtonInputBox><b>Quero vender</b></ButtonInputBox>
            <ButtonInputBox><b>Quero financiar</b></ButtonInputBox>
            <InputPesquisa placeholder='Digite marca ou modelo do carro'/>
            <Link to="/estoque"><BntOfertas>Ver ofertas {ofertas.length}</BntOfertas></Link>
        </InputBox>
    </Content>
  )
}
