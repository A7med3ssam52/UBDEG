import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
  FaMapMarkerAlt,
} from 'react-icons/fa'
import { FiPhone } from 'react-icons/fi'

export const companyName = 'الأخوة المتحدون'

export const phone = {
  display: '+20 103 771 5666',
  href: 'tel:+201037715666',
  label: 'اتصل الآن',
}

export const facebook = {
  href: 'https://facebook.com/share/1M6j65WJri/?mibextid=wwXlfr',
}

export const contactCards = [
  {
    id: 'phone',
    title: 'الهاتف',
    value: phone.display,
    href: phone.href,
    icon: FiPhone,
    color: '#c9a24b',
    featured: true,
  },
  {
    id: 'facebook',
    title: 'فيسبوك',
    value: 'صفحتنا الرسمية على فيسبوك',
    href: facebook.href,
    icon: FaFacebookF,
    color: '#1877f2',
    featured: false,
  },
]

export const teamMembers = [
  {
    id: 'khaled',
    name: 'خالد عبدالمجيد',
    role: 'مستشار عقاري',
  },
  {
    id: 'mohamed',
    name: 'محمد عبدالمجيد',
    role: 'مستشار عقاري',
  },
]

export const socialLinks = [
  {
    id: 'facebook',
    name: 'فيسبوك',
    icon: FaFacebookF,
    href: facebook.href,
    active: true,
    featured: true,
    color: '#1877f2',
  },
  {
    id: 'instagram',
    name: 'انستجرام',
    icon: FaInstagram,
    href: '#',
    active: false,
    featured: false,
    soon: true,
    color: '#e4405f',
  },
  {
    id: 'whatsapp',
    name: 'واتساب',
    icon: FaWhatsapp,
    href: 'https://wa.me/201037715666',
    active: true,
    featured: false,
    color: '#25d366',
  },
  {
    id: 'location',
    name: 'الموقع',
    icon: FaMapMarkerAlt,
    href: '#',
    active: false,
    lit: true,
    color: '#ea4335',
  },
  {
    id: 'tiktok',
    name: 'تيك توك',
    icon: FaTiktok,
    href: '#',
    active: false,
    featured: false,
    soon: true,
    color: '#010101',
  },
]
