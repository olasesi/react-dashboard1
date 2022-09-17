import React from 'react'
import "./home.scss"
import Smallwidgets from "../../components/smallwidgets/Smallwidgets"
import Chart from "../../components/chart/Chart"
import Tablehome from "../../components/table/Tablehome"
import Piecharts from "../../components/piechart/Piecharts"
import Mixbarchart from "../../components/mixbarchart/Mixbarchart"
import Stackedbarchart from "../../components/stackedbarchart/Stackedbarchart"
import Tinybarchart from "../../components/tinybarchart/Tinybarchart"
import { BarChart, CalendarToday, Money, PersonSharp } from '@material-ui/icons'
import CustomizedMenus from "../../components/customizedmenus/CustomizedMenus"
import DonutLargeIcon from '@mui/icons-material/DonutLarge';

const Home = () => {
  return (
    <div className="wrapper">

      <div className="header-content-wrapper">

        <div className="content-wrapper">
         <div className="five-sales">
            <div className="sales-all">
            <CalendarToday className="sales-icons"/>
             <div className="title-dropdown">
             <span className="title">Start Date</span>
             
               <CustomizedMenus/>
               
            </div>
            </div>
            <div className="sales-all">
            <CalendarToday className="sales-icons"/>
            <div className="title-dropdown"> 
              <span className="title">End Date</span>
              <CustomizedMenus/>
              </div>
            </div>
            <div className="sales-all">
              <Money className="sales-icons"/>
              <div className="title-dropdown"> 
                <span className="title">Sales Measure</span>
                <CustomizedMenus/>
                </div>
                
              </div>
            
            <div className="sales-all">
              <PersonSharp className="sales-icons"/>
              <div className="title-dropdown"> 
              <span className="title">Consumer Type</span>
              <CustomizedMenus/>
              </div>
            </div>
           
            <div className="sales-all"> 
            <BarChart className="sales-icons"/>
            <div className="title-dropdown">
              <span className="title">Transaction Type</span>
              <CustomizedMenus/>
              </div>
              </div>


         </div>
            
            <div className="top-part">
              
              <div className="left-part">
                <div className="two-left-widgets">
                  <Smallwidgets header="Customers" price="4,000" className="widget-style" changes="increase" percentage="+2.5%" />
                  <Smallwidgets header="Conversions" className="widget-style" price="6,000" changes="decrease" percentage="-2.0%" />
                </div>
                <div className="two-right-widgets">
                  <Smallwidgets header="Orders" className="widget-style" price="2,000" changes="decrease" percentage="-3.5%" />
                  <Smallwidgets header="Earnings" className="widget-style" price="4,000" changes="increase" percentage="+2.2%" />
                </div>


              </div>


              <div className="right-part">
                <div className="container-analytics-key">
                   <div className="header">Analytics</div>
                  <div className="key">
                   <div className="wrapper-donut-amount"><DonutLargeIcon className="donut"/> <span className="span-donut">$239,493</span></div>
                    <span className="account-payable">Account Payable</span>
                  </div>
                  <div className="key">
                   <div className="wrapper-donut-amount"><DonutLargeIcon className="donut-2"/> <span className="span-donut">$346,283</span></div>
                    <span className="account-payable">Net Revenue</span>
                  </div>
                </div>
                <Chart />
              </div>
            </div>
          

          <div className="bottom-part">

            <div className="table">
              <Tablehome />
            </div>
            <div className="pie-chart">
              <Piecharts />
            </div>

          </div>

          <div className="bar-charts-wrapper">
            <div className="bar-1"><Mixbarchart /></div>
            <div className="bar-2"><Stackedbarchart /></div>
            <div className="bar-3"><Tinybarchart /></div>
          </div>


        </div>
      </div>
    </div>
  )
}

export default Home


