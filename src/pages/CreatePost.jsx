import { useState } from "react"
import { FiCamera } from "react-icons/fi"
import { IoMdCloseCircleOutline } from "react-icons/io"

export default function CreatePost() {
  const blogCategories = [
    { name: "Développement Web" },
    { name: "Design UI/UX" },
    { name: "Technologie et Gadgets" },
    { name: "Santé et Bien-être" },
    { name: "Voyage" },
    { name: "Cuisine et Gastronomie" },
    { name: "Éducation et Apprentissage" },
    { name: "Entrepreneuriat" },
    { name: "Finance Personnelle" },
    { name: "Culture et Art" },
    { name: "Mode et Beauté" },
    { name: "Développement Durable" },
    { name: "Jeux Vidéo et eSports" },
    { name: "Science et Recherche" },
    { name: "Littérature et Écriture" },
    { name: "Marketing Digital" },
    { name: "Photographie" },
    { name: "Parentalité et Famille" },
    { name: "Sport et Activité Physique" },
    { name: "Actualités et Politique" },
  ]

  const [tabCategory, setTabCategory] = useState([])

  return (
    <form action="/create-post" method="post">
      <div className="my-6 w-full flex justify-center">
        <div className="container p-5 md:p-0 lg:p-5 space-y-5 border shadow-lg rounded-lg">
          <div className="w-full flex flex-col p-4 space-y-3">
            <div className="p-2 border-b text-4xl font-semibold shadow-sm">
              <p>Créer un nouveau post</p>
            </div>
            <div className="flex flex-col">
              <div className="w-full flex flex-col md:flex-row justify-between">
                <div className="w-fit bg-black text-white flex justify-center items-center p-1 rounded-lg">
                  @john doe
                </div>
                <div className="flex space-x-3 flex-col md:flex-row">
                  <div className="w-full flex items-center text-white">
                    <input
                      type="file"
                      name="image"
                      id="image"
                      accept="image/*"
                      className="hidden"
                    />
                    <label
                      htmlFor="image"
                      className="flex justify-center items-center space-x-2 bg-black p-2 rounded-lg"
                    >
                      <span>Choisir une image</span>{" "}
                      <FiCamera className="text-xlx" />
                    </label>
                  </div>
                  <select
                    name="category"
                    className="bg-black text-white p-2 rounded-lg"
                    onChange={(e) => {
                      const selectedCategoryId = e.target.value.trim()
                      if (!tabCategory.includes(selectedCategoryId)) {
                        setTabCategory([...tabCategory, selectedCategoryId])
                      }
                    }}
                  >
                    <option value="">-- Choisir une catégorie</option>
                    {blogCategories.map((category) => {
                      return (
                        <option key={category.name} value={category.name}>
                          {category.name}
                        </option>
                      )
                    })}
                  </select>
                </div>
              </div>

              <div className="w-full my-3 flex flex-wrap gap-3 transition-all duration-500">
                {tabCategory.map((category) => {
                  return (
                    <div
                      key={category}
                      className="bg-black text-white p-2 rounded-lg flex justify-center items-center space-x-2 text-xl"
                    >
                      <div className="text-2xl -mt-2">{category}</div>
                      <IoMdCloseCircleOutline
                        className="text-xl cursor-pointer"
                        onClick={() =>
                          setTabCategory(
                            tabCategory.filter((item) => item !== category)
                          )
                        }
                      />
                    </div>
                  )
                })}
              </div>
              <div className="w-full">
                <textarea
                  name="post-title"
                  className="w-full text-4xl ring p-2 rounded-lg mt-2 ring-zinc-600/30 font-bold outline-none focus:ring-zinc-400 transition-all"
                  rows={1}
                  placeholder="Titre du post"
                ></textarea>
              </div>
              <div className="w-full">
                <textarea
                  name="post-content"
                  placeholder="Contenu du post"
                  className="w-full ring p-2 rounded-lg mt-2 ring-zinc-600/30 font-bold outline-none focus:ring-zinc-400 transition-all"
                  rows={10}
                ></textarea>
              </div>
              <div className="my-3">
                <input
                  type="submit"
                  value="Publier le poste"
                  className="ring p-2 rounded-lg bg-black ring-black text-white font-semibold cursor-pointer focus:bg-black/80"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}
