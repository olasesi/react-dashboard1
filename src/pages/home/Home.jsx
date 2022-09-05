
import React from 'react'
import Sidebar from "../../components/sidebar/Sidebar"
import Header from "../../components/header/Header"
import "./home.scss"
import Smallwidgets from "../../components/smallwidgets/Smallwidgets"
import Chart from "../../components/chart/Chart"
import Tablehome from "../../components/table/Tablehome"
import Piecharts from "../../components/piechart/Piecharts"
import Mixbarchart from "../../components/mixbarchart/Mixbarchart"
import Stackedbarchart from "../../components/stackedbarchart/Stackedbarchart"
import Tinybarchart from "../../components/tinybarchart/Tinybarchart"

const Home = () => {
  return (
    <div className="wrapper">
      <Sidebar/>
      <div className="header-content-wrapper">
      <Header/>
      <div className="content-wrapper">
<div className="top-part">
    <div className="left-part">
      <div className="two-left-widgets">
        <Smallwidgets header="Customers" price="4,000" className="widget-style" changes="increase" percentage="+2.5%"/>
        <Smallwidgets  header="Conversions" className="widget-style" price="6,000" changes="decrease" percentage="-2.0%"/>
      </div>
      <div className="two-right-widgets">
        <Smallwidgets header="Orders" className="widget-style" price="2,000" changes="decrease" percentage="-3.5%"/>
        <Smallwidgets header="Earnings" className="widget-style" price="4,000" changes="increase" percentage="+2.2%"/>
      </div>


    </div>
  
  
  <div className="right-part">
  <div className="header">Analytics</div>
 <Chart /> 
  </div> 
</div>


 <div className="bottom-part">

<div className="table">
<Tablehome/>
</div>
<div className="pie-chart">
<Piecharts/>
</div>

</div> 

<div className="bar-charts-wrapper">
  <div className="bar-1"><Mixbarchart/></div>
  <div className="bar-2"><Stackedbarchart/></div>
  <div className="bar-3"><Tinybarchart/></div>
</div>


      </div>
      </div>
    </div>
  )
}

export default Home


