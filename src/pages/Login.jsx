import { Link } from "react-router-dom"

export default function Login() {
  return (
    <div className="w-full h-full flex justify-center mt-4 p-4 sm:p-0">
      <div className=" bg-white shadow-lg h-fit border rounded-lg max-w-md w-[500px]">
        <div className="w-full p-4 text-2xl font-bold text-center shadow-sm">
          <h1>Connetez-vous !</h1>
        </div>
        <div className="p-4 flex flex-col">
          <div className="mb-3">
            <label htmlFor="email" className="font-bold text-xl">
              Votre adresse email :
            </label>
            <input
              type="text"
              id="email"
              name="email"
              className=" w-full ring p-2 rounded-lg mt-2 ring-zinc-600/30 font-bold outline-none focus:ring-zinc-400 transition-all"
              placeholder="Votre adresse email"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="font-bold text-xl">
              Votre mot de passe :
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className=" w-full ring p-2 rounded-lg mt-2 ring-zinc-600/30 font-bold outline-none focus:ring-zinc-400 transition-all"
              placeholder="Votre mot de passe"
            />
          </div>
          <div className="my-3">
            <input
              type="submit"
              value="Se connecter"
              className="ring p-2 rounded-lg bg-black ring-black text-white font-semibold cursor-pointer focus:bg-black/80"
            />
          </div>
          <div className="w-full">
            <p className=" font-semibold">
              <span>{"Vous n'avez pas de compte ? "}</span>
              <Link to="/register" className=" underline">
                Rejoignez-nous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
