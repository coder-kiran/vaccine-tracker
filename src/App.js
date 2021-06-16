  import React, { useEffect, useState } from 'react'
  import axios from 'axios'
  import './App.css'
  import dateFormat from 'dateformat'

  function App() {


    const [mannanchery, setMannachery] = useState([])
    const [aryad, setAryad] = useState([])
    const [chettikad,setChettikad] = useState([])
    const [alappuzhaghc,setAlappuzhaghc] = useState([])

    useEffect(() => {
     var today = new Date()
      console.log('date====================================');
      console.log(dateFormat(today,"dd/mm/yyyy"));
    const  formatedDate=dateFormat(today,"dd/mm/yyyy")
      console.log(formatedDate);

    
      //const dateis = '16-06-2021'
      //16-06-2021
      axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=301&date=${formatedDate}`).then((response) => {
        console.log(response.data.centers)


        


        response.data.centers.map((obj, key) => {


            console.log('obj', obj.center_id);
           
            switch (obj.center_id) {
              case 94953:
                console.log('94953 founded')
                console.log('obj comeeeeeeeee', obj);
                setChettikad(obj)
                break;

              case 109306:
                console.log('109306 founded')
                console.log('obj comeeeeeeeee 2', obj);
                setMannachery(obj)
                break;
                
              case 94941:
                console.log('94941 founded')
                console.log('obj comeeeeeeeee 3', obj);
                setAryad(obj)
                break;
              
              case 94936:
                setAlappuzhaghc(obj)
                break;
            }



          })
  
        
      })
      return () => {
        console.log('cleaning up')
      }
    }, [])

    //const a =  mainArray.map((obj,key)=>obj)



    return (
      <div className="parentclass">
        <header>
        <h1>Vaccine Tracker</h1>
        </header>
      

        

        {console.log('chettikad------',chettikad)}
        {console.log('mannanchery------',mannanchery)}
       
        <div className="aryad">
          <h1>{aryad ? aryad.name : "loading.."}</h1>
          <p>{aryad ? aryad.address : "loading.."}</p>
         
        {aryad.sessions ? <div className="aryad-sub">
       { console.log('====================aryad',aryad)}
           {
         
             aryad.sessions.map(session=>{
               return(
                 <div className="aryad-in">
                   <h5>Date :- {aryad.sessions? session.date:"loading.."}</h5>
                   <h5>Minimum Age Limit : -{session.min_age_limit}</h5>
                   <h2>Dose 1 :- {session.available_capacity_dose1}</h2>
                   <h2>Dose 2 :- {session.available_capacity_dose2}</h2>
                 </div>
               )
             })
           }
        
          </div>:"loading.."}
          
          


        </div>

        <br />

        <div className="mannanchery">
          <h1>{mannanchery ? mannanchery.name : "loading.."}</h1>
          <p>{mannanchery ? mannanchery.address : "loading.."}</p>
         
        {mannanchery.sessions ? <div className="mannanchery-sub">
       { console.log('====================mannanchery',mannanchery)}
           {
         
             mannanchery.sessions.map(session=>{
               return(
                 <div className="mannachery-in">
                   <h5>Date :- {mannanchery.sessions? session.date:"loading.."}</h5>
                   <h5>Minimum Age Limit : -{session.min_age_limit}</h5>
                   <h2>Dose 1 :- {session.available_capacity_dose1}</h2>
                   <h2>Dose 2 :- {session.available_capacity_dose2}</h2>
                 </div>
               )
             })
           }
        
          </div>:"loading.."}
          
          


        </div>



        <br />
        <div className="chettikad">
          <h1>{chettikad ? chettikad.name : "loading.."}</h1>
          <p>{chettikad ? chettikad.address : "loading.."}</p>
         
        {chettikad.sessions ? <div className="chettikad-sub">
       { console.log('====================chettikad',chettikad)}
           {
         
             chettikad.sessions.map(session=>{
               return(
                 <div className="chettikad-in">
                   <h5>Date :- {chettikad.sessions? session.date:"loading.."}</h5>
                   <h5>Minimum Age Limit : -{session.min_age_limit}</h5>
                   <h2>Dose 1 :- {session.available_capacity_dose1}</h2>
                   <h2>Dose 2 :- {session.available_capacity_dose2}</h2>
                 </div>
               )
             })
           }
        
          </div>:"loading.."}         
           </div>
            <br />
           <div className="alappuzhaghc">
          <h1>{alappuzhaghc ? alappuzhaghc.name : "loading.."}</h1>
          <p>{alappuzhaghc ? alappuzhaghc.address : "loading.."}</p>
         
        {alappuzhaghc.sessions ? <div className="alappuzhaghc-sub">
       { console.log('====================alappuzhaghc',alappuzhaghc)}
           {
         
             alappuzhaghc.sessions.map(session=>{
               return(
                 <div className="alappuzhaghc-in">
                   <h5>Date :- {alappuzhaghc.sessions? session.date:"loading.."}</h5>
                   <h5>Minimum Age Limit : -{session.min_age_limit}</h5>
                   <h2>Dose 1 :- {session.available_capacity_dose1}</h2>
                   <h2>Dose 2 :- {session.available_capacity_dose2}</h2>
                 </div>
               )
             })
           }
        
          </div>:"loading.."}         
           </div>



          <footer>
            <p>© 2021 copyright : Kiran K K</p>
             
          </footer>
            



      </div>
    )
  }

  export default App
