import React,{useState,useEffect} from 'react'

export default function Table(props) {
    const [loading, setloading] = useState(false);
    const [sort, setsort] = useState(props.data);
    // const [tablebody, settablebody] = useState([]);

    //   async function sort_death() {
    //     tbody.innerHTML = ''
    //     console.log('death')
    //     const p = await data.response.sort(function (p, q) {
    //       return q.deaths['1M_pop'] - p.deaths['1M_pop']
    //     })
    //     return p
    //   }

    console.log(sort);

        let myArrMadeFromForEach = [];
    const p = async () => {
            
            const m = await sort.forEach((ele, i) =>
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
            return m
        }
        useEffect(() => {
            p().then((m) => {
                setsort(m);
                setloading(!loading);
            })
        });
        if (loading) {
            return (
                <div>
                    {/* <pre id="coordinates" class="coordinates"></pre> */}
                    sort by per million:
                    <button onClick={() => { }} class='button btn-danger btn_death'>
                        deaths
                    </button>
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
                                {sort}
                                {/* {   props.data.forEach((ele) => {
               
              
            }
            )} */}
                            </tbody>
                        </table>
                    </div>
                </div>
            )
        }
        if (!loading) {
            return (
                <>
                    <h1>loading...</h1>
                </>
            )
        }
}
    

