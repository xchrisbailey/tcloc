import Link from 'next/link'
import { FC } from 'react'

const Header: FC = () => (
  <header className="py-2 mb-4 bg-indigo-300 shadow">
    <div className="container mx-auto">
      <h1 className="px-4 text-xl font-bold tracking-wide md:text-3xl">
        <Link href="/">
          <a href="">Toni and Chris&apos; Location Notebook</a>
        </Link>
      </h1>
    </div>
  </header>
)

export default Header
