import { useEffect, useState } from 'react'
import { FiPhone } from 'react-icons/fi'
import Logo from './Logo'
import { companyName, phone } from '../data/siteData'
import styles from './Header.module.css'

function Header() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.headerBg} />
      <div className={styles.inner}>
        <a href="#top" className={styles.brand}>
          <span className={styles.logo}>
            <Logo size={42} circle />
          </span>
          <span className={styles.title}>{companyName}</span>
        </a>
        <a href={phone.href} className={styles.callBtn}>
          <FiPhone className={styles.callIcon} />
          <span className={styles.callText}>اتصل بنا</span>
        </a>
      </div>
    </header>
  )
}

export default Header
