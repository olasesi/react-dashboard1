

import "./home.scss"
import Smallwidgets from "../../components/smallwidgets/Smallwidgets"
import Chart from "../../components/chart/Chart"
import Tablehome from "../../components/table/Tablehome"
import Piecharts from "../../components/piechart/Piecharts"

const Home = () => {
  return (
    <div className="wrapper">
      
      <div className="header-content-wrapper">
      
      <div className="content-wrapper">
<div className="top-part">
    <div className="left-part">
      <div className="two-left-widgets">
        <Smallwidgets className="widget-style"/>
        <Smallwidgets className="widget-style"/>
      </div>
      <div className="right-left-widgets">
        <Smallwidgets className="widget-style"/>
        <Smallwidgets className="widget-style"/>
      </div>


    </div>
  
  
  <div className="right-part">
<Chart/>
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

      </div>
      </div>
    </div>
  )
}

export default Home


