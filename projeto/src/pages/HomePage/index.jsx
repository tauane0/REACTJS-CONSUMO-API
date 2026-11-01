import { Link } from 'react-router-dom'
import './style.css'

const vantagens = [
  { icon: '✦', title: 'Preços especiais', desc: 'Ofertas para deixar seus momentos ainda mais gostosos.' },
  { icon: '♡', title: 'Presente de aniversário', desc: 'Um carinho especial para celebrar o seu dia.' },
  { icon: '✧', title: 'Promoções exclusivas', desc: 'Novidades e oportunidades feitas para Lovers.' },
  { icon: '❋', title: 'Níveis e conquistas', desc: 'Cada experiência abre portas para novas vantagens.' },
  { icon: '◇', title: 'Resgates especiais', desc: 'Escolha recompensas que combinam com você.' },
  { icon: '⌂', title: 'Vantagens online', desc: 'Seus favoritos e benefícios sempre por perto.' },
]

const passos = [
  { numero: '01', titulo: 'Faça parte', texto: 'Crie seu perfil e entre para o universo Lovers.' },
  { numero: '02', titulo: 'Viva experiências', texto: 'Descubra novidades, benefícios e momentos especiais.' },
  { numero: '03', titulo: 'Aproveite', texto: 'Escolha suas vantagens e celebre do seu jeito.' },
]

export default function HomePage() {
  return (
    <div className='home-page'>
      <section className='hero-banner'>
        <div className='hero-banner__content'>
          <span className='hero-banner__tag'><span aria-hidden='true'>✦</span> Um clube feito para celebrar</span>
          <h1>Seu dia mais doce.<br /><em>Começa aqui.</em></h1>
          <p>
            Tem sempre um motivo para tornar o dia mais especial. Descubra um
            mundo de vantagens, novidades e momentos deliciosos.
          </p>

          <div className='hero-banner__actions'>
            <Link to='/cadastro' className='button button-primary'>Quero fazer parte <span aria-hidden='true'>→</span></Link>
            <a href='#beneficios' className='hero-banner__secondary'>Conheça as vantagens <span aria-hidden='true'>↓</span></a>
          </div>
          <div className='hero-banner__note'><span aria-hidden='true'>♡</span> Seu próximo momento favorito começa aqui</div>
        </div>

        <div className='hero-art' aria-label='Ilustração de presente e chocolates' role='img'>
          <div className='hero-art__halo'></div>
          <div className='hero-art__spark hero-art__spark--one'>✦</div>
          <div className='hero-art__spark hero-art__spark--two'>✧</div>
          <div className='hero-art__gift'>
            <div className='hero-art__gift-lid'></div>
            <div className='hero-art__gift-box'></div>
            <div className='hero-art__ribbon'></div>
            <div className='hero-art__bow'></div>
          </div>
          <div className='hero-art__chocolate hero-art__chocolate--one'><span>✦</span></div>
          <div className='hero-art__chocolate hero-art__chocolate--two'><span>♡</span></div>
          <div className='hero-art__chocolate hero-art__chocolate--three'><span>✧</span></div>
          <div className='hero-art__caption'><span>feito para</span><strong>compartilhar</strong></div>
        </div>
      </section>

      <section className='benefits' id='beneficios'>
        <div className='section-heading'>
          <div>
            <span className='eyebrow'>Um carinho em cada detalhe</span>
            <h2 className='section-title'>Vantagens para amar</h2>
          </div>
          <p className='section-subtitle'>Mais do que chocolate: experiências para deixar a vida mais doce.</p>
        </div>

        <div className='benefits__grid'>
          {vantagens.map((item, index) => (
            <article key={item.title} className='benefit-card'>
              <span className={`benefit-card__icon benefit-card__icon--${index + 1}`} aria-hidden='true'>{item.icon}</span>
              <div>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
              <span className='benefit-card__arrow' aria-hidden='true'>↗</span>
            </article>
          ))}
        </div>
      </section>

      <section className='steps'>
        <div className='steps__intro'>
          <span className='eyebrow'>É simples assim</span>
          <h2 className='section-title'>Uma experiência<br />que combina com você.</h2>
          <p className='section-subtitle'>Entre para o clube e aproveite cada etapa do seu jeito.</p>
          <Link to='/cadastro' className='button button-secondary'>Começar agora <span aria-hidden='true'>→</span></Link>
        </div>

        <div className='steps__grid'>
          {passos.map((passo) => (
            <article key={passo.numero} className='step-card'>
              <span className='step-card__number'>{passo.numero}</span>
              <h3>{passo.titulo}</h3>
              <p>{passo.texto}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  )
}
