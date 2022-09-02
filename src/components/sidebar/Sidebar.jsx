import "./sidebar.scss"
import Sidebaritem from "./Sidebaritem"
import items from '../../sidebardata.json'
import {links} from 'react-router-dom'
import { MoreVert } from "@material-ui/icons"
import {useState} from 'react'

function Sidebar() {
  const [collapse, setCollapse] = useState(false)

  function mobile(){
    setCollapse(!collapse)
  }
  

  return (
    <div className={`sidebar-wrapper ${collapse ? "collapse" : ""}`}>
      <MoreVert className={`more-sidebar ${collapse ? "collapse" : ""}`} onClick={mobile}/>
      <div className= {`name-person ${collapse ? "collapse" : ""}`}>
      <img src="assets/2.jpg" alt="" className="sidebar-image"/>
      <span className="sidebar-name">Ahmed Olusesi</span>
      <span className="sidebar-title">Web developer</span>
      </div>
      
      <div className={`logo-div ${collapse ? "collapse" : ""}`}>
      <a href="/" className="logo-link">Company</a>
      <span className="sub-name">React dashboard</span>
      </div>
      
      <div className={`small-logo ${collapse ? "collapse" : ""}`}>
      <a href="/" className="small-logo-link">C</a>
      </div>


      <div className="item-wrapper">
        {items.map((item, index)=><Sidebaritem key={index} item={item} />)}
      </div>






    </div>
  )
}

export default Sidebar