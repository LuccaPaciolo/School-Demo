import React from 'react'
import LecturerData from '../Data/LecturerData.js'
import '../Styles/LecturerCard.css'

function LecturerCard() {

  const FetchLecturerData = LecturerData.map((item)=> {
    return (
      <div className='Lecturer-container'>
          <div className="bio">
            <div className="bio-image">
              <img src={item.image} alt="lecture" />
            </div>
            <div className="bio-text">
              <h3>{item.name}</h3>
              <h4>{item.position}</h4>            
          </div>
          </div>
         

        <div className="lecturer-text">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident voluptatem sequi, quod optio architecto.</p>
        </div>

      </div>
    )
  })
  return (
    <div className='lecturer-card-container'>
      <h2>Kata <span>Dosen</span></h2>
      <div className="lecturer-card">
       {FetchLecturerData}
      </div>
     
    </div>
  )
}

export default LecturerCard