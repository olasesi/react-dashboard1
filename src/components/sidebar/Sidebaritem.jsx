import {useState} from 'react'
import "./sidebar.scss"
import { ChevronRight } from "@material-ui/icons"


function Sidebaritem({item}) {

    const [open, setOpen] = useState(false)
 

  if(item.children){

    return (
      
        <div className="list-item-wrapper">
        <div className={open ? "list-item-wrapper-list open":"list-item-wrapper-list"}>
        
          <span><i className={`bi ${item.icon} icons`}></i> {item.title}</span>
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
        <div className="list-item-wrapper">
        <div className="list-item-wrapper-list">
        
        <span><i className={`bi ${item.icon} icons`}></i>{item.title}</span>
          
          </div> 
          
    
        </div>
        
      )

  }
}

export default Sidebaritem