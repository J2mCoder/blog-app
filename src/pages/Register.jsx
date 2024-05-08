import { useState } from "react"
import { useForm } from "react-hook-form"
import { Link } from "react-router-dom"
import { ToastContainer } from "react-toastify"

export default function Register() {
  const [loading, setLoading] = useState(true)

  fetch("http://127.0.0.1:5000/api/register", {
    method: "get",
    mode: "cors",
    headers: {
      accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => {
      setLoading(false)
      console.log(data)
    })
    .catch((err) => {
      console.log(err)
    })
    .finally(() => setLoading(false))

  const onSubmit = (data) => {
    console.log(data)
    setLoading(true)
  }

  const [password, setPassword] = useState("")
  const [password2, setPassword2] = useState("")
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onChange",
  })

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="w-full h-full flex justify-center mt-4 p-4 sm:p-0">
        <div className=" bg-white shadow-lg h-fit border rounded-lg max-w-md w-[500px]">
          <div className="w-full p-4 text-2xl font-bold text-center shadow-sm">
            <h1>Inscrivez-vous !</h1>
            <div className="">
              {loading ? (
                <div className="flex items-center justify-center">
                  <div className="animate-spin w-10 h-10 border-t-2 border-b-2 border-gray-200 rounded-full">
                    jean
                  </div>
                </div>
              ) : null}
            </div>
          </div>
          <div className="p-4 flex flex-col">
            <div className="mb-3">
              <label htmlFor="email" className="font-bold text-xl">
                {"Votre nom d'utilisateur :"}
              </label>
              <input
                type="text"
                id="username"
                {...register("username", {
                  required: true,
                  pattern: /^[A-Za-z][A-Za-z0-9]*$/i,
                  minLength: 3,
                  maxLength: 20,
                })}
                className=" w-full ring p-2 rounded-lg mt-2 ring-zinc-600/30 font-bold outline-none focus:ring-zinc-400 transition-all"
                placeholder="Votre nom d'utilisateur"
              />
              <span className="text-red-500 text-md font-bold mb-2">
                {errors.username &&
                  errors.username.type === "required" &&
                  "Le nom d'utilisateur est requis"}
                {errors.username &&
                  errors.username.type === "minLength" &&
                  "Le nom d'utilisateur doit contenir au moins 3 caractères."}
                {errors.username &&
                  errors.username.type === "maxLength" &&
                  "Le nom d'utilisateur ne peut pas contenir plus de 20 caractères."}
                {errors.username &&
                  errors.username.type === "pattern" &&
                  "Le nom d'utilisateur doit commencer par une lettre et peut contenir des lettres et des chiffres."}
              </span>
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="font-bold text-xl">
                Votre adresse email :
              </label>

              <input
                type="email"
                id="email"
                {...register("email", {
                  required: "L'email est requis",
                  pattern:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/,
                })}
                className=" w-full ring p-2 rounded-lg mt-2 ring-zinc-600/30 font-bold outline-none focus:ring-zinc-400 transition-all"
                placeholder="Votre adresse email"
              />

              {errors.email && errors.email.type === "required" && (
                <span className="text-red-500 text-md font-bold mb-2">
                  {"Votre adresse email est requis"}
                </span>
              )}
              {errors.email && errors.email.type === "pattern" && (
                <span className="text-red-500 text-md font-bold mb-2">
                  {
                    "L'adresse email doit respecter le format suivant : example@domaine.com"
                  }
                </span>
              )}
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="font-bold text-xl">
                Votre mot de passe :
              </label>
              <input
                type="password"
                id="password"
                {...register("password", {
                  required: true,
                  minLength: 8,
                  maxLength: 26,
                })}
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className=" w-full ring p-2 rounded-lg mt-2 ring-zinc-600/30 font-bold outline-none focus:ring-zinc-400 transition-all"
                placeholder="Votre mot de passe"
              />
              <span className="text-red-500 text-md font-bold mb-2">
                {errors.password &&
                  errors.password.type === "required" &&
                  "Le mot de passe est requis"}
                {errors.password &&
                  errors.password.type === "minLength" &&
                  "Le mot de passe doit contenir au moins 8 caractères."}
                {errors.password &&
                  errors.password.type === "maxLength" &&
                  "Le mot de passe ne peut pas contenir plus de 26 caractères."}
              </span>
            </div>
            <div className="mb-3">
              <label htmlFor="password2" className="font-bold text-xl">
                Confirmer le mot de passe :
              </label>
              <input
                type="password"
                id="password2"
                {...register("password2", {
                  required: true,
                  minLength: 8,
                  maxLength: 26,
                })}
                value={password2}
                onChange={(e) => setPassword2(e.target.value)}
                className=" w-full ring p-2 rounded-lg mt-2 ring-zinc-600/30 font-bold outline-none focus:ring-zinc-400 transition-all"
                placeholder="Confirmer le mot de passe"
              />
              <span className="text-red-500 text-md font-bold mb-2">
                {password2 !== password &&
                  password2 !== "" &&
                  "Les mot de passe ne correspondent pas !"}
              </span>

              <span className="text-red-500 text-md font-bold mb-2">
                {errors.password2 &&
                  errors.password2.type === "required" &&
                  "Le mot de passe est requis"}
                {errors.password2 &&
                  errors.password2.type === "minLength" &&
                  "Le mot de passe doit contenir au moins 8 caractères."}
                {errors.password2 &&
                  errors.password2.type === "maxLength" &&
                  "Le mot de passe ne peut pas contenir plus de 26 caractères."}
              </span>
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
      <ToastContainer />
    </form>
  )
}
