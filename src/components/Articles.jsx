import img from "../assets/img.jpg"
import { CiRead } from "react-icons/ci"

export default function Articles() {
  return (
    <div>
      <div className="grid grid-cols-5 space-x-3 shadow-lg rounded-lg border">
        <div className="col-span-5 row-span-1 md:col-span-2 overflow-hidden h-[200px] md:h-fit rounded-lg">
          <img
            src={img}
            className="w-full h-[250px] object-cover rounded-lg hover:scale-110 transition-all duration-300"
            alt=""
          />
        </div>
        <div className="row-span-1 col-span-4 md:col-span-3 h-fit md:h-full grid grid-rows-5 p-3 md:p-4">
          <div className="row-span-4">
            <div className="w-fit flex md:space-x-3 flex-col space-y-2 md:space-y-0 md:flex-row">
              <div className=" bg-black text-white p-1 rounded-lg">
                @john doe
              </div>
              <div className="bg-black text-white p-1 rounded-lg">
                Sat May 04 2024 01:43:24
              </div>
            </div>
            <div className="line-clamp-5 mt-2">
              <div className=" text-2xl leading-6 font-semibold">
                Lorem ipsum dolor sit amet
              </div>
              <div className="text-left text-gray-500 mt-3 leading-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Tempora odit nostrum officiis accusantium esse perspiciatis,
                magnam eos sequi dignissimos architecto sit possimus, optio quod
                illo? Earum dicta doloremque laboriosam corrupti? Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. Tempora odit
                nostrum officiis accusantium esse perspiciatis, magnam eos sequi
                dignissimos architecto sit possimus, optio quod illo? Earum
                dicta doloremque laboriosam corrupti?
              </div>
            </div>
          </div>
          <div className="row-span-1 mt-auto">
            <div className="w-fit">
              <button
                type="button"
                className="bg-zinc-950 p-1 w-[140px] rounded-lg font-semibold flex space-x-2 text-lg text-white justify-center items-center"
              >
                <CiRead className="text-2xl" />
                <span className="">Poursuivre</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
