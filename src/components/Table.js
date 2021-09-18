import React,{useState} from 'react'

function Table(props) {

    const [sort, setsort] = useState(props.data);
    console.log(props.data);



    
    const myArrMadeFromForEach = [];
    sort.forEach((ele, i) =>
      myArrMadeFromForEach.push(
        <tr>
          <td>{ele.country}</td>
          <td>{ele.cases.total}</td>
          <td>{ele.cases.new}</td>
          <td>{ele.cases.critical}</td>
          <td>{ele.cases.active}</td>
          <td>{ele.deaths.total}</td>
          <td>{ele.cases.recovered}</td>
        </tr>
      )
    )
    return (
      <div>
        {/* <pre id="coordinates" class="coordinates"></pre> */}
        sort by per million:
        <button class=' button btn-danger btn_death'>death</button>
        <button class='button btn-danger btn_cases'>cases</button>
        <div class='table-responsive'>
          <table class='table table-success table-striped mt-4'>
            <thead>
              <tr>
                <th scope='col'>country</th>
                <th scope='col'>total</th>
                <th scope='col'>new cases</th>
                <th scope='col'>critical</th>
                <th scope='col'>active case</th>
                <th scope='col'>death</th>
                <th scope='col'>recovered </th>
              </tr>
            </thead>
            <tbody class='table_body'>
             {myArrMadeFromForEach}
              {/* {   props.data.forEach((ele) => {
               
              
            }
            )} */}
            </tbody>
          </table>
        </div>
      </div>
    )
}

export default Table
