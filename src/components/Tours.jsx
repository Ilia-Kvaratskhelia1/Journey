import React from 'react'
import TourCard from "./TourCard"
function Tour({tours , removeTour}) {
  return (
    <section>
        <div className="title">
            <h2>Our Tours</h2>
            <div className="underline"></div>
        </div>
        <div>
            {tours?.map((tour)=>{
              return <TourCard key={tour.id} {...tour} removeTour={removeTour}></TourCard>
            })}
        </div>
    </section>
  )
}

export default Tour