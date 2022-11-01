import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"
import cards from "./data"

function App() {
  const cardList = cards.map((card) => {
    return <Card key={card.id} items={card} />
  })
  return (
    <div>
      <Navbar />
      <Hero />
      {cardList}
      {/* <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="Singapore"
        title="Life Lessons with Katie Zaferes"
        price={136}
      /> */}
    </div>
  )
}

export default App
