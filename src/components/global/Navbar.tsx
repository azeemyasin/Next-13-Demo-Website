import React, { useEffect, useState } from "react";
import * as Icons from "@/components/global/Icons";
import MenuDropdown from "@/components/global/MenuDropdown";
import cn from "classnames";
import Link from "next/link";

const Navbar: React.FC = () => {
  let [isScrolled, setIsScrolled] = useState<boolean>(false);
  let [showDropdown, setShowDropdown] = useState<boolean>(false);

  useEffect(() => {
    console.log(document.documentElement.scrollTop);

    if (document.documentElement.scrollTop > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
    window.addEventListener("scroll", () => {
      if (document.documentElement.scrollTop > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    });
  }, []);

  return (
    <>
      <div
        className={cn(
          "w-full flex justify-between p-6 fixed top-0 z-[999999999]",
          {
            "bg-transparent": !isScrolled,
            "bg-primary": isScrolled,
          }
        )}
      >
        <Link href="/" passHref>
          <h3 className="text-white text-3xl font-bold font-mono">DEMO-WEB</h3>
        </Link>
        <div
          onClick={() => setShowDropdown(!showDropdown)}
          className="h-10 w-10 bg-red-600 rounded-full flex justify-center items-center text-white cursor-pointer"
        >
          <Icons.HamburgerMenu />
        </div>
        <MenuDropdown
          onClick={() => setShowDropdown(false)}
          showDropdown={showDropdown}
        />
      </div>
    </>
  );
};

export default Navbar;
