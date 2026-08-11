import { teamMembers } from '../data/siteData'
import styles from './Team.module.css'

function Team() {
  return (
    <section className="section">
      <div className="container">
        <div className="section-title">
          <h2>فريق العمل</h2>
          <span />
        </div>
        <div className={styles.grid}>
          {teamMembers.map((member) => (
            <article key={member.id} className={`glass-card ${styles.card}`}>
              <div className={styles.avatar}>{member.name.charAt(0)}</div>
              <h3 className={styles.name}>{member.name}</h3>
              <p className={styles.role}>{member.role}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
