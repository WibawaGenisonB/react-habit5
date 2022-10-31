import star from "../assets/star.png"
import katie from "../assets/katie-zaferes.png"

function Card(props) {
  let img = "../assets/" + props.img
  return (
    <div className="card">
      <img src={katie} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>
          {props.rating}
          {img}
        </span>
        <span className="gray">({props.reviewCount}) • </span>
        <span className="gray">{props.country}</span>
      </div>
      <p>{props.title}</p>
      <p>
        <span className="bold">From ${props.price}</span> / person
      </p>
    </div>
  )
}

export default Card
