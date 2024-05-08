import { BrowserRouter, Route, Routes } from "react-router-dom"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import NavBar from "./components/NavBar"
import NotFind from "./components/NotFind"
import CreatePost from "./pages/CreatePost"
import HomePage from "./pages/HomePage"
import Login from "./pages/Login"
import Profil from "./pages/Profil"
import Register from "./pages/Register"
import UpdatePost from "./pages/UpdatePost"
import Viewpost from "./pages/View-post"

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
