import { CCard, CCardBody, CCardHeader } from '@coreui/react';
import CIcon from "@coreui/icons-react";
import { cilNotes, cilSearch, cilTrash } from "@coreui/icons";
import React, { useState } from 'react'

function Income() {

  const data=[
    {"id":1,"event":"Rockerz star","date": "05/09/2022","income":"60,000","expense":"10,000"},
    {"id":2,"event":"Music party","date": "20/09/2022","income":"1,06,000","expense":"25,000"},
    {"id":3,"event":"Disco Rhythms","date": "01/10/2022","income":"96,000","expense":"15,000"}
  ]

  const [query , setquery] = useState("");

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
    <td>{item.income}</td>
    <td>{item.expense}</td>
    <td>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-success'>
          <CIcon icon={cilNotes} width={20}></CIcon> Edit
        </button>
        <button className='btn btn-danger' style={{"marginLeft":20}}>
          <CIcon icon={cilTrash} width={20}></CIcon>Delete
        </button>
      </div>
    </td>
  </tr>
  );


  return (
    <div>
      <CCard>
      <CCardHeader className='d-flex justify-content-center bg-info'>
          <h4 className='text text-nowrap offset-md-5'>Income and Expense</h4>
          <div className='input-group'>
            <input className='form-control offset-md-5' type="text" onChange={ (e)=>{setquery(e.target.value)}} placeholder='search' name="search"/>
            <button className='btn btn-primary'><CIcon icon={cilSearch}></CIcon></button>
          </div>
      </CCardHeader>
      <CCardBody>
          <table className="table table-bordered text-center  ">
            <thead>
              <tr>
                <th>#</th>
                <th>Event Name</th>
                <th>Event Date</th>
                <th>Event Income (Rs.)</th>
                <th>Event Expense (Rs.)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {table}
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default Income