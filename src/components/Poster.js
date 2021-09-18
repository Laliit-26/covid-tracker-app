import React, { useState, useEffect } from 'react';
import './Poster.css';
import Mp from './Map';
import Table from './Table';


export default function Poster() {

  const [loading, setloading] = useState(false);
  const [count, setcount] = useState(0);
  const [death, setdeath] = useState(0);
  const [recover, setrecover] = useState(0);
  const [mp, setmp] = useState({ country: "" });
  const [data, setdata] = useState([]);
  

  var get = async (url) => {
    const res = await fetch(url, {
      method: 'GET',
      headers: {
        'x-rapidapi-host': 'covid-193.p.rapidapi.com',
        'x-rapidapi-key': '5506d672c0mshf956266881ceab1p1b1c17jsn74b9b2547f4d',
      },
    })
    const dat = await res.json();
    return dat;
 
  }

  useEffect(
    () => {
      get('https://covid-193.p.rapidapi.com/statistics').then((data) => {
        
        data.response.forEach((ele) => {
          // mp.set(ele.country, ele.cases.total)
          mp[ele.country] = ele.cases.total;
           setmp({ ...mp ,mp });
        });
        setdata(data.response);

        async function sort_new() {
          const p = await data.response.sort(function (a, b) {
            return b.cases.new - a.cases.new
          })
          return p
        }
        sort_new().then((data) => {
          call_again(data);
        })

        // async function sort_death() {
        //   tbody.innerHTML = ''
        //   console.log('death')
        //   const p = await data.response.sort(function (p, q) {
        //     return q.deaths['1M_pop'] - p.deaths['1M_pop']
        //   })
        //   return p
        // }
        // const call_death = () => {
        //   sort_death().then((data) => {
        //     call_again(data)
        //   })
        // }
        // btn_death.addEventListener('click', call_death)

        // async function sort_cases() {
        //   tbody.innerHTML = ''
        //   console.log('cases')
        //   const p = await data.response.sort(function (p, q) {
        //     return q.cases['1M_pop'] - p.cases['1M_pop']
        //   })
        //   return p
        // }
        // const call_cases = () => {
        //   sort_cases().then((data) => {
        //     call_again(data)
        //   })
        // }
        // btn_cases.addEventListener('click', call_cases)

        // call_again(data);
        function call_again(data) {
          // console.log(mp)
          setcount(data[0].cases.total);
          setdeath(data[0].deaths.total);
          setrecover(data[0].cases.recovered);
          // console.log(mp['India']);
          // active = data[0].cases.active
          setloading(!loading);
          //   data.forEach((ele) => {
          //     // console.log(ele.cases.total);

          //     // death = ele[0].deaths.total;
          //     // recovered = ele[0].cases.recovered;
          //     // active = ele[0].cases.active;
          //     // count += ele.cases.total;
          //     // death += ele.deaths.total;
          //     // recovered += ele.cases.recovered;
          //     // active += ele.cases.active;
          //     tbody.innerHTML += `<tr>
          //   <th scope='row'>${ele.country}</th>
          //   <td>${ele.cases.total}</td>
          //   <td>${ele.cases.new}</td>
          //   <td>${ele.cases.critical}</td>
          //   <td>${ele.cases.active}</td>
          //   <td>${ele.deaths.total}</td>
          //   <td>${ele.cases.recovered}</td>
          // </tr>`
          //   })
          //   console.log(count)
          // show(count, death, recovered, active)
          // setMap()
        }
      })
    },
    { }
  );

// }, 1000);

// const show = (count, death, recovered, active) => {
//   console.log(count, death, recovered, active)
//   total_case.innerHTML = count
//   total_death.innerHTML = death
//   total_recovered.innerHTML = recovered
// }






  if (loading) {
    return (
     <>
      <div className='poster bg-image' >
        <div class='total d-flex '>
          <div className='onposter total_case'>
            <div className='elename'>Total cases</div>
            <div className='elevalue'>
              {count}
              {/* {props.dat.length === 0 ? ' ' : props.dat[0].cases.total} */}
            </div>
          </div>
          <div className='onposter total_death'>
            <div className='elename'>Total deaths</div>
            <div className='elevalue'>
              {death}
              {/* {props.dat.length === 0 ? ' ' : props.dat[0].deaths.total} */}
            </div>
          </div>
          <div className='onposter total_recovered'>
            <div className='elename'>Total recovered</div>
            <div className='elevalue'>
              {recover}
              {/* {props.dat.length === 0 ? " " : props.dat[0].cases.recovered} */}
            </div>
          </div>
        </div>
      </div>
        <Mp obj={mp} />
        <Table data={data}/>
      </>
    )
  };
  if(!loading) {
    return (
      <>
      <img src="loading.svg" alt="" />
        </>
    )
  }
 
  
}
