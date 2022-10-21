import heroIcon from "../assets/photo-grid.png"
import "./Hero.css"

function Hero() {
  return (
    <section className="hero">
      <img src={heroIcon} className="hero--img" />
      <h1 className="hero--header">Online Experiences</h1>
      <h4 className="hero--text">
        Join unique interactive activities led by one-of-a-kind hosts--all
        without leaving home
      </h4>
    </section>
  )
}

export default Hero
