import { BrowserRouter, Routes, Route } from "react-router-dom"
import NavBar from "./components/NavBar"
import HomePage from "./pages/HomePage"
import NotFind from "./components/NotFind"
import Login from "./pages/Login"
import Register from "./pages/Register"
import Viewpost from "./pages/View-post"
import CreatePost from "./pages/CreatePost"
import UpdatePost from "./pages/UpdatePost"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import Profil from "./pages/Profil"

export default function App() {
  const notify = () => toast.success("Wow so easy!")
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route index element={<HomePage />} />
            <Route path="/post/:id" element={<Viewpost />} />
            <Route path="/create-post" element={<CreatePost />} />
            <Route path="/edit-post/:id" element={<UpdatePost />} />
            <Route path="/profil" element={<Profil />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/*" element={<NotFind />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  )
}
