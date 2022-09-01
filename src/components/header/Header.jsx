import { MoreVert, Search } from "@material-ui/icons"
import { Apps } from "@material-ui/icons"
import { NotificationImportant } from "@material-ui/icons"
import { Settings } from "@material-ui/icons"
import { Message } from "@material-ui/icons"
import Button from '@mui/material/Button';
import { Send } from "@material-ui/icons"

import "./header.scss"

function Header() {
  return (
    <div className="header-wrapper">
<div className="search-wrapper">
    
<MoreVert className="more"/>

    <div className="search-icon-box">
    <input name="" placeholder="Search products" className="search-input"/><Search className="search-icon"/>
    </div>
</div>

<div className="icon-wrapper">
  <div className="avartar-wrapper">
  <Button variant="contained" endIcon={<Send />} className="send-button" color="success">
        Send
      </Button>
    <img src="assets/2.jpg" alt="" className="person-image"/>
    <span className="person-name">Ahmed Olusesi</span>
  </div>
  
  <div className="header-icons">
    <div className="number-wrapper">
  <div className="notify">2</div> 
  <div className="message">3</div>
  </div>
<Apps className="icons-material"/>
<NotificationImportant className="icons-material"/>
 <Message className="icons-material"/>
<Settings className="icons-material"/>
</div>
</div>
    </div>
  )
}

export default Header