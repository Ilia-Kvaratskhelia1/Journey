import React, { useState } from 'react'
import "./TourCard.css"
function Tour(props) {
    const {id , name , info , price,image ,removeTour }=props;
    const [showMore , setShowMore] = useState(false)
    const ShowMoreHandler = ()=>{
        setShowMore(!showMore)
    }
    
  return (

    <article className='single-tour'>
        <img src={image} alt={name} />
        <footer>
            <div className="tour-info">
                <h4>{name}</h4>
                <h2 className='tour-price'>${price}</h2>
            </div> 
            <p className='info'>
                {showMore ? info : `${info.substring(0,170)}...`}
                <button onClick={ShowMoreHandler}>{showMore ? "Show less":"Show more"  }</button>
            </p>
            <button className='delete-btn' onClick={()=>removeTour(id)}>not interested</button>
        </footer>
    </article>
  )
}

export default Tour