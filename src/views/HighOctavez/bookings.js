import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { cilNotes, cilPencil, cilPlus, cilSearch, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import React, { useState } from "react";

function remove(id){
    alert("remove"+id);
}

const Bookings = () => {

    const [query , setquery] = useState("");
    const [add , setAdd] = useState(false);
    const [newValue , setNewValue] = useState({});

    const data =[{"id":1,"name":"Ravishnu","event":"Rockerstar","date":"15/10/2022","time":"06:00PM - 10:00PM","status":"Reserved"},{"id":2,"name":"Muni","event":"walk with music","date":"02/11/2022","time":"02:00PM - 06:00PM","status":"Reserved"},{"id":3,"name":"Karthi","event":"walk with music","date":"02/11/2022","time":"02:00PM - 06:00PM","status":"Reserved"},{"id":4,"name":"Arun","event":"Life of Rhythms","date":"12/11/2022","time":"05:00PM - 07:00PM","status":"Reserved"}];


    function AddRow(){

      return <tr>
            <td></td>
            <td>
                <input type="text" value={newValue.user_name || ""} placeholder="User name" onChange={(e)=>{setNewValue(values =>({...values , "user_name":e.target.value}))}}/>
            </td>
            <td>
            <input type="text" value={newValue.event_name || ""} placeholder="Event name" onChange={(e)=>{console.log(e.target.value);}}/>

            </td>
            <td>
            <input type="text" value={newValue.event_date || ""} placeholder="Event date" onChange={(e)=>{console.log(e.target.value);}}/>

            </td>
            <td>
            <input type="text" value={newValue.start_time || ""} placeholder="Start time" onChange={(e)=>{console.log(e.target.value);}}/>

            </td>
            <td>
            <input type="text" value={newValue.status || ""} placeholder="Booking status" onChange={(e)=>{console.log(e.target.value);}}/>
            </td>
            <td>
                <button className="btn btn-sm btn-success" style={{marginRight:7}}>Save</button>
                <button className="btn btn-sm btn-info" onClick={()=>{setAdd(false)}}>Cancel</button>
            </td>
        </tr>
    }

    const table = data.filter(value =>{
    if(query == ""){
        return value;
    }
    else if (value.event.toLowerCase().includes(query.toLowerCase())){
        return value;
    }
    else if (value.name.toLowerCase().includes(query.toLowerCase())){
        return value;
    }
    }).map((item)=>
    <tr key={item.id}>
        <td>{item.id}</td>
        <td>{item.name}</td>
        <td>{item.event}</td>
        <td>{item.date}</td>
        <td>{item.time}</td>
        <td>{item.status}</td>
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
          <h4 className='text offset-md-5'>Bookings</h4>
          <div className='input-group'>
            <input className='form-control offset-md-7' type="text" 
            autoComplete="off" placeholder='search by event name' name="search" onChange={(e)=>{setquery(e.target.value)}}/>
            <button className='btn btn-primary'><CIcon icon={cilSearch}></CIcon></button>
          </div>
        </CCardHeader>
        <CCardBody>
            <div className="table-responsive">
                <table className="table table-bordered text-center">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>Name</th>
                            <th>Booked event</th>
                            <th>Event date</th>
                            <th>Event timing</th>
                            <th>Status</th>
                            <th>Actions
                                <button style={{"marginLeft":5}} className="btn btn-link" onClick={()=>{setAdd(true)}}><CIcon icon={cilPlus}></CIcon></button>
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {table}
                        {add ? <AddRow />:""}
                    </tbody>
                </table>
            </div>
        </CCardBody>
        </CCard>
    )
}

export default Bookings