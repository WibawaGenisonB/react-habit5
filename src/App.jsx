import Navbar from "./Components/Navbar"
import Hero from "./Components/Hero"
import Card from "./Components/Card"

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Card
        img="katie-zaferes.png"
        rating="5.0"
        reviewCount={6}
        country="Singapore"
        title="Life Lessons with Katie Zaferes"
        price={136}
      />
    </div>
  )
}

export default App
