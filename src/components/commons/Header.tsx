import Link from "next/link"

const Header = () => {
  return (
    <>
      <header>
        <Link href="/">
          <img src="/favicon.ico" alt="Ícone" />
        </Link>
        <nav>
          <Link href="/">Sobre mim</Link>
          <Link href="/portfolio">Portfolio</Link>
          <Link href="/contatos">Entre em contato</Link>
        </nav>
      </header>
    </>
  )
}
export default Header