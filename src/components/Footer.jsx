const Footer = () => {
  return (
    <footer className="bg-black text-center lg:text-left">
      <div className="text-white text-center p-4">
        © {new Date().getFullYear()} Mon Blog:
        <a className="text-blue-600" href="https://monblog.com/">
          {" "}
          monblog.com
        </a>
      </div>
    </footer>
  )
}

export default Footer
