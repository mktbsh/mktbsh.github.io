import Head from 'next/head'
import React, { useState } from 'react'
import { classNames } from "utils/TailwindUtil";
import { Link } from 'components/atoms/Link'

const Header = () => {
  const [isOpen, setOpen] = useState(false);
  
  return (
    <header className="bg-white shadow">
        <nav className="container mx-auto px-6 py-3">
          <div className="flex flex-col md:flex-row md:justify-between md:items-center">
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <a className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700" href="#">mktbsh.github.io</a>
              </div>
              <div className="flex md:hidden">
                <button onClick={() => setOpen(prev => !prev)} type="button" className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
                  <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                    <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
                  </svg>
                </button>
              </div>
            </div>
            <div className={classNames(isOpen ? "block" : "hidden", "md:flex items-center")}>
              <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
                <Link href="/" name="Home" />
                <Link href="/" name="Blog" />
                <Link href="/" name="Components" />
                <Link href="/" name="Contact" />
              </div>
            </div>
          </div>
        </nav>
      </header>
  )
}

const Home = () => {

  return (
    <div className="w-full">
      <Head>
        <title>mktbsh.github.io</title>
      </Head>
      <Header />
    </div>
  )
}

export default Home

