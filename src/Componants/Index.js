import React, { useState,useEffect } from 'react'
import LeftBar from './LeftSide/LeftBar'
import RightBar from './RighrSide/RightBar'
import {sampleCode} from "../Componants/sampleData"
import ErrorCaseLayout from './TogleSwitch/DragCompo'

const Index = () => {
 const [data, setData] = useState([])
 const [togle,setTogle]=useState(false)

 const setdata = (d)=>{
  // console.log("🚀 ~ file: Index.js ~ line 14 ~ setdata ~ data", d)

   setData(d);
   setTogle(!togle)
   console.log("🚀 ~ file: Index.js ~ line 15 ~ setdata ~ d", d)
   localStorage.setItem("allcode",JSON.stringify(d))

 }
//  useEffect(() => {
//    console.log("🚀 ~ file: Index.js ~ line 9 ~ Index ~ data", data)
//   setTogle(!togle)
//  }, [data])
 



  return (
    <div className="main-screen-wrapper">{
      console.log("🚀 ~ file: Index.js ~ line 10 ~ Index ~ togle", togle,data)

    }
    <LeftBar data={data} setdata={setdata} />
    <RightBar data={data} setdata={setdata}/>
    </div>

  )
}

export default Index