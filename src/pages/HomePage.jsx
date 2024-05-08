import Articles from "../components/Articles"
import ProfilHome from "../components/ProfilHome"

export default function HomePage() {
  const articleComponents = []
  for (let i = 0; i < 10; i++) {
    articleComponents.push(<Articles key={i} />)
  }

  return (
    <div className="w-full flex justify-center mt-4">
      <div className="container p-5 md:p-0 lg:p-5 grid grid-cols-1 lg:grid-cols-6 gap-3 relative">
        <div className="space-y-5 col-span-1 md:col-span-4">
          {articleComponents}
        </div>
        <ProfilHome />
      </div>
    </div>
  )
}
