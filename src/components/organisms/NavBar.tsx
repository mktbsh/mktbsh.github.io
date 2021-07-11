import React, { useState } from "react";

import NextLink from "next/link";

import { Link } from "components/atoms/Link";
import { HamburgerMenu } from "components/molecules/HamburgerMenu";
import { classNames } from "utils/TailwindUtil";

const NavBar = () => {
  const [isOpen, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prev) => !prev);
  };

  return (
    <nav className="container mx-auto px-6 py-3">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <NextLink href="/">
              <a className="text-gray-800 text-xl font-bold md:text-2xl hover:text-gray-700">
                mktbsh.github.io
              </a>
            </NextLink>
          </div>
          <div className="flex md:hidden">
            <HamburgerMenu onClick={handleClick} />
          </div>
        </div>
        <div
          className={classNames(
            isOpen ? "block" : "hidden",
            "md:flex items-center"
          )}
        >
          <div className="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1">
            <Link href="/" name="Home" />
            <Link href="/about" name="About" />
            {/* <Link href="/" name="Components" /> */}
            <Link href="/contact" name="Contact" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export { NavBar };
