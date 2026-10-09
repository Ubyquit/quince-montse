'use client'

import { useEffect, useState } from 'react'
import { ArrowDown, ArrowUp, CalendarDays, Check, Clock3, Crown, Heart, MapPin, MessageCircle, Sparkles, Shirt, Star } from 'lucide-react'

const dressImage = '/rose-curtain-background.jpg'
const invitationImage = 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Image%202026-09-27%20at%2017.57.22-6NVDhYXe8yuvyae9j4Y0j8PPTKevLi.jpeg'
const eventDate = new Date('2026-10-31T21:00:00-06:00').getTime()

function Ornament({ className = '' }: { className?: string }) {
  return <div aria-hidden="true" className={`ornament ${className}`}><span /><i>✦</i><span /></div>
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return <div className="section-heading"><p>{eyebrow}</p><h2>{title}</h2><Ornament /></div>
}

function Countdown() {
  const [remaining, setRemaining] = useState(0)
  useEffect(() => {
    const updateRemaining = () => setRemaining(eventDate - Date.now())
    updateRemaining()
    const timer = window.setInterval(updateRemaining, 1000)
    return () => window.clearInterval(timer)
  }, [])
  const expired = remaining <= 0
  const seconds = expired ? 0 : Math.floor(remaining / 1000)
  const values = [Math.floor(seconds / 86400), Math.floor((seconds % 86400) / 3600), Math.floor((seconds % 3600) / 60), seconds % 60]
  return <div className="countdown" aria-live="polite">{expired ? <p className="today">Hoy es el gran día</p> : values.map((value, index) => <div className="count-unit" key={index}><strong>{String(value).padStart(2, '0')}</strong><span>{['Días', 'Horas', 'Minutos', 'Segundos'][index]}</span></div>)}</div>
}

function Calendar() {
  const days = Array.from({ length: 31 }, (_, i) => i + 1)
  return <div className="calendar-card"><div className="calendar-top"><CalendarDays aria-hidden="true" /><span>OCTUBRE</span><b>2026</b></div><div className="weekdays">{['D', 'L', 'M', 'M', 'J', 'V', 'S'].map((day, i) => <span key={`${day}-${i}`}>{day}</span>)}</div><div className="calendar-grid">{Array.from({ length: 4 }, (_, i) => <span key={`blank-${i}`} />)}{days.map(day => <span className={day === 31 ? 'event-day' : ''} key={day}>{day === 31 && <Crown aria-hidden="true" />}{day}</span>)}</div></div>
}

export default function QuinceInvitation() {
  return <main className="invitation-site">
    <a className="skip-link" href="#contenido">Ir al contenido</a>
    <section className="hero" aria-label="Invitación de XV años">
      <div className="hero-image" style={{ backgroundImage: `url(${dressImage})` }} />
      <div className="hero-wash" />
      <div className="hero-content">
        <p className="hero-kicker">Con la bendición de Dios</p><div className="hero-rule" />
        <p className="roman">XV</p><p className="script hero-name">Rubí<br />Montserrat</p><p className="hero-surname">DIAZ MEDINA</p>
        <div className="hero-divider"><Crown aria-hidden="true" /><span /></div><p className="hero-event">Mis XV años</p><p className="hero-date">Sábado 31 de octubre de 2026</p>
      </div>
      <a href="#contenido" className="scroll-cue"><span>Desliza para descubrir</span><ArrowDown aria-hidden="true" /></a>
    </section>

    <div id="contenido" className="content-shell">
      <section className="intro section-frame reveal"><SectionHeading eyebrow="Una noche para recordar" title="Rubí Montserrat Diaz Medina" /><p className="lead">Hay momentos que guardamos para siempre en el corazón. Hoy quiero compartir contigo la alegría de celebrar una etapa muy especial de mi vida.</p><div className="floral-line">❧ <span>❧</span> ❧</div></section>

      <section className="parents section-frame reveal"><div className="invite-card"><div className="card-corner top-left" /><div className="card-corner bottom-right" /><Heart className="card-heart" aria-hidden="true" /><p className="eyebrow">Con gran alegría</p><h2 className="script">Daniel Josue Díaz Vargas<br /><small>y</small><br />Yolanda Rubi Medina Nuñez</h2><Ornament /><p>Tienen el honor de invitarle a usted y a su apreciable familia a la celebración de los XV años de su querida hija</p><h3 className="script card-name">Rubí Montserrat<br />Diaz Medina</h3></div></section>

      <section className="verses section-frame reveal"><SectionHeading eyebrow="Con fe y gratitud" title="Palabras que guían" /><div className="verse-grid"><blockquote><Star aria-hidden="true" /><p>“Señor: guárdame como la niña de tus ojos; escóndeme bajo la sombra de tus alas.”</p><cite>— Salmos 17:8</cite></blockquote><blockquote><Star aria-hidden="true" /><p>“Porque tú formaste mis entrañas; tú me hiciste en el vientre de mi madre.”</p><cite>— Salmos 139:13</cite></blockquote><blockquote><Star aria-hidden="true" /><p>“Grandes cosas ha hecho Jehová con nosotros; estaremos alegres.”</p><cite>— Salmos 126:3</cite></blockquote></div></section>

      <section className="date-section reveal"><div className="date-copy"><p className="eyebrow">Aparta la fecha</p><h2><span className="date-weekday">Sábado</span><span className="date-crown"><Crown aria-hidden="true" /></span><strong>31</strong><span className="date-month">Octubre 2026</span></h2><div className="time"><Clock3 aria-hidden="true" /> 9:00 PM</div><Countdown /></div><Calendar /></section>

      <section className="details section-frame reveal"><SectionHeading eyebrow="El lugar de nuestra celebración" title="Una velada especial" /><div className="location-card"><div className="location-art"><img src="/le-parisien-logo.png" alt="Le Parisien Salón de Eventos" /></div><div className="location-copy"><h3>LE PARISIEN</h3><p className="location-type">Salón de eventos</p><p className="detail-date">Sábado · 31 de octubre · 2026</p><p className="detail-time">9:00 PM</p><a className="gold-button" href="https://maps.app.goo.gl/B2KPRTVAPUG5zRTW9" target="_blank" rel="noreferrer"><MapPin data-icon="inline-start" /> Ver ubicación</a></div></div><div className="thanks"><div><p className="eyebrow">ACCIÓN DE GRACIAS</p><p>En el mismo lugar</p></div><strong>9:30 PM</strong></div></section>

      <section className="dress section-frame reveal"><div className="dress-icon"><Shirt aria-hidden="true" /></div><SectionHeading eyebrow="Para una noche de gala" title="Código de vestimenta" /><p className="dress-title">Gala y elegante</p><p className="dress-note">Nota: no se permite asistir con vestimenta de color dorado o ivory.</p></section>

      <section className="rsvp section-frame reveal"><SectionHeading eyebrow="Tu presencia es mi mejor regalo" title="Será un honor contar contigo" /><p>Confirma tu asistencia y acompáñanos a celebrar esta noche tan especial.</p><div className="rsvp-actions"><a className="rsvp-button" href="https://wa.link/n1xa5s" target="_blank" rel="noreferrer"><MessageCircle data-icon="inline-start" /> Confirmación con la mamá</a><a className="rsvp-button" href="https://wa.link/xn4d05" target="_blank" rel="noreferrer"><MessageCircle data-icon="inline-start" /> Confirmación con el papá</a></div></section>

      <section className="gifts section-frame reveal"><div className="gift-panel"><div className="gift-brand">Mesa de<br /><strong>REGALOS</strong></div><p className="gift-message">Tu presencia es mi verdadero regalo,<br />pero si deseas hacerme un detalle, lo<br />agradeceré de corazón.</p><div className="gift-icons" aria-hidden="true"><img src="/gift-envelope.png" alt="" /><img src="/gift-box.png" alt="" /></div><p className="gift-note">También tendré<br />lluvia de sobres<br />en el evento.</p></div></section>
    </div>

    <footer className="footer"><div className="footer-flowers">❀ ❁ ❀</div><p>Gracias por ser parte de este día tan especial.</p><p className="script footer-name">Rubí Montserrat</p><p className="footer-xv">XV</p><div className="footer-date">31 <span>•</span> 10 <span>•</span> 2026</div><a className="back-top" href="#"><ArrowUp aria-hidden="true" /> <span className="sr-only">Volver al inicio</span></a></footer>
  </main>
}

export { invitationImage }
