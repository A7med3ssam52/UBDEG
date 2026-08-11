import { socialLinks } from '../data/siteData'
import styles from './Social.module.css'

function Social() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>تابعنا</h2>
          <span />
        </div>
        <div className={styles.grid}>
          {socialLinks.map((social) => {
            const Icon = social.icon
            if (social.featured) {
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={`${styles.card} ${styles.featured}`}
                >
                  <Icon className={styles.featuredIcon} />
                  <span className={styles.label}>تابعنا على فيسبوك</span>
                  <span className={styles.value}>{social.name}</span>
                </a>
              )
            }
            if (social.active) {
              return (
                <a
                  key={social.id}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.card}
                  style={{ '--card-color': social.color }}
                >
                  <Icon className={styles.icon} />
                  <span className={styles.label}>{social.name}</span>
                  <span className={styles.value}>تواصل معنا الآن</span>
                </a>
              )
            }
            if (social.lit) {
              return (
                <div
                  key={social.id}
                  className={`${styles.card} ${styles.lit}`}
                  style={{ '--card-color': social.color }}
                >
                  <Icon className={styles.icon} />
                  <span className={styles.label}>{social.name}</span>
                </div>
              )
            }
            return (
              <div key={social.id} aria-disabled className={`${styles.card} ${styles.disabled}`}>
                <Icon className={styles.icon} />
                <span className={styles.label}>{social.name}</span>
                {social.soon && <span className={styles.soon}>قريبًا</span>}
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Social
