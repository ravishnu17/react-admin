import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilNotes, cilPencil, cilSearch, cilTrash } from "@coreui/icons";
import React, { useState } from "react";
function remove(id){
    alert("remove -"+id)
}


const Events = () => {


    const [query , setquery] = useState("");

    const data =[{"id":1,"event":"Rockstar party","date":"15/10/2022","startTime":"06:00 PM","endTime":"10:00PM","seat":"107","cost":500},{"id":2,"event":"Walk with music","date":"02/11/2022","startTime":"02:00 PM","endTime":"06:00PM","seat":"117","cost":350},{"id":3,"event":"play with beats","date":"10/11/2022","startTime":"06:00 PM","endTime":"08:00PM","seat":"100","cost":300},]

    const table = data.filter(value =>{
    if(query == ""){
        return value;
    }
    else if (value.event.toLowerCase().includes(query.toLowerCase())){
        return value;
    }
    }).map((item)=>
    <tr>
        <td>{item.id}</td>
        <td>{item.event}</td>
        <td>{item.date}</td>
        <td>{item.startTime}</td>
        <td>{item.endTime}</td>
        <td>{item.seat}</td>
        <td>{item.cost}</td>
        <td>
        <div className='d-flex justify-content-center'>
            <button className='btn btn-sm btn-success text-white'>
            <CIcon icon={cilPencil} width={20}></CIcon> Edit
            </button>
            <button className='btn btn-sm btn-danger text-white' style={{"marginLeft":20}} onClick={()=>remove(item.id)}>
            <CIcon icon={cilTrash} width={20}></CIcon>Delete
            </button>
        </div>
        </td>
    </tr>
    );


    return (
        <CCard>
        <CCardHeader className='d-flex justify-content-center bg-info'>
          <h4 className='text offset-md-5'>Events</h4>
          <div className='input-group'>
            <input className='form-control offset-md-7' type="text" 
            autoComplete="off" onChange={(e)=>{setquery(e.target.value)}} placeholder='search by event name' name="search"/>
            <button className='btn btn-primary'><CIcon icon={cilSearch}></CIcon></button>
          </div>
        </CCardHeader>
            <CCardBody>
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Event Name</th>
                            <th>Event Date</th>
                            <th>Event start time</th>
                            <th>Event end time</th>
                            <th>Available seats</th>
                            <th>Ticket cost (Rs.)</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}
                    </tbody>
                </table>
            </CCardBody>
        </CCard>
    )
}

export default Events