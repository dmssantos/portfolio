import Head from "next/head"

const Contatos = () => {
  return (
    <>
      <Head>
        <title>Contatos | David</title>
      </Head>
      <div className="mt-12 md:mt-24 space-y-8 md:space-y-16 px-6 md:px-32 ">
        <h1 className="text-5xl md:text-7xl font-bold text-center">
          Contatos
        </h1>
        <ul className="table mx-auto space-y-6 md:space-y-8">
          <li className="md:text-xl">
            <span className="font-bold">E-mail</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a href="mailto:dms.santos_@hotmail.com" className="text-sm md:text-lg text-slate-300 underline truncate">dms.santos_@hotmail.com</a>
            </div>
          </li>

          <li className="md:text-xl">
            <span className="font-bold">Linkedin</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a href="https://www.linkedin.com/in/davidsantos" className="text-sm md:text-lg text-slate-300 underline truncate">
                https://www.linkedin.com/in/davidsantos
              </a>
            </div>
          </li>

          <li className="md:text-xl">
            <span className="font-bold">Github</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a href="https://www.github.com/dmssantos" className="text-sm md:text-lg text-slate-300 underline truncate">
                https://www.github.com/dmssantos
              </a>
            </div>
          </li>

          <li className="md:text-xl">
            <span className="font-bold">youtube</span>
            <div className="flex gap-1 md:gap-3 items-center">
              <a href="https://www.youtube.com/dmssantos" className="text-sm md:text-lg text-slate-300 underline truncate">
                https://www.youtube.com/dmssantos
              </a>
            </div>
          </li>
        </ul>
      </div>
    </>
  )
}
export default Contatos


