import { v4 as uuid } from 'uuid'
import SearchIcon from '@mui/icons-material/Search';
import Style from  './Input.module.css';
import { useState } from 'react';
const axios = require("axios");
export const Input = () => {

    const [ data, setData ] = useState({
    id:uuid(),
    plateNo:"",
    floor:"",
    hour : "",
    date : ""
    })

    const date = new Date();

    var hour = date.getHours();

    const handleChange = (e) => {
        let {id, value, checked, type} = e.target;
        value = type === "checkbox" ? checked:value;
        setData({...data, [id]:value})
    }

    let date1 = new Date().toLocaleString() + " ";

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:8080/Entrances', data).then(() => {
           
            setData({
                id:uuid(),
                plateNo:"",
                floor:"",
                hour : hour,
                date : date1
            })
        })
        alert("Welcome!..")
    }



    return (
        <div className={Style.widget_search_input}>
            <form onSubmit={handleSubmit}>
             <input className={Style.search} id="plateNo" value={data.plateNo} onChange={handleChange} type="number" placeholder='Vehicle No.' />
            
         <br></br>
         <br></br>
         <select className={Style.selectOpt} id ="floor" value={data.option} onChange={handleChange}>
                    <option>....</option>
                    <option value="small" >Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
            </select>
            <br></br><br></br>
            <input type ="submit" value="Enter" className={Style.Btn} />
            </form>
         </div>
    )
}