'use client'
import Link from 'next/link';
import styles from './top-hamburguer.module.css'
import React, { useState } from 'react'

const links = [
  {
    label: 'Home, mi info. main, tech, contacto',
    route: '/'
  },
  {
    label: 'Writing. post de guias angular, next, js...',
    route: '/writing'
  },
  {
    label: 'Interest. youtube..',
    route: '/interest'
  },
  {
    label: 'Open Source. api github',
    route: '/open-source'
  }
]

const contacts = [
  {
    label: 'LinkdeIn',
    route: 'https://www.linkedin.com/in/prgarcia/'
  },
  {
    label: 'GitHub',
    route: 'https://github.com/pablorgarcia'
  },
]

export default function TopHamburguer() {
  // Hamburguer state
  const [isOpen, setIsOpen] = useState(false);
  // Handles the opening and closing of our hamburguer
  const handleClick = () => {
    setIsOpen(!isOpen);
    console.log(isOpen)
  };

  return (
    <div>

      <button className={styles.todo} onClick={handleClick}>
        <span className={isOpen ? 'rotate-45 translate-y-1' : '-translate-y-05'}></span>
        <span className={isOpen ? 'opacity-0' : 'opacity-100'}></span>
        <span className={isOpen ? '-rotate-45 -translate-y-1' : 'translate-y-05'}></span>
      </button>

      <nav>
        <ul className={styles.links}>
          {links.map(({label, route}) => (
            <li key={route}><Link href={route}>{label}</Link></li>
            ))}
        </ul>
        <ul className={styles.contacts}>
          {contacts.map(({label, route}) => (
            <li key={route}><Link href={route}>{label}</Link></li>
            ))}
        </ul>
      </nav>

    </div>
  )
}
