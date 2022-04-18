import Style from './Show.module.css';
import { useEffect, useState} from "react";
import { useParams } from "react-router-dom";

const axios = require("axios");
export const Show = () => {

    const {id1} = useParams()

   

    const [data, setData] = useState([])

    useEffect(() => {
        getdata()
        
    },[])

   const getdata = () => {
        axios.get('http://localhost:8080/Entrances').then( res => {
            setData(res.data)
        })
    }

    // let exit;
    const handleDelete = (id) => {
        // addExit(id)
        axios.delete(`http://localhost:8080/Entrances/${id}`).then(getdata())
    //    console.log(exit)
    }
    

  


    return (
        <>
          <div  className={Style.container}>
              {data.map((el, i) => {
                  var rs = el.hour * 5;
                  return (
                <div >
               <div>Vehicle No. {el.plateNo}</div>
               <div>Floor : {el.floor}</div>
               <div>{el.date}</div>
               <div>Rs. {rs}</div>
               <div><td key={i}><button onClick={() => handleDelete(el.id)}> Delete </button></td></div>
               </div>
              
                  )
              })}
               </div>
        </>
    )

}