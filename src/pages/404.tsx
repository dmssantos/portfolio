import Head from "next/head"
import Link from "next/link"

const NotFound = () => {
  return (
    <>
    <Head>
      <title>404 | David</title>
    </Head>
    <div>
      <h1>404</h1>
      <div>
        <p>Oops, não conseguimos encontrar essa página</p>
        <span>Clique no botão abaixo para para ser redirecionado para a págian inicial</span>
      </div>
      <Link href="/">Ir para a página inicial</Link>
    </div>
    </>
  )
}
export default NotFound