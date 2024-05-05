import { FiCamera } from "react-icons/fi"

export default function CreatePost() {
  const blogCategories = [
    { id: "web-development", name: "Développement Web" },
    { id: "ui-ux-design", name: "Design UI/UX" },
    { id: "technology-gadgets", name: "Technologie et Gadgets" },
    { id: "health-wellness", name: "Santé et Bien-être" },
    { id: "travel", name: "Voyage" },
    { id: "food-cuisine", name: "Cuisine et Gastronomie" },
    { id: "education-learning", name: "Éducation et Apprentissage" },
    { id: "entrepreneurship", name: "Entrepreneuriat" },
    { id: "personal-finance", name: "Finance Personnelle" },
    { id: "culture-art", name: "Culture et Art" },
    { id: "fashion-beauty", name: "Mode et Beauté" },
    { id: "sustainable-living", name: "Développement Durable" },
    { id: "gaming-esports", name: "Jeux Vidéo et eSports" },
    { id: "science-research", name: "Science et Recherche" },
    { id: "literature-writing", name: "Littérature et Écriture" },
    { id: "digital-marketing", name: "Marketing Digital" },
    { id: "photography", name: "Photographie" },
    { id: "parenting-family", name: "Parentalité et Famille" },
    { id: "sports-activity", name: "Sport et Activité Physique" },
    { id: "news-politics", name: "Actualités et Politique" },
  ]

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
                    className="space-y-3 bg-black text-white p-2 rounded-lg"
                  >
                    <option value="">-- Choisir une catégorie</option>
                    {blogCategories.map((category) => {
                      return (
                        <option key={category.id} value={category.id}>
                          {category.name}
                        </option>
                      )
                    })}
                  </select>
                </div>
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
