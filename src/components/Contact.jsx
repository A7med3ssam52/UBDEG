import { contactCards } from '../data/siteData'
import styles from './Contact.module.css'

function Contact() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>معلومات التواصل</h2>
          <span />
        </div>
        <div className={styles.grid}>
          {contactCards.map((card) => {
            const Icon = card.icon
            return (
              <a
                key={card.id}
                href={card.href}
                target={card.href.startsWith('http') ? '_blank' : undefined}
                rel={card.href.startsWith('http') ? 'noreferrer' : undefined}
                className={styles.card}
                style={{ '--card-color': card.color }}
              >
                <Icon className={styles.icon} />
                <span className={styles.label}>{card.title}</span>
                <span className={styles.value}>{card.value}</span>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Contact
