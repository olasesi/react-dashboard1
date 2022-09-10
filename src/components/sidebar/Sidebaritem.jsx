import {useState} from 'react'
import "./sidebar.scss"
import { ChevronRight } from "@material-ui/icons"


function Sidebaritem({item, mobile}) {

    const [open, setOpen] = useState(false)
 

  if(item.children){

    return (
      
        <div className={`list-item-wrapper ${mobile}`}>
        <div className={open ? "list-item-wrapper-list open":"list-item-wrapper-list"}>
        
          <span><i className={`bi ${item.icon} icons ${mobile}`}></i><span className={`title ${mobile}`}>{item.title}</span></span>
          <ChevronRight className="toggle open" onClick={()=>setOpen(!open)}/>
          </div> 
          
        
          <div className={open ? "submenu-wrapper open": "submenu-wrapper"}>
          {
          item.children.map((submenu, index)=><Sidebaritem key={index} item={submenu} />)}
              <span>{item.children.title}</span>
          </div>
    
        </div>
        
        
      )

  }else{
    return (
        <div className={`list-item-wrapper ${mobile}`} data-title={item.title}>
        <div className={`list-item-wrapper-list ${mobile}`}>
        
        <span><i className={`bi ${item.icon} icons ${mobile}`}></i><span className={`title ${mobile}`}>{item.title}</span></span>
          
          </div> 
          
    
        </div>
        
      )

  }
}

export default Sidebaritem