import React, { useState } from 'react'
const Password = () => {
    const[length,setlength]=useState("")
    const[upper,setupper]=useState(true)
    const[lower,setlower]=useState(true)
    const[symbol,setsymbol]=useState(true)
    const[number,setnumber]=useState(true)
    const[password,setpassword]=useState("")

    const handlelength=(e)=>{
        setlength(e.target.value)
    }
    const handleupper=(e)=>{
        setupper(e.target.checked)
    }
    const handlelower=(e)=>{
        setlower(e.target.checked)
    }
    const handlenumber=(e)=>{
        setnumber(e.target.checked)
    }
    const handlesybol=(e)=>{
        setsymbol(e.target.checked)
    }


    const handlegenerate=()=>{
        let passet="";
        if(upper) passet +="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        if(lower) passet +="abcdefghijklmnopqrstuvwxyz";
        if(symbol) passet +="!@#$%^&*_+-/"
        if(number) passet +="1234567890"
        let generatepassword="";
        for(let i=0;i<length;i++){
            const passrandom=Math.floor(Math.random()* passet.length);
            generatepassword +=passet[passrandom]
        }
        setpassword(generatepassword)
    }
    const handlecopy=()=>{
        navigator.clipboard.writeText(password);
        alert("Password copied")
    }
  return (
   <div className="password-main"> 
   <div className='password-body'>
   <div className="pass-heading">
       password generator
   </div>
   <div className="pass-input">
       <label htmlFor="password">password length</label>
       <input type="number" id='password'  value={length} onChange={handlelength} placeholder='length..'/>
   </div>
   <div className="pass-check">
       <div className="pass-case">
       <input type="checkbox" id='upper' className='case-input' checked={upper} onChange={handleupper}/>
       <label htmlFor="upper">Uppercase</label>
       </div>
       <div className="pass-case">
       <input type="checkbox" id='lower' className='case-input' checked={lower} onChange={handlelower}/>
       <label htmlFor="lower">Lowercase</label>
       </div>
       <div className="pass-case">
       <input type="checkbox" id='pass-num' className='case-input' checked={number} onChange={handlenumber}/>
       <label htmlFor="pass-num">Numbers</label>
       </div>
       <div className="pass-case">
       <input type="checkbox" id='symboles' className='case-input' checked={symbol} onChange={handlesybol}/>
       <label htmlFor="symboles">Symboles</label>
       </div>
   </div>
   <div className="pass-footer-but">
   <button className='pass-generator' onClick={handlegenerate}>Generate</button>
   </div>
   <div className="pass-footer">
       <input type="text" readOnly  value={password}/>
       <button onClick={handlecopy}>copy</button>
   </div>
</div>
</div>
  )
}

export default Password