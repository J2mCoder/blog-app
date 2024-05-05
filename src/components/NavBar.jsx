import { Outlet, Link } from "react-router-dom"
import { BsSearch } from "react-icons/bs"
import { MdLogin } from "react-icons/md"
import { HiOutlineHome } from "react-icons/hi"

export default function NavBar() {
  return (
    <>
      <div className=" w-full h-[75px] flex justify-center items-center shadow">
        <div className="container w-full flex justify-between items-center lg:p-5">
          <div className="ml-5 md:ml-0 text-2xl font-bold">
            <Link to={"/"}>J2m Blog</Link>
          </div>
          <div className="hidden md:flex relative justify-center items-center">
            <input
              type="text"
              className="w-[300px] p-2 rounded-lg pr-10 shadow-lg ring outline-none focus:ring-zinc-600/30 transition-all ring-zinc-400/20"
            />
            <button type="button" className="absolute right-3">
              <BsSearch className="text-zinc-500 font-bold" />
            </button>
          </div>
          <div className="gap-4 hidden md:flex">
            <Link to={"/"}>Accueil</Link>
            <Link to={"/create-post"}>create</Link>
            <Link to={"/login"}>Connexion</Link>
            <Link to={"/profil"}>profil</Link>
          </div>
          <div className="flex gap-4 md:hidden text-2xl font-bold pr-5 md:pr-0">
            <Link
              to={"/"}
              className="bg-zinc-950 rounded-lg text-white hover:bg-white hover:text-black border hover:border-zinc-950 transition-all p-2"
            >
              <HiOutlineHome />
            </Link>
            <button className="bg-zinc-950 rounded-lg text-white hover:bg-white hover:text-black border hover:border-zinc-950 transition-all p-2">
              <BsSearch />
            </button>
            <Link
              to={"/login"}
              className="bg-zinc-950 rounded-lg text-white hover:bg-white hover:text-black border hover:border-zinc-950 transition-all p-2"
            >
              <MdLogin />
            </Link>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}
