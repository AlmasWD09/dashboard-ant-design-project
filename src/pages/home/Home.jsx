import { Link } from "react-router-dom"

const Home = () => {
  return (
    <div>
      <Link to={'/dashboard'}>
      <h1 className="text-xl font-bold">Dashboard Route</h1>
      </Link>
    </div>
  )
}

export default Home