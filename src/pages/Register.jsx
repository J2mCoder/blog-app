import { Link } from "react-router-dom"

export default function Register() {
  return (
    <div className="w-full h-full flex justify-center mt-4 p-4 sm:p-0">
      <div className=" bg-white shadow-lg h-fit border rounded-lg max-w-md w-[500px]">
        <div className="w-full p-4 text-2xl font-bold text-center shadow-sm">
          <h1>Connetez-vous !</h1>
        </div>
        <div className="p-4 flex flex-col">
          <div className="mb-3">
            <label htmlFor="email" className="font-bold text-xl">
              {"Votre nom d'utilisateur :"}
            </label>
            <input
              type="text"
              id="usename"
              name="usename"
              className=" w-full ring p-2 rounded-lg mt-2 ring-zinc-600/30 font-bold outline-none focus:ring-zinc-400 transition-all"
              placeholder="Votre nom d'utilisateur"
            />
          </div>
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
          <div className="mb-3">
            <label htmlFor="password2" className="font-bold text-xl">
              Confirmer le mot de passe :
            </label>
            <input
              type="password"
              id="password2"
              name="password2"
              className=" w-full ring p-2 rounded-lg mt-2 ring-zinc-600/30 font-bold outline-none focus:ring-zinc-400 transition-all"
              placeholder="Confirmer le mot de passe"
            />
          </div>
          <div className="my-3">
            <input
              type="submit"
              value="S'inscrire"
              className="ring p-2 rounded-lg bg-black ring-black text-white font-semibold cursor-pointer focus:bg-black/80"
            />
          </div>
          <div className="w-full">
            <p className="font-semibold">
              <span>{"Déjà membre ? "}</span>
              <Link to="/login" className="underline">
                Connectez-vous
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
