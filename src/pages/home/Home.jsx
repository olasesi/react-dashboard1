import Sidebar from "../../components/sidebar/Sidebar"
import Header from "../../components/header/Header"
import "./home.scss"
const Home = () => {
  return (
    <div className="wrapper">
      <Sidebar/>
      <div className="header-content-wrapper">
      <Header/>
      <div className="content-wrapper">

      </div>
      </div>
    </div>
  )
}

export default Home


