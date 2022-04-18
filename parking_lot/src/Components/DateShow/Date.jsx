import { useState } from 'react';

import react from 'react';

   

export const Date1 = () => {

 
    // const [ date, setDate ] = useState([]);
   

    //   setDate(new Date().toLocaleString())

    // state={
    //     curDT : new Date().toLocaleString(),
    //   }

  
    // const current = new Date();
    // const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  
    let date = new Date().toLocaleString() + " ";
    // var time = date.getHours() + ":" + date.getMinutes() + ":" + date.getSeconds();

    // var currentTimeInSeconds=(Date.now());

 

    return (

      <div>

        <h4>Current Date And Time : {date}</h4>

      </div>

    )

  

}



// import React from 'react';
// var FontAwesome = require('react-fontawesome');

// export class Date1 extends React.Component {
//     constructor() {
//         super();

//         var today = new Date(),
//             date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

//         this.state = {
//             date: date
//         };
//         var time = new Date()
//     }

//     render() {
//         return (
//             <div className='date'>
//                 <FontAwesome name='calendar' />{this.state.date}
//             </div>
//         );
//     }
// }