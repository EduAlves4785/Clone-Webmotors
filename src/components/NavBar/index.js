import React from 'react'
import {NavBar,Btn,BoxUser} from './styles'
import logo from '../../assets/logo.png'
import { BiHome, BiUserCircle } from 'react-icons/bi';
import { AiOutlineHeart } from 'react-icons/ai';
import {TiMessages} from 'react-icons/ti';
import {BiBell} from 'react-icons/bi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <NavBar>
      <Link to="/">
          <img src={logo} width="150px" alt='Logo webmotors'/>
      </Link>
      <Btn>Comprar</Btn>
      <Btn>Vender</Btn>
      <Btn>Serviços</Btn>
      <Btn>Notícias WM1</Btn>
      <Btn>Ajuda</Btn>
      <BoxUser>
        <BiUserCircle/>
        <h6>Entrar</h6>
        <AiOutlineHeart/>
        <TiMessages/>
        <BiBell/>
      </BoxUser>
    </NavBar>
  )
}

