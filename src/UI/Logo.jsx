import Link from 'next/link'
import Image from 'next/image'

const Logo = () => {
  return (
    <Link href='/'><Image src='/logo.svg' alt='Bubble Coffee' width={77} height={38} /></Link>
  )
}

export default Logo