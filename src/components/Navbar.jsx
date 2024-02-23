import { FaAlignJustify } from "react-icons/fa6";

const Navbar = () => {

  const NavItems = [
    { name: "Home", path: "home" },
    { name: "About", path: "about" },
    { name: "Services", path: "services" },
    { name: "Contact", path: "contact" },
  ]


  return (
    <>
      <nav className="bg-secondary">
        <div className="container flex justify-between py-3">
          <h2 className="text-3xl text-primary font-bold  ">CodeCraft</h2>

          <ul className="flex items-center gap-4">
            {NavItems.map(({ name, path }) =>
              <li>
                <a className="font-semibold text-xl " href={path}>{name}</a>
              </li>
            )}
          </ul>
        </div>
      </nav>
    </>
  )
}

export default Navbar