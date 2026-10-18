import { FaFacebookF, FaInstagram, FaWhatsapp, FaTiktok, FaMapMarkerAlt } from 'react-icons/fa'
import { companyName, facebook } from '../data/siteData'
import styles from './Footer.module.css'

const footerSocial = [
  { id: 'facebook', icon: FaFacebookF, href: facebook.href, color: '#c9a24b' },
  { id: 'whatsapp', icon: FaWhatsapp, href: 'https://wa.me/201033715666', color: '#25d366' },
  { id: 'location', icon: FaMapMarkerAlt, href: 'https://maps.app.goo.gl/D2R3JYarPQTkfKNF6?g_st=aw', color: '#ea4335' },
  { id: 'instagram', icon: FaInstagram, href: undefined, color: null },
  { id: 'tiktok', icon: FaTiktok, href: undefined, color: null },
]

function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.brandText}>{companyName}</p>
        <div className={styles.social}>
          {footerSocial.map((item) => {
            const Icon = item.icon
            if (item.href) {
              return (
                <a
                  key={item.id}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className={styles.socialLink}
                  aria-label={item.id}
                >
                  <Icon />
                </a>
              )
            }
            return (
              <span key={item.id} className={styles.socialLink} aria-disabled>
                <Icon />
              </span>
            )
          })}
        </div>
        <div className={styles.divider} />
        <p className={styles.text}>© 2026 جميع الحقوق محفوظة</p>
        <p className={styles.credit}>
          تم التطوير والتنفيذ بواسطة{' '}
          <a
            href="https://commadigitals.com"
            target="_blank"
            rel="noreferrer"
            className={styles.creditLink}
          >
            Comma
          </a>
        </p>
      </div>
    </footer>
  )
}

export default Footer
