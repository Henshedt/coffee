import SocialLinks from '@/UI/SocialLinks'
import styles from './Social.module.scss'
import Image from 'next/image'



const Social = () => {
  return <section id='social' className={styles.social}>
    <div className={styles.conten}>
      <h2 className='title dark-bg'> Descubra seus cafés favoritos </h2>
      <p className='dark-bg'>
        Cada xícara é preparada com ingredientes selecionados e muito carinho,
        para que você possa saborear cada momento. Venha nos visitar e
        desfrute de um café de qualidade enquanto se reconecta com o que é
        essencial.
      </p>
      <SocialLinks />
    </div>
    <Image className={styles.image} src='/social.png' alt='Cafés e Plantas' width={380} height={540} />
  </section>
}

export default Social