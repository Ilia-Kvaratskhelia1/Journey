import { useEffect, useState } from 'react'
import './App.css'
import Loading from './components/Loading'
import Tours from './components/Tours'
import Refresh from './components/Refresh'
function App() {
const tourApi ='https://course-api.com/react-tours-project'

const [loading , setLoading] = useState(true)
const [tour , setTour]=useState([])
const tourFetch = async()=>{
  try{
    
    const response =await fetch(tourApi)
    const tours = await response.json()
    setLoading(false)
    setTour(tours)
    console.log(tours);
  }catch(error){
    setLoading(false)
    console.log(error);
  }
}

useEffect(()=>{
  tourFetch()
},[])

if(loading){
  return <main>
    <Loading/>
  </main>
}

if(tour.length === 0){
  return <main>
    <div className='title'>
      <h2>No Tours Left</h2>
      <button onClick={tourFetch}>Refresh</button>
    </div>
  </main>
}
const removeTour =(id)=>{
  const Newtour =tour.filter((tour ) => tour.id !== id)
  setTour(Newtour)
}
  return (
    <main>
      <Tours tours={tour} removeTour={removeTour} />
    </main>
  )
}

export default App
