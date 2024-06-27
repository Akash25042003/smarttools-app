import React, { useState } from 'react'
import './bmi.css'
const Bmi = () => {

    const[height,setheight]=useState("")
    const[weight,setweight]=useState("")
    const[data,setdata]=useState("")
    const[status,setstatus]=useState("")
    const[error,seterror]=useState("")

    let handleheight=(e)=>{
        setheight(e.target.value)
    }
    let handleweight=(e)=>{
        setweight(e.target.value)
    }
    let handelclear=()=>{
        setdata("")
        seterror("")
        setheight("")
        setweight("")
    }

    
    let handeldata=()=>{
        if(height && weight){
            const reheight=height/100
            const del=weight/(reheight*reheight)
            setdata(del.toFixed(2))
            if(del<18.5){
                setstatus("underweighted")
            }
            else if(del>=18.5 && del<24.9){
                setstatus("normal weight")
            }
            else if(del>=24.9 && del<29.9){
                setstatus("overweight")
            }
            else{
                setstatus("Obese")
            }
            seterror("")
        }
        else{
            setdata("")
            setstatus("")
            seterror("Error :please enter the value data")
        }
    }

  return (
    <div>
        <div className="bmi-body">
            <div className="bmi-container">
                <div className="bmi-calculator">BMI calculator</div>
                <div className="bmi-error"> {error}</div>
                <div className="bmi-height">
                    <label htmlFor="height">Enter your height (cm)</label>
                    <input type="number" id='height' placeholder='height' value={height} onChange={handleheight} />
                </div>
                <div className="bmi-height">
                    <label htmlFor="weight">Enter your weight (kg)</label>
                    <input type="number" id='weight' placeholder='weight' value={weight} onChange={handleweight} />
                </div>
                <div className="bmi-but">
                    <button onClick={handeldata}>calculate</button>
                    <button onClick={handelclear}>clear</button>
                </div>
                {data && (
                <div className="bmi-footer">
                    <div className="bmi-last">BMI value :{data}</div>
                    <p>your status : {status}</p>
                </div>)}
            </div>
        </div>
    </div>
  )
}

export default Bmi