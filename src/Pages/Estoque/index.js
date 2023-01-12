import React, { useEffect, useState } from 'react'
import {Filtros,Anuncios,Corpo} from './styles'
import Navbar from '../../components/NavBar/index'
import Footer from '../../components/Footer/index'
import { SiChevrolet } from 'react-icons/si';
import { SiFord } from 'react-icons/si';
import { SiHonda } from 'react-icons/si';
import { SiFiat } from 'react-icons/si';
import { SiVolkswagen } from 'react-icons/si';
import { CiLocationOn } from 'react-icons/ci';
import { AiOutlineHeart } from 'react-icons/ai';
import { SiNissan } from 'react-icons/si';

export default function Estoque() {
  
    const[anuncios,setAnuncios]=useState([])
    const[estado,setEstado]=useState()
    const[marca,setMarca]=useState(" ")
    const[condicao,setCondicao]=useState()


    const url="http://localhost:5000/Anuncios"
    useEffect(()=>{
        fetch(url)
        .then(async response=>{
            setAnuncios(await response.json())
        })
    },[estado || marca || condicao])

    function filtrar(){
        if(!estado==" "){
            const item=anuncios.filter(anuncio=>anuncio.Loc===estado)
            setAnuncios(item)
        }else if(!marca==" "){
            const item=anuncios.filter(anuncio=>anuncio.Marca===marca)
            setAnuncios(item)
        }if(!condicao==" "){
            const item=anuncios.filter(anuncio=>anuncio.Estado===condicao)
            setAnuncios(item)
        }
    }
   
   

    console.log(condicao)

    return (
    <>
        <Navbar/>
        <Corpo>
            <Filtros>
                <button className='carromoto'><b>Carros</b></button>
                <button className='carromoto'><b>Motos</b></button>
                <label><b>Localização</b>
                    <input placeholder='Digite seu estado ou cidade' onChange={(e)=>setEstado(e.target.value)}/>
                </label>
                <h4>Marca do carro</h4>
                <div className='marcas'>
                    <button onClick={()=>setMarca("Chevrolet")}><div><SiChevrolet fontSize="4rem"/><h4>Chevrolet</h4></div></button>
                    <button onClick={()=>setMarca("Fiat")}><div><SiFiat  fontSize="4rem"/><h4>Fiat</h4></div></button>
                    <button onClick={()=>setMarca("Honda")}><div><SiHonda  fontSize="4rem"/><h4>Honda</h4></div></button>
                    <button onClick={()=>setMarca("Ford")}><div><SiFord  fontSize="4rem"/><h4>Ford</h4></div></button>
                    <button onClick={()=>setMarca("Volkswagen")}><div><SiVolkswagen  fontSize="4rem"/><h4>Volkswagen</h4></div></button>
                    <button onClick={()=>setMarca("Nissan")}><div><SiNissan  fontSize="4rem"/><h4>Nissan</h4></div></button>
                </div>
                <h4>Carros</h4>
                <div className='carros'>
                    <input type="checkbox"  onChange={()=>setCondicao("Novo")}></input>
                    Novos
                    <input type="checkbox" onChange={()=>setCondicao("Usado")}></input>
                    Usados
                </div>
                <button className='Filtrar' onClick={()=>filtrar()}>Filtrar</button>
            </Filtros>
            <Anuncios>
                {anuncios.length>0&& anuncios.map((item)=><div key={item.id} className='Anuncio'>
                    <img src={item.img} width="100%"/>
                    <h4>{item.Modelo}</h4>
                    <h2>{(item.Valor).toLocaleString('pt-br', {minimumFractionDigits: 2})}</h2>
                    <div>{item.Estado} {(item.KM)!==0?(item.KM).toFixed(3)+" KM":0+" KM"}</div>
                    <div>{item.Loc}<CiLocationOn/><AiOutlineHeart/></div>
                </div>)}
            </Anuncios>
        </Corpo>
        <Footer/>
    </>
  )
}
