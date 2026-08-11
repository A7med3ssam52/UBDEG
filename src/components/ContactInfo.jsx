import { contactInfo } from '../data/siteData'
import styles from './ContactInfo.module.css'

function ContactInfo() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title reveal">
          <h2>معلومات التواصل</h2>
          <p>يمكنكم التواصل معنا عبر الهاتف أو زيارة صفحتنا على فيسبوك</p>
        </div>
        <div className={styles.grid}>
          {contactInfo.map((item, index) => {
            const Icon = item.icon
            return (
              <article
                key={item.id}
                className={`glass-card ${styles.card}`}
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                <div className={styles.cardHeader}>
                  <span className="icon-circle">
                    <Icon />
                  </span>
                  <h3>{item.title}</h3>
                </div>
                <p className={styles.value}>{item.value}</p>
                <a
                  href={item.href}
                  target={item.id === 'facebook' ? '_blank' : undefined}
                  rel={item.id === 'facebook' ? 'noreferrer' : undefined}
                  className="btn-ghost"
                >
                  {item.label}
                </a>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default ContactInfo
