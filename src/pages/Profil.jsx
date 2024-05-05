import img from "../assets/img.jpg"
import { FaPowerOff } from "react-icons/fa"

export default function Profil() {
  return (
    <div className="w-full h-full flex justify-center mt-4">
      <div className="container ">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="col-span-1 p-4 flex flex-col">
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
          <div className="col-span-2 bg-yellow-50">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque
            tenetur sapiente assumenda ducimus labore perferendis voluptatibus
            recusandae deleniti sunt necessitatibus. Quae, aliquam animi illum
            nihil quisquam nisi nostrum quasi distinctio.
          </div>
        </div>
      </div>
    </div>
  )
}
