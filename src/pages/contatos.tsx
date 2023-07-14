import Head from "next/head"

const Contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos | David</title>
      </Head>
      <div>
        <h1>Contatos</h1>
        <ul>
          <li>
            <span>E-mail</span>
            <div>
              <a href="mailto:dms.santos_@hotmail.com">dms.santos_@hotmail.com</a>
            </div>
          </li>

          <li>
            <span>Linkedin</span>
            <div>
              <a href="https://www.linkedin.com/in/davidsantos">https://www.linkedin.com/in/davidsantos</a>
            </div>
          </li>

          <li>
            <span>Github</span>
            <div>
              <a href="https://www.github.com/dmssantos">https://www.github.com/dmssantos</a>
            </div>
          </li>

          <li>
            <span>youtube</span>
            <div>
              <a href="https://www.youtube.com/dmssantos">https://www.youtube.com/dmssantos</a>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Contatos


