import './App.css'
import './Navbar.css'
import './InfoCard.css'
import './NutritionCases.css'
import './NutritionWorks.css'
import './Details.css'
import './Footer.css'


import MyComponent from "./MyComponent";
import Navbar from "./Navbar";
import InfoCard from "./InfoCard";
import NutritionCases from "./NutritionCases"
import NutritionWorks from "./NutritionWorks"
import Details from "./Details"
import Footer from "./Footer"



function App() {

  return (
    <>
      <Navbar/>
      <InfoCard/>
      <div className="space"></div>
      <NutritionCases/>
      <NutritionWorks/>
      <Details/>
      <Footer/>

    </>
  )
}

export default App
