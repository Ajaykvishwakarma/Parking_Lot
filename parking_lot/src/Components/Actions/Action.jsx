// import * as React from 'react';
import { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

import Style from './Action.module.css';
const axios = require("axios");
export const Action = () => {

    const [data, setData ] = useState([]);
    let data1;
    useEffect(() => {
        getData()
        //  data1 = data[0];
        
    },[])
    
    const getData = () => {

        axios.get('http://localhost:8080/Entrances').then(res => {
            setData(res.data)
        })
    }
    //  console.log(data)
   

    return (
        <>
        <div className={Style.container}>
           
        <Box sx={{ '& button': { m: 4.1 } }}>
        <Button variant="outlined" size="small"> Small </Button>
        <Button variant="outlined" size="small"> Medium </Button>
        <Button variant="outlined" size="small"> Large </Button>
        </Box>
                
           <Box sx={{ '& button': { m: 2 } }} id={Style.allBtn} >
           {data.map((el) => { 
                let floor = el.floor;
               return (
                   <>
           { (floor === "small") ?  <Button variant="contained" size="small"> Small </Button> : ""} 
           { (floor === "medium") ?  <Button variant="contained" size="small"> Medium </Button> : ""} 
           { (floor === "large") ? <Button variant="contained" size="small"> Large </Button>: ""} 
           </>
           );
        })}
            </Box>
               
            
        </div>
        </>
    )

}