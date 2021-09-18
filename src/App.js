import './App.css';
import React,{ useEffect, useState } from 'react';
import Header from './components/Header';
import Poster from './components/Poster';

function App() {

//   const [data, setdata] = useState([]);
//   const [loading, setloading] = useState(false);

//  var get=async(url)=> {
//     setloading(true);
//     const res = await fetch(url, {
//       method: 'GET',
//       headers: {
//         'x-rapidapi-host': 'covid-193.p.rapidapi.com',
//         'x-rapidapi-key': '5506d672c0mshf956266881ceab1p1b1c17jsn74b9b2547f4d',
//       },
//     })
//     const dat = await res.json();
//     return dat;
//   }
//   useEffect(() => {
//     get('https://covid-193.p.rapidapi.com/statistics').then((data) => {
//       setloading(false);
//       setdata(data.response);
//       console.log(data.response);
//     });
    // console.log(data.response);
    // async function sort_new() {
    // data.response.sort(function (a, b) {
    //   return b.cases.new - a.cases.new;
    // });
   
    // callbck();
    // return p;
  // });
    // function callbck() {
      // sort_new().then((data) => {
      //   setdata(data);
      // })
    // };
    // sort_new();

   
  // });
  // });

 
  return (
    <>
      <Header />
      <Poster />
      
    </>
  );
}

export default App;
