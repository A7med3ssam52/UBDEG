import { FiPhoneCall } from 'react-icons/fi'
import Logo from './Logo'
import { phone } from '../data/siteData'
import styles from './Hero.module.css'

function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.bg}>
        <div className={`${styles.blob} ${styles.blobGold}`} />
        <div className={`${styles.blob} ${styles.blobBlue}`} />
      </div>
      <div className={styles.content}>
        <div className={styles.logoWrapper}>
          <span className={styles.logo}>
            <Logo size={120} circle />
          </span>
        </div>
        <h1 className={styles.title}>تواصل معنا</h1>
        <p className={styles.subtitle}>الأخوة المتحدون للعقارات</p>
        <p className={styles.description}>
          نسعد بالإجابة على جميع استفساراتكم المتعلقة بشراء وبيع واستثمار
          العقارات. فريقنا جاهز لخدمتكم في أي وقت.
        </p>
        <a href={phone.href} className={styles.cta}>
          <FiPhoneCall />
          اتصل الآن
        </a>
      </div>
    </section>
  )
}

export default Hero
