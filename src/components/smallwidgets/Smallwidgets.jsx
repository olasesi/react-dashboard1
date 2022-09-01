import "./smallwidgets.scss"
import { ArrowUpward} from "@material-ui/icons"

function Smallwidgets(props) {

  return (
    <div className="widgets-wrapper">
        <div className="widget-left-part">
            <div className="header">Customers</div>
                <div className="price-percent">
                    <div className="price">
                        $5,000
                        
                    </div>
                    <div className="price-change">+2.5%</div>
                </div>
            <div className="lastmonth">Last month customers</div>
        </div>
        <div className="widget-right-part">
            <div className="changes-icon"><ArrowUpward className="arrow"/></div>
        </div>
    </div>
  )
}

export default Smallwidgets