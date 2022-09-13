import * as React from 'react';
import { Search } from "@material-ui/icons"
import { Apps } from "@material-ui/icons"
import { NotificationImportant } from "@material-ui/icons"
import { Settings } from "@material-ui/icons"
import { Message } from "@material-ui/icons"
import Button from '@mui/material/Button';
import { Send } from "@material-ui/icons"
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';

import {useState} from 'react'

import "./header.scss"





function Header() {

  return (
    <>
    <div className="header-wrapper">

<div className="search-wrapper">

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

<div className="header-bottom">

<div className="left-bottom-header">
  <h1 className="left-bottom-header-header">Hi, welcome!</h1>
  <span className="left-bottom-header-span">Your sales monitor dashboard</span>
</div>

<div className="right-bottom-header">
  <div className="left">
<span className="subheading">Customer Ratings</span>
    <div className="rating">
      <Stack spacing={1}>
      <Rating name="size-small" defaultValue={2} size="small" />
     </Stack><span className="rating-number">(12,300)</span>
    </div>
  </div>
  <div className="middle">
  <span className="subheading">All sales (Online)</span>
<h2 className="sales-number">400,345</h2>
  </div>
  <div className="right">
  <span className="subheading">All sales (Offline)</span>
  <h2 className="sales-number">659,345</h2>

  </div>
</div>


</div>

</>
  )
}

export default Header