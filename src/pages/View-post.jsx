import img from "../assets/img.jpg"
import { MdDeleteOutline } from "react-icons/md"
import { LuPencil } from "react-icons/lu"
import { FiEyeOff } from "react-icons/fi"
import { Link } from "react-router-dom"

export default function Viewpost() {
  return (
    <>
      <div className="w-full flex justify-center mt-4">
        <div className="container p-5 md:p-0 lg:p-5 space-y-5">
          <div className=" flex flex-col space-x-3 shadow-lg rounded-lg border">
            <div className="p-4 flex flex-col">
              <div className="flex my-6">
                <div className="text-4xl underline underline-offset-4 ">
                  Lorem ipsum dolor sit amet Lorem ipsum dolor sit amet
                </div>
              </div>
              <div className="w-fit md:w-full flex justify-between flex-col space-y-2 md:space-y-0 md:flex-row">
                <div className=" bg-black text-white p-1 rounded-lg">
                  @john doe
                </div>
                <div className="flex space-x-1">
                  <div className="bg-black text-white p-1 rounded-lg">
                    Sat May 04 2024 01:43:24
                  </div>
                  <Link
                    to={"/edit-post/1"}
                    className="bg-black p-1 text-xl rounded-lg text-white focus:bg-black/80 transition-all"
                  >
                    <LuPencil />
                  </Link>
                  <button className="bg-black p-1 text-xl rounded-lg text-white focus:bg-black/80 transition-all">
                    <MdDeleteOutline />
                  </button>
                </div>
              </div>
            </div>
            <div className="overflow-hidden md:h-fit rounded-lg">
              <img
                src={img}
                className="w-full h-[350px] object-contain rounded-lg hover:scale-110 transition-all duration-300"
                alt=""
              />
            </div>
            <div className="h-fit md:h-full grid grid-rows-5 p-3 md:p-4">
              <div className="row-span-4">
                <div className="mt-2">
                  <div className=" w-full flex flex-wrap gap-3 mb-3">
                    <div className="bg-black w-fit text-white p-1 rounded-lg">
                      Téchnologie
                    </div>
                    <div className="bg-black w-fit text-white p-1 rounded-lg">
                      jean
                    </div>
                    <div className="bg-black w-fit text-white p-1 rounded-lg">
                      Téchnologie
                    </div>
                    <div className="bg-black w-fit text-white p-1 rounded-lg">
                      Téchnologie
                    </div>
                    <div className="bg-black w-fit text-white p-1 rounded-lg">
                      Téchnologie
                    </div>
                    <div className="bg-black w-fit text-white p-1 rounded-lg">
                      Téchnologie
                    </div>
                    <div className="bg-black w-fit text-white p-1 rounded-lg">
                      Téchnologie
                    </div>
                    <div className="bg-black w-fit text-white p-1 rounded-lg">
                      Téchnologie
                    </div>
                    <div className="bg-black w-fit text-white p-1 rounded-lg">
                      Téchnologie
                    </div>
                  </div>
                  <div className="text-left leading-5">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Tempora odit nostrum officiis accusantium esse perspiciatis,
                    magnam eos sequi dignissimos architecto sit possimus, optio
                    quod illo? Earum dicta doloremque laboriosam corrupti? Lorem
                    ipsum dolor sit amet, consectetur adipisicing elit. Tempora
                    odit nostrum officiis accusantium esse perspiciatis, magnam
                    eos sequi dignissimos architecto sit possimus, optio quod
                    illo? Earum dicta doloremque laboriosam corrupti?
                  </div>
                </div>
              </div>
              <div className="row-span-1 mt-auto">
                <div className="w-fit"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <div className="container p-5 md:p-0 lg:p-5">
          <Comments />
          <div className="my-6 w-full flex justify-center">
            <div className="container p-5 md:p-0 lg:p-5 border shadow-lg rounded-lg">
              <div className="p-2 border-b text-xl font-semibold shadow-sm">
                <p>Tous les commentaires (0)</p>
              </div>
              <AllComment />
              <AllComment />
              <AllComment />
              <AllComment />
              <AllComment />
              <AllComment />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

function Comments() {
  return (
    <form action="/post/1" method="post">
      <div className=" w-full flex justify-center">
        <div className="container p-5 md:p-0 lg:p-5 space-y-5 border shadow-lg rounded-lg">
          <div className="flex flex-col p-4">
            <div className="flex flex-col">
              <label htmlFor="comment">Laissez votre commentaire :</label>
              <textarea
                name="comment"
                id="comment"
                className="w-full ring p-2 rounded-lg mt-2 ring-zinc-600/30 font-bold outline-none focus:ring-zinc-400 transition-all"
                rows={3}
              ></textarea>
            </div>
            <div className="my-3">
              <input
                type="submit"
                value="Commenter"
                className="ring p-2 rounded-lg bg-black ring-black text-white font-semibold cursor-pointer focus:bg-black/80"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  )
}

function AllComment() {
  return (
    <div className="w-full flex flex-col p-2 space-y-2">
      {/* ici map des commentaires */}
      <div className="flex flex-col border p-2 rounded-lg bg-slate-200/30 shadow-md">
        <div className="w-full flex justify-between">
          <div className=" bg-black text-white p-1 rounded-lg">@john doe</div>
          <div className="flex space-x-1">
            <div className="bg-black text-white p-1 rounded-lg">
              Sat May 04 2024 01:43:24
            </div>
            <div className=" hidden md:flex space-x-1">
              <button className="bg-black p-1 text-xl rounded-lg text-white focus:bg-black/80 transition-all">
                <LuPencil />
              </button>
              <button className="bg-black p-1 text-xl rounded-lg text-white focus:bg-black/80 transition-all">
                <MdDeleteOutline />
              </button>
              <button className="bg-black p-1 text-xl rounded-lg text-white focus:bg-black/80 transition-all">
                <FiEyeOff />
              </button>
            </div>
          </div>
        </div>
        <div className="w-full">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam,
          dolorem omnis laudantium quas, velit ipsum incidunt quia temporibus
          nihil quis debitis consequuntur accusantium illum consequatur iure
          culpa sunt aliquid facilis.
        </div>
        <div className="flex justify-between items-center md:hidden">
          <div className="">jean</div>
          <div className="space-x-1 mt-3">
            <button className="bg-black p-1 text-xl rounded-lg text-white focus:bg-black/80 transition-all">
              <LuPencil />
            </button>
            <button className="bg-black p-1 text-xl rounded-lg text-white focus:bg-black/80 transition-all">
              <MdDeleteOutline />
            </button>
            <button className="bg-black p-1 text-xl rounded-lg text-white focus:bg-black/80 transition-all">
              <FiEyeOff />
            </button>
          </div>
        </div>
      </div>
      {/* ici map des commentaires */}
    </div>
  )
}
