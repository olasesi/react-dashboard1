import "./smallwidgets.scss"
import { ArrowUpward} from "@material-ui/icons"
import { ArrowDownward} from "@material-ui/icons"

function Smallwidgets({header, price, changes, percentage }) {

  return (
    <div className={"widgets-wrapper " + changes }>
        <div className="widget-left-part">
            <div className="header">{header}</div>
                <div className="price-percent">
                    <div className="price">
                        ${price}
                        
                    </div>
                    <div className={"price-change " + changes}>{percentage}</div>
                </div>
            <div className="lastmonth">Last month { header.toLowerCase()}</div>
        </div>
        <div className="widget-right-part">
                <div className="changes-icon">
                <ArrowUpward className={"arrow " + changes}/>
            </div>
        </div>
    </div>
  )
}

export default Smallwidgets