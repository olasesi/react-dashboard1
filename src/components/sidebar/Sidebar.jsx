import "./sidebar.scss"
import Sidebaritem from "./Sidebaritem"
import items from '../../sidebardata.json'

function Sidebar() {
  return (
    <div className="sidebar-wrapper">
      <div className="name-person">
      <img src="assets/2.jpg" alt="" className="sidebar-image"/>
      <span className="sidebar-name">Ahmed Olusesi</span>
      <span className="sidebar-title">Web developer</span>
      </div>
      
      <div className="logo-div">
      <a href="/" className="logo-link">Company</a>
      <span className="sub-name">React dashboard</span>
      </div>
      
      
      <div className="item-wrapper">
        {items.map((item, index)=><Sidebaritem key={index} item={item} />)}
      </div>






    </div>
  )
}

export default Sidebar