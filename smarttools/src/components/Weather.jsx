import React from 'react'
import { useEffect, useState } from 'react'
import '../style/weather.css'
const Weather = () => {
    const[blog,setblog]=useState("")
    const [name, setname] = useState("")
    const[temp,settemp]=useState(0)
    const[lat,setlat]=useState(0)
    const[lon,setlon]=useState(0)
    const[humidity,sethumidity]=useState(0)
    const[windspeed,setwindspeed]=useState(0)
    const[weather,setweather]=useState("")

    let handlein=(e)=>{
        setname(e.target.value)
    }
    let handlesearch =()=>{
      if (name!=null){
        setweather(name)
      }
    }
    let handleclr=()=>{
      setname("")
      settemp(0)
      setlat(0)
      setlon(0)
      sethumidity(0)
      setwindspeed(0)
      setweather("")


    }

    useEffect(()=>{
        try{
          fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&appid=8c4c71ab973c0b2eefaa69f1b2431541&units=Metric`)
          .then(res=>{
            return res.json()
          })
          .then(data=>{
            setblog(data)
          })
          settemp(blog.main.temp)
          setlat(blog.coord.lat)
          setlon(blog.coord.lon)
          setwindspeed(blog.wind.speed)
          sethumidity(blog.main.humidity)
    
        }
        catch(error){
          console.log("fail to fetch:",error.message)
    
        }
      },)

  return (
    <div className="wea-body">
        <div className="wea-main">
            <div className="wea-top">
            <input type="text"  placeholder='Enter your city name' autoFocus value={name} onChange={handlein}/>
            <button className='wea-sea-but' onClick={handlesearch}>search</button>
            </div>
            <div className="wea-first">
            <div className="wea-temperature">
                <p>{temp} °C</p>
                <div className="wea-heat">temperature</div>
            </div>
            </div>
            <div className="wea-sec">
            <div className="wea-hum-win">
                <div className="wea-humidity">
                    <div className="wea-humidity-num">{humidity}</div>
                    <div className="wea-humidity-let">humidity</div>
                </div>
                <div className="wea-windspeed">
                    <div className="wea-wind-num">{windspeed}</div>
                    <div className="wea-wind-let">wind speed</div>
                </div>
            </div>
            <div className="wea-l">
                <div className="wea-lon">
                    <div className="wea-lon-num">{lon}</div>
                    <div className="wea-lon-let">longititude</div>
                </div>
                <div className="wea-lat">
                    <div className="wea-lat-num">{lat}</div>
                    <div className="wea-lat-let">latitude</div>
                </div>
            </div>
            </div>
            <div className="wea-footer">
              <button onClick={(handleclr)}>clear</button>
            </div>
        </div>
    </div>
  )
}

export default Weather