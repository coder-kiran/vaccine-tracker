import React, { useEffect, useState } from 'react'
import axios from 'axios'
import './App.css'
import dateFormat from 'dateformat'

function App() {


  const [mannanchery, setMannachery] = useState([])
  const [aryad, setAryad] = useState([])
  const [chettikad, setChettikad] = useState([])
  const [alappuzhaghc, setAlappuzhaghc] = useState([])
  const [vandanam, setVandanam] = useState([])
  const [marari, setMarari] = useState([])
  const [kalavur, setKalavur] = useState([])
  const [punnapraNorth, setPunnapraNorth] = useState([])
  const [punnapraSouth, setPunnapraSouth] = useState([])

  useEffect(() => {
    var today = new Date()
    const formatedDate = dateFormat(today, "dd/mm/yyyy")
    //16-06-2021
    axios.get(`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/calendarByDistrict?district_id=301&date=${formatedDate}`).then((response) => {

      response.data.centers.map((obj, key) => {

        switch (obj.center_id) {

          case 94953:
            setChettikad(obj)
            break;

          case 109306:
            setMannachery(obj)
            break;

          case 94941:
            setAryad(obj)
            break;

          case 94936:
            setAlappuzhaghc(obj)
            break;

        case 94998:
          setVandanam(obj)
          break;

        case 94972:
          setMarari(obj)
          break;
        case 94962:
          setKalavur(obj)
          break;
        case 96889:
          setPunnapraNorth(obj)
          break;
        case 96890:
          setPunnapraSouth(obj)
          break;
        }
      })
    })
    return () => {
      console.log('cleaning up')
    }
  }, [])

  return (

    <div className="parentclass">
      
      <div className="heading">
        <header>
          <h1>Sulatha Vaccine Tracker</h1>
        </header>
      </div>

      <div className="aryad">
        <h1>{aryad ? aryad.name : "Sorry, No vaccine available"}</h1>
        <p>{aryad ? aryad.address : "Sorry, No vaccine available"}</p>
        {aryad.sessions ? <div className="aryad-sub">
          {
            aryad.sessions.map(session => 
               (
                <div className="aryad-in">
                  <h5>Date :- {aryad.sessions ? session.date : "Sorry, No vaccine available"}</h5>
                  <h5> Age Limit :- {session.min_age_limit}+</h5>
                  <h2>Dose 1 :- {session.available_capacity_dose1}</h2>
                  <h2>Dose 2 :- {session.available_capacity_dose2}</h2>
                </div>
              )
            )
          }
        </div> : "Sorry, No vaccine available"}
      </div>

      <br />

      <div className="mannanchery">
        <h1>{mannanchery ? mannanchery.name : "Sorry, No vaccine available"}</h1>
        <p>{mannanchery ? mannanchery.address : "Sorry, No vaccine available"}</p>
        {mannanchery.sessions ? <div className="mannanchery-sub">
          {
            mannanchery.sessions.map(session => {
              return (
                <div className="mannachery-in">
                  <h5>Date :- {mannanchery.sessions ? session.date : "Sorry, No vaccine available"}</h5>
                  <h5> Age Limit :- {session.min_age_limit}+</h5>
                  <h2>Dose 1 :- {session.available_capacity_dose1}</h2>
                  <h2>Dose 2 :- {session.available_capacity_dose2}</h2>
                </div>
              )
            })
          }
        </div> : "Sorry, No vaccine available"}
      </div>

      <br />

      <div className="chettikad">
        <h1>{chettikad ? chettikad.name : "Sorry, No vaccine available"}</h1>
        <p>{chettikad ? chettikad.address : "Sorry, No vaccine available"}</p>
        {chettikad.sessions ? <div className="chettikad-sub">
          {
            chettikad.sessions.map(session => {
              return (
                <div className="chettikad-in">
                  <h5>Date :- {chettikad.sessions ? session.date : "Sorry, No vaccine available"}</h5>
                  <h5> Age Limit :- {session.min_age_limit}+</h5>
                  <h2>Dose 1 :- {session.available_capacity_dose1}</h2>
                  <h2>Dose 2 :- {session.available_capacity_dose2}</h2>
                </div>
              )
            })
          }
        </div> : "Sorry, No vaccine available"}
      </div>

      <br />

      <div className="alappuzhaghc">
        <h1>{alappuzhaghc ? alappuzhaghc.name : "Sorry, No vaccine available"}</h1>
        <p>{alappuzhaghc ? alappuzhaghc.address : "Sorry, No vaccine available"}</p>
        {alappuzhaghc.sessions ? <div className="alappuzhaghc-sub">
          {
            alappuzhaghc.sessions.map(session => {
              return (
                <div className="alappuzhaghc-in">
                  <h5>Date :- {alappuzhaghc.sessions ? session.date : "Sorry, No vaccine available"}</h5>
                  <h5> Age Limit :- {session.min_age_limit}+</h5>
                  <h2>Dose 1 :- {session.available_capacity_dose1}</h2>
                  <h2>Dose 2 :- {session.available_capacity_dose2}</h2>
                </div>
              )
            })
          }
        </div> : "Sorry, No vaccine available"}
      </div>

      <br />

<div className="vandanam">
  <h1>{vandanam ? vandanam.name : "Sorry, No vaccine available"}</h1>
  <p>{vandanam ? vandanam.address : "Sorry, No vaccine available"}</p>
  {vandanam.sessions ? <div className="vandanam-sub">
    {
      vandanam.sessions.map(session => {
        return (
          <div className="vandanam-in">
            <h5>Date :- {vandanam.sessions ? session.date : "Sorry, No vaccine available"}</h5>
            <h5> Age Limit :- {session.min_age_limit}+</h5>
            <h2>Dose 1 :- {session.available_capacity_dose1}</h2>
            <h2>Dose 2 :- {session.available_capacity_dose2}</h2>
          </div>
        )
      })
    }
  </div> : "Sorry, No vaccine available"}
</div>

<br />
<div className="marari">
  <h1>{marari ? marari.name : "Sorry, No vaccine available"}</h1>
  <p>{marari ? marari.address : "Sorry, No vaccine available"}</p>
  {marari.sessions ? <div className="marari-sub">
    {
      marari.sessions.map(session => {
        return (
          <div className="marari-in">
            <h5>Date :- {marari.sessions ? session.date : "Sorry, No vaccine available"}</h5>
            <h5> Age Limit :- {session.min_age_limit}+</h5>
            <h2>Dose 1 :- {session.available_capacity_dose1}</h2>
            <h2>Dose 2 :- {session.available_capacity_dose2}</h2>
          </div>
        )
      })
    }
  </div> : "Sorry, No vaccine available"}
</div>
<br />
<div className="kalavur">
  <h1>{kalavur ? kalavur.name : "Sorry, No vaccine available"}</h1>
  <p>{kalavur ? kalavur.address : "Sorry, No vaccine available"}</p>
  {kalavur.sessions ? <div className="kalavur-sub">
    {
      kalavur.sessions.map(session => {
        return (
          <div className="kalavur-in">
            <h5>Date :- {kalavur.sessions ? session.date : "Sorry, No vaccine available"}</h5>
            <h5> Age Limit :- {session.min_age_limit}+</h5>
            <h2>Dose 1 :- {session.available_capacity_dose1}</h2>
            <h2>Dose 2 :- {session.available_capacity_dose2}</h2>
          </div>
        )
      })
    }
  </div> : "Sorry, No vaccine available"}
</div>
<br />
<div className="punnapraNorth">
  <h1>{punnapraNorth ? punnapraNorth.name : "Sorry, No vaccine available"}</h1>
  <p>{punnapraNorth ? punnapraNorth.address : "Sorry, No vaccine available"}</p>
  {punnapraNorth.sessions ? <div className="punnapraNorth-sub">
    {
      punnapraNorth.sessions.map(session => {
        return (
          <div className="punnapraNorth-in">
            <h5>Date :- {punnapraNorth.sessions ? session.date : "Sorry, No vaccine available"}</h5>
            <h5> Age Limit :- {session.min_age_limit}+</h5>
            <h2>Dose 1 :- {session.available_capacity_dose1}</h2>
            <h2>Dose 2 :- {session.available_capacity_dose2}</h2>
          </div>
        )
      })
    }
  </div> : "Sorry, No vaccine available"}
</div>

<br />
<div className="punnapraSouth">
  <h1>{punnapraSouth ? punnapraSouth.name : "Sorry, No vaccine available"}</h1>
  <p>{punnapraSouth ? punnapraSouth.address : "Sorry, No vaccine available"}</p>
  {punnapraSouth.sessions ? <div className="punnapraSouth-sub">
    {
      punnapraSouth.sessions.map(session => {
        return (
          <div className="punnapraSouth-in">
            <h5>Date :- {punnapraSouth.sessions ? session.date : "Sorry, No vaccine available"}</h5>
            <h5> Age Limit :- {session.min_age_limit}+</h5>
            <h2>Dose 1 :- {session.available_capacity_dose1}</h2>
            <h2>Dose 2 :- {session.available_capacity_dose2}</h2>
          </div>
        )
      })
    }
  </div> : "Sorry, No vaccine available"}
</div>

      <footer>
        <p>© 2021 copyright : Kiran K K</p>
        <p>desined and developed by Kiran K K</p>
      </footer>

    </div>
  )
}

export default App
