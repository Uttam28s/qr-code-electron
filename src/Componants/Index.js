import React, { useState,useEffect } from 'react'
import LeftBar from './LeftSide/LeftBar'
import RightBar from './RighrSide/RightBar'
import {sampleCode} from "../Componants/sampleData"
import ErrorCaseLayout from './TogleSwitch/DragCompo'
import { lastOneNumber } from './functions'

const Index = () => {
 const [data, setData] = useState([])
 const [togle,setTogle]=useState(false)

 const setdata = (d)=>{
    let dataArry = [...data]
    dataArry.push(d)
    setData(dataArry);
    setTogle(!togle)
    localStorage.setItem("allcode",JSON.stringify(d))
    let cateArray = JSON.parse(localStorage.getItem("category")) || [];
    let uncate =  JSON.parse(localStorage.getItem("uncate")) ||[];
    let uncateFlag = true

   cateArray.map((val, i) => {
     let startRange = val.startRange;
     let endRange = val.endRange;
     let list = [...cateArray[i].list]
      if( lastOneNumber(d) >= startRange &&
          lastOneNumber(d) <= endRange
         ){
          list.push(d);
          uncateFlag = false
         }
         cateArray[i].list=[...list]
   });
   if(uncateFlag){
    uncate.push(d)
   }
   localStorage.setItem('category',JSON.stringify(cateArray))
   localStorage.setItem('uncate',JSON.stringify(uncate))
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