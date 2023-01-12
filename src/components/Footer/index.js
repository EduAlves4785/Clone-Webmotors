import React from 'react'
import {Rodape,Faixa,Elementos} from './styles'
import logo2 from '../../assets/logo2.png'

export default function Footer() {
  return (
    <Rodape>
        <Faixa>Nossos canais de atendimento são 100% digitais.Precisa de ajuda?<strong>CLIQUE AQUI</strong></Faixa>
        <Elementos>
            <div>
                <h3>Comprar</h3>
                <a>Carros usados</a>
                <a>Carros novos</a>
                <a>Motos usadas</a>
                <a>Motos novas</a>
                <a>Compra Certificada</a>
            </div>
            <div>
                <h3>Serviços</h3>
                <a>Tabela FIPE</a>
                <a>Financiamento</a>
                <a>Catálogo 0km</a>
                <a>Compra certificada</a>
                <a>Plataforma revedendores</a>
                <a>Seguro veículo</a>
                <a>Autoinsights</a>
            </div>
            <div>
                <h3>Notícias WM1</h3>
                <a>Portal</a>
                <a>Últimas notícias</a>
                <a>Testes</a>
                <a>Comparativos</a>
                <a>Vídeos</a>
                <a>Segredos</a>
            </div>
            <div>
                <h3>Ajuda</h3>
                <a>Para você</a>
                <a>Para a sua loja</a>
                <a>Segurança</a>
                <a>Sobre nós</a>
                <a>Trabalhe com a gente</a>
            </div>
            <div>
                <h3>Políticas</h3>
                <a>Canal de ética</a>
                <a>Cód.Defesa do Consumidor</a>
                <a>Gerenciamento de cookies</a>
                <a>Política de privacidade</a>
                <a>Termos de uso</a>
            </div>
        </Elementos>
        <Faixa>Uma empresa <img src={logo2} alt='Logo santander' width="100px"/></Faixa>
        <p><span dangerouslySetInnerHTML={{ "__html": "&copy;" }} />1995-2023 S.A Todos os direitos reservados.</p>
    </Rodape>
  )
}
