import Link from 'next/link';
import styles from './top-header.module.css'

const links = [
  {
    label: 'Home',
    route: '/'
  }, 
  {
    label: 'notes',
    route: '/notes'
  }
]

export default function TopHeader() {
  return (
    <header className={styles.header}>
      top header
      <nav>
        <ul>
          {links.map(({label, route}) => (
            <li key={route}><Link href={route}>{label}</Link></li>
          ))}
        </ul>
      </nav>
    </header>
  )
}