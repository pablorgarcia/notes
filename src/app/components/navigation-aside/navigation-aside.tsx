import Link from 'next/link';
import styles from './navigation-aside.module.css'

export default function NavigationAside() {
  return (
    <aside className={styles.navigationAside}>
      navigation aside
      <h3>En esta página</h3>
      <ul>
        <li>
          <Link href='/'>link sobre el texto principal</Link>
        </li>
      </ul>
    </aside>
  )
}