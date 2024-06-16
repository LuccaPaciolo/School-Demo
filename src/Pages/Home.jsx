import LandingPage from '../Components/LandingPage.jsx' 
import Thesis from '../Components/Thesis.jsx' 
import ThesisCardData from '../Data/ThesisCardData.js'
import ThesisCard from '../Components/ThesisCard.jsx'
import '../Styles/ThesisCard.css'
import Workshop from '../Components/Workshop.jsx'
import WorkshopData from '../Data/WorkshopData.js'
import ImapctCard from '../Components/ImpactCard.jsx'
import LecturerCard from '../Components/LecturerCard.jsx'
import Partners from '../Components/Partners.jsx'
import Footer from '../Components/Footer.jsx'
import '../Styles/ImpactCard.css'


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

  const CallWorkshopData = WorkshopData.map((item)=> {
    return ( <div>
        <Workshop
          key= {item.id}
          {...item}
        />
    </div>)
  })
    return (
    <div className='home-container'>
        <LandingPage/>
        <Thesis/>
        <div className="thesis-section">
          <h3 className='thesis-card-text'>Bagaiman <span>TESIS</span>  Bekerja</h3>
          <div className="thesis-card-section">
            {CallThesisData}
          </div>
        </div>    
        <div className="slider-card-text">
            <h3>Follow us Impact untuk <span>Mereka</span></h3>
      </div>
      <div className="impact-card-section">
        <ImapctCard/>
      </div>

        <div className="workshop-section">
          <div className="workshop-text">
            <h3>Taller</h3>
            <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur</p>
          </div>  
          <div className="workshop-flex">
          {CallWorkshopData}
          </div>        
          
        </div>          
          <LecturerCard/>     
          <Partners/>
          <Footer/>
      


      
         
       
     
        
    </div>
  )
}

export default Home