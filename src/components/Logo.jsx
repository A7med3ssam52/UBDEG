import logo from '../../images/logo.jpg'
import styles from './Logo.module.css'

function Logo({ size = 42, circle = false }) {
  return (
    <img
      src={logo}
      alt="الأخوة المتحدون"
      width={size}
      height={size}
      className={`${styles.img} ${circle ? styles.circle : ''}`}
    />
  )
}

export default Logo
