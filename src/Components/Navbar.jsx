import airbnbIcon from "../assets/airbnb-logo.png"
import "./Navbar.css"

function Navbar() {
  return (
    <nav>
      <img src={airbnbIcon} className="nav--img" />
    </nav>
  )
}

export default Navbar
