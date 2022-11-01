import star from "../assets/star.png"

function Card(props) {
  let image = "../../public/images/" + props.items.coverImg
  return (
    <div className="card">
      <img src={image} className="card--image" />
      <div className="card--stats">
        <img src={star} className="card--star" />
        <span>{props.items.stats.rating}</span>
        <span className="gray">({props.items.stats.reviewCount}) • </span>
        <span className="gray">{props.items.location}</span>
      </div>
      <p>{props.items.title}</p>
      <p>
        <span className="bold">From ${props.items.price}</span> / person
      </p>
    </div>
  )
}

export default Card
