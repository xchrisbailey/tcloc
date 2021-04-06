import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => (
  <header className="py-2 bg-indigo-300 mb-4 shadow">
    <div className="container mx-auto">
      <h1 className="text-xl md:text-3xl font-bold tracking-wide px-4">
        <Link href="/">
          <a href="">Toni and Chris&apos; Location Notebook</a>
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
