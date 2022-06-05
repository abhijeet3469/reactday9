import React, { useEffect, useState } from 'react'
import visi from '../view.png'
import notvisi from '../visibility.png'

export default function Usestate() {
    const [val, setVal] = useState(0)
    const [name, setName] = useState('')
    const [eye, setEye] = useState(true)
    const [count, setCount] = useState(0)
     
    const func1 =  () => {
        console.log(val);
        setVal((prev) => {
            return prev+1
        })
    }

    const func2 =  () => {
        console.log(val);
        setVal(val-1)
    }


    const fun2 = (e) => {
        console.log(e.target.value);
        setName(e.target.value)

    }

    const eyes = () => {
        // if(eye){
        //     setEye(false)                     // using if else
        // }
        // else{
        //     setEye(true)
        // }

        eye?setEye(false):setEye(true)          // using ternary operator
    }



    useEffect (() => {
        setTimeout(()=>{
            setCount((count)=>count+1)
        },1000)
    },[val]);
    
 
 










 
    return (
        <>
        <h1>Auto Counter is rendering {count} times</h1>
        <h1>{val}</h1>
        <button className='btn btn-warning' onClick={() => {func1()}}>Increament</button>
        <button className='btn btn-primary' onClick={func2}>Decrement</button>
        <button className='btn btn-danger' onClick={()=>{console.log(val); setVal(val*val)}}>Squaring</button>
        <br></br>
        <input type='text' onChange={fun2}></input>
        <h3>{name}</h3>
        <br></br>
        <input type={eye ? "password" : "text" }/>  <img onClick={eyes} src={eye?notvisi:visi} height='40px' alt=''/>
        </>


    
  )
}




