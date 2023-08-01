import { MenuCloseIcon } from "@/components/icons/MenuCloseIcon";
import Image from "next/image";
import Link from "next/link";

interface MenuProps {
  isVisible: boolean
  onClose: () => void
}

export const Menu = ({ isVisible, onClose }: MenuProps) => {
  return (
    <div className={`${isVisible ? 'flex' : 'hidden'} fixed inset-0 w-full h-full bg-black bg-opacity-40 backdrop-blur-sm md:hidden`}>
      <div className="w-full bg-h-blue-900 h-96 shadow-md py-4 px-5">
        <div>
          <Link href="/">
            <Image src="/favicon.svg" width={55} height={55} alt="Logo" />
          </Link>
          <button onClick={onClose}>
            <MenuCloseIcon />
          </button>
        </div>
        <nav>
          <Link href="/">Sobre mim</Link>
          {/* <Link href="/portfolio">Portfolio</Link> */}
          <Link href="/contatos">Entre em contato</Link>
        </nav>
      </div>
    </div>
  );
}