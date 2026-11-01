import './style.css'

export default function Footer() {
  return (
    <footer className='footer'>
      <div className='footer__inner'>
        <div className='footer__links'>
          <span>Regulamentos e Promoções</span>
          <span>Política de Privacidade</span>
          <span>Preciso de Ajuda</span>
        </div>

        <p>
          &copy; {new Date().getFullYear()} - Todos os direitos reservados.
          <br />
          ASHOW MARKETING DE SERVIÇOS LTDA
        </p>
      </div>
    </footer>
  )
}