import { useState, useEffect } from "react";
import { FaAlignJustify, FaX } from "react-icons/fa6";
import { BiSolidMoon, BiSun } from "react-icons/bi";

const Navbar = () => {

  const [isMenuopen, setIsMenuOpen] = useState(false)

  const NavItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Contact", path: "contact" },
  ]

  const ToggleMenu = () => {
    setIsMenuOpen(!isMenuopen);
  }

  const [Theme,setTheme] = useState(localStorage.getItem("Theme") ? localStorage.getItem("Theme") : "light");
  useEffect(() => {
    if (Theme === "dark") {
      document.documentElement.classList.add("dark");
      localStorage.setItem("Theme" ,"dark");
    }
    else{ document.documentElement.classList.remove("dark");
          localStorage.setItem("Theme" ,"light");
   }

  }, [Theme])
  

  return (
    <>
      <nav className="bg-secondary  shadow-2xl dark:bg-slate-800 dark:text-white fixed top-0 left-0 right-0">
        <div className="container flex justify-between py-3">
          <h2 className="text-3xl text-primary font-bold  ">CodeCraft</h2>
          <div className="flex items-center gap-6">
            <ul className="md:flex items-center gap-4 hidden ">
              {NavItems.map(({ name, path }) =>
                <li >
                  <a className="font-semibold text-xl dark:text-white text-black p-2" href={path}>{name}</a>
                </li>
              )}
            </ul>

            {/* Dark and Light Mode */}

            {
              Theme==="dark" ?
               (<BiSun className="text-2xl cursor-pointer" onClick={() => setTheme("light")} />)
                : 
                ( <BiSolidMoon className="text-2xl cursor-pointer" onClick={() => setTheme("dark")}/> )
            }
            


            <button className="md:hidden" onClick={ToggleMenu} >
              {isMenuopen ? (<FaX className="text-2xl cursor-pointer" />) : (<FaAlignJustify className="text-2xl cursor-pointer" />)}
            </button>
          </div>
        </div>
        <ul className={`my-16 py-5 text-center md:hidden space-y-2 shadow-xl dark:bg-slate-600  bg-primary  ${isMenuopen ? "block fixed top-0 left-0 right-0 " : "hidden"}`}>
          {NavItems.map(({ name, path }) =>
            <li>
              <a className="font-semibold text-xl text-white p-2" onClick={ToggleMenu} href={path}>{name}</a>
            </li>
          )}
        </ul>
      </nav>
    </>
  )
}

export default Navbar