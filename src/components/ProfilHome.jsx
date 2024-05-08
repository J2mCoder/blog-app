import { FaPowerOff } from "react-icons/fa"
import img from "../assets/img.jpg"

export default function ProfilHome() {
  return (
    <div className="col-span-2 shadow-lg h-fit border rounded-lg p-4 hidden lg:flex sticky top-5">
      <div className="flex flex-col items-start  space-y-3">
        <div className="w-full flex justify-center items-center">
          <img
            src={img}
            alt="image"
            className="rounded-full size-40 object-cover border-4 border-t-black border-r-black border-b-black"
          />
        </div>
        <div className="w-full mt-3 text-center">
          <h3 className="text-2xl">John Doe</h3>
          <h4 className="text-xl">johndoe@gmail.com</h4>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem,
            quidem.
          </p>
        </div>
        <div className="w-full flex justify-center items-center mt-3">
          <button type="button" className=" w-fit bg-red-300 p-2 rounded-lg">
            <FaPowerOff className="text-2xl" />
          </button>
        </div>
      </div>
    </div>
  )
}
