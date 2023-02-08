import React, { useEffect } from 'react'
import axios from 'axios'

function Effect() {
    const cities=['Riadh','jeedah','jazan','Abha','Dmmam']
    const [city,setCity]=React.useState('')
    const [weather , setWeather]=React.useState<any>({})

   
    // const api=`http://api.weatherapi.com/v1/current.json?key=f2427d1478ab43849e0180901230702&q=${city}&aqi=no`

    //     useEffect (()=>{axios.get (api).then(res=>{
    //     console.log(res.data)
    //     setWeather(res.data)
    //     })
    // },[])

    useEffect(()=>{ fetch(`http://api.weatherapi.com/v1/current.json?key=f2427d1478ab43849e0180901230702&q=Riyadh&aqi=no`)
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        setWeather(data)
    });
    },[]);

  return (

    <div>
        <h2>Weather in: {city}</h2>
        <div>

        <input type="text"  
        value={city}
        onChange={e=>setCity(e.target.value)}
        list='city-options'
        
        />

        <datalist  id='city-options'>
            
            {cities.map(e=> (<option key={e} value={e} />))}
            
            </datalist>
        </div>

        {weather.item &&(
            <div>
                <p>Temer:{weather.item.temp_f}F</p>
                <p>Humi:{weather.item.humidity}%</p>
                <p>Wind Speed:{weather.item.wind_kph}</p>
                <p>Wind Speed:{weather.item.icon}</p>

              
            </div>

        )}

    </div>
    
//     <div>
//        {data.map((item:any)=>
//        <div key={item.location} >
//                 {item.name}
//                 {item.icon}

//     </div>
// )}


//     </div>

  )
}

export default Effect