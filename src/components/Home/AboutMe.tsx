import Image from "next/image"
import Link from "next/link"
import { Roboto } from 'next/font/google';

const roboto = Roboto({
  subsets: ['latin'],
  weight: '400',
});

const AboutMe = () => {
  return (
    <main className="flex flex-wrap-reverse justify-center items-center gap-10 md:gap-32 py-8 text-lg text-center xl:text-left xl:flex-nowrap xl:justify-between">
      <div className="text-white flex flex-col items-center xl:items-start gap-4 w-full xl:w-120">
        <h1 className="text-3xl sm:text-7xl xl:leadding-[5rem]">
          Prazer, sou&nbsp;
          <strong className="font-bold">David</strong>
        </h1>
        <div className="mb-12">
          <h2 className={`${roboto.className} mb-12`}>
            Sou um desenvolvedor Fullstack apaixonado por programação e ajudar as pessoas!
          </h2>
          <Link
            href="/contatos"
            className="p-3 bg-h-gray-500 w-fit text-xl rounded-lg transition-all hover:bg-opacity-80"
          >
            Converse comigo!
          </Link>
        </div>
        <ul className="flex flex-wrap justify-center xl:grid xl:grid-cols-2 xl:w-fit gap-3 text-xl">
          <li
            style={{ backgroundColor: '#2F74C0', color: '#FFFFFF' }}
            className="w-fit p-2 rounded-md">
            typescript
          </li>

          <li
            style={{ backgroundColor: '#6BDDFA', color: '#000000' }}
            className="w-fit p-2 rounded-md">
            react
          </li>

          <li
            style={{ backgroundColor: '#EFD81D', color: '#000000' }}
            className="w-fit p-2 rounded-md">
            javascript
          </li>

          <li
            style={{ backgroundColor: '#000000', color: '#ffffff' }}
            className="w-fit p-2 rounded-md">
            next.js
          </li>
        </ul>
      </div>

      <div className="relative">
        <Image
          src="https://avatars.githubusercontent.com/u/45425587?v=4"
          alt="Foto de perfil de David"
          width={500}
          height={500}
          unoptimized
          className="rounded-full"
        />
        <p className="p-4 w-fit text-base leading-tight bg-h-blue-500 rounded-xl text-black absolute -bottom-[0.75rem] sm:bottom-3">
          <strong className="text-4xl">2+</strong>
          <br />
          anos de experiência
        </p>
      </div>
    </main>
  )
}
export default AboutMe