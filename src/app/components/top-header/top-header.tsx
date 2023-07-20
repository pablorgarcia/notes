import TopHamburguer from '../top-hamburguer/top-hamburguer';
import styles from './top-header.module.css'


export default function TopHeader() {
  return (
    <header className={styles.header}>
      <h1>Pablo García</h1>
      <TopHamburguer></TopHamburguer>
    </header>
  )
}
