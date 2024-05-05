import Articles from "../components/Articles"
import img from "../assets/img.jpg"
import { FaPowerOff } from "react-icons/fa"

export default function HomePage() {
  const articleComponents = []
  for (let i = 0; i < 10; i++) {
    articleComponents.push(<Articles key={i} />)
  }
  return (
    <div className="w-full flex justify-center mt-4">
      <div className="container p-5 md:p-0 lg:p-5 grid grid-cols-1 lg:grid-cols-6 gap-3 relative">
        <div className="space-y-5 col-span-4">{articleComponents}</div>
        <div className="col-span-2 shadow-lg h-fit border rounded-lg p-4">
          <div className="hidden lg:flex flex-col items-start top-5 sticky space-y-3">
            <div className="w-full flex justify-center items-center">
              <img
                src={img}
                alt="image"
                className="rounded-full size-40 object-cover border-4 border-t-black border-r-black border-b-black"
              />
            </div>
            <div className="w-full mt-3 text-center">
              <h3>John Doe</h3>
              <h4>johndoe@gmail.com</h4>
              <p className="text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatem, quidem.
              </p>
            </div>
            <div className="w-full flex justify-center items-center mt-3">
              <button
                type="button"
                className=" w-fit bg-red-400 p-2 flex rounded-lg"
              >
                <FaPowerOff className="mr-2 mt-1 text-2xl" />
                <span className="text-xl">Déconnection</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
