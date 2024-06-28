import React, { useState } from 'react'
import '../style/qrcode.css'
// import pic from './pics/my.jpg'
const Qrcode = () => {

  const[img,setimg]=useState("")
  const[word,setword]=useState("")
  const[size,setsize]=useState("")

  let handletext=(e)=>{
    setword(e.target.value)
  }
  let handlesize=(e)=>{
    setsize(e.target.value)
  }
  async function generator(){
    try{
      const url=`https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(word)}`;
      setimg(url);
    } 
    catch(error){
      console.log("error in your code".error)

    }
  }
  function handledowload() {
    fetch(img)
    .then((res)=>res.blob())
    .then((blob)=>{
      const link=document.createElement("a");
      link.href=URL.createObjectURL(blob);
      link.download="Qrcode.png"
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    })
  }
  return (
    <div>
      <div className="qr-body">
        <div className="qr-container">
          <div className="qr-first">
            <div className='qr'>Qrcode generator</div>
            {img && <img className='qr-im' src={img} alt="akash" />}
          </div>
          <div className="qr-text">
            <label htmlFor="text">Enter your text or link</label>
            <input type="text" value ={word} id='text' onChange={handletext}/>
          </div>
          <div className="qr-text">
            <label htmlFor="size">Enter the image size</label>
            <input type='number' value ={size} id='size' onChange={handlesize}/>
          </div>
          <div className="qr-but">
            <button onClick={generator}>Qrcode generator</button>
            <button onClick={handledowload}>Dowload qrcode</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Qrcode