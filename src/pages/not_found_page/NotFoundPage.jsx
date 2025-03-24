import './NotFoundPage.css'
import { Link } from 'react-router'

export default function NotFoundPage() {
  return (
    <>
      <h1>A página solicitada não foi encontrada! Aperte o botão abaixo para navegar até a HOME</h1>
      <Link to="/"><button>Voltar</button></Link>
    </>
  )
}
