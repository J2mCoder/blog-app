import Articles from "../components/Articles"

export default function HomePage() {
  const articleComponents = []
  for (let i = 0; i < 10; i++) {
    articleComponents.push(<Articles key={i} />)
  }
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="container p-5 md:p-0 lg:p-5 space-y-5">
        {articleComponents}
      </div>
    </div>
  )
}
