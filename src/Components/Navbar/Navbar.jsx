import Link from 'next/link'
import Image from 'next/image'
import styles from './Navbar.module.scss'
import Logo from '@/UI/Logo';

const links = [
  {url: '#', text: 'Produtos'},
  {url: '#', text: 'Sobre'},
  {url: '#', text: 'Social'},
  {url: '#', text: 'Depoimentos'},
];

const Navbar = () => {
  const renderLinks = links.map((link, i) => (
    <li key={i}>
      <Link href={link.url}>{link.text}</Link>
     </li>
)) 
  return <section className={styles.navbar}>
    <nav className={styles.navigation}>
      <ul>
        {renderLinks.slice(0,2)}
      </ul>
    </nav>

    <div className={styles.logo}>
      <Logo />
    </div>

    <nav className={styles.navigation}>
      <ul>
      <ul>
        {renderLinks.slice(2,4)}
      </ul>
      </ul>
    </nav>
  </section>
}

export default Navbar