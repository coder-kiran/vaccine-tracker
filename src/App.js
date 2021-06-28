import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import dateFormat from 'dateformat'

function App() {

  const [center,setCenter] = useState([])
  useEffect(() => {
    console.log('-----------------------------NoW USEEFFECT  WILL RENDER-----------------------');
    var today = new Date()
    const formatedDate = dateFormat(today, "dd/mm/yyyy")
    //16-06-2021
    axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=301&date=${formatedDate}`).then((response) => {
     
    console.log('inside useeffect')
      response.data.centers.map((obj, key) => {    
        console.log('get into map')
       console.log(obj)
       console.log('here you can set i think')
       setCenter(center)
       
      console.log('getting out from map')
    }
    ) 
})
    return () => {
      console.log('cleaning up')
    }
  },[]) 


  return (
   
    <div className="parentclass">
       {console.log('-----------------------------FIRST I WILL RENDER-----------------------')}
      <div className="heading">
        <header>
          <h1>Sulatha Vaccine Tracker</h1>
        </header>
      </div>
      {console.log('hihi',response.data.centers)}
      <footer>
        <p>© 2021 copyright : Kiran K K</p>
        <p>desined and developed by Kiran K K</p>
      </footer>

    </div>
  )
}

export default App
