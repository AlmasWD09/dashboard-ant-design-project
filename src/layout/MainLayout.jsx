import { Outlet } from "react-router-dom"

const MainLayout = () => {
  return (
    <div className="flex flex-col md:flex-row justify-center text-center my-6 h-screen">

      <div>
        <h1>header page</h1>

        <Outlet />
      </div>
    </div>
  )
}

export default MainLayout