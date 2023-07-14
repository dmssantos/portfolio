import Link from "next/link"

const AboutMe = () => {
  return (
    <main>
      <div>
        <h1>Prazer, sou &nbps;</h1>
        <span>David</span>
        <div>
          <h2>"Sou um desenvolvedor Fullstack apaixonado por programação e ajudar as pessoas!"</h2>
          <Link href="/contatos">Converse comigo!</Link>
        </div>
        <ul>
          <li style={{ backgroundColor: '#2F74C0', color: '#FFFFFF' }}>typescript</li>
          <li style={{ backgroundColor: '#6BDDFA', color: '#000000' }}>react</li>
          <li style={{ backgroundColor: '#EFD81D', color: '#000000' }}>javascript</li>
          <li style={{ backgroundColor: '#000000', color: '#ffffff' }}>next.js</li>
        </ul>
      </div>

      <div>
        <img src="https://avatars.githubusercontent.com/u/45425587?v=4" alt="Foto de perfil de David" />
        <p>
          <span>2+</span>
          <br />
          anos de experiência
        </p>
      </div>
    </main>
  )
}
export default AboutMe