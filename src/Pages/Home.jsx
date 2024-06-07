import LandingPage from '../Components/LandingPage.jsx' 
import Thesis from '../Components/Thesis.jsx' 
import ThesisCardData from '../Data/ThesisCardData.js'
import ThesisCard from '../Components/ThesisCard.jsx'
import '../Styles/ThesisCard.css'
import ImpactSlider from '../Components/ImpactSlider.jsx'



function Home() {
   const CallThesisData = ThesisCardData.map(item => {
    return (
      <div>
         <ThesisCard
          key={item}
          {...item}
         />
      </div>
    )
  })

  
    return (
    <div className='home-container'>
        <LandingPage/>
        <Thesis/>
        <div className="thesis-section">
          <h3 className='thesis-card-text'>Bagaiman <span>TESIS</span>  Bekerja</h3>
          {CallThesisData}
        </div>    
        <ImpactSlider/>      
        
    </div>
  )
}

export default Home