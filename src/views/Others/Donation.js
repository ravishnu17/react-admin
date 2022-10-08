import { CCard , CCardHeader , CCardBody } from '@coreui/react';
import CIcon from "@coreui/icons-react";
import { cilBackspace, cilDelete, cilMinus, cilNoteAdd, cilNotes, cilSearch, cilTrash, cilUserPlus } from "@coreui/icons";
import React, { useState } from 'react'

function Donation() {

  const [query , setquery] = useState("");

  const data =[{"id":"1","name":"Bosco","donates":"Education","total":"12,00,000"},{"id":"2","name":"Fransis","donates":"Medical","total":"7,00,000"},{"id":"1","name":"Guezou foundation","donates":"Education,Medical","total":"22,00,000"}]

  const table = data.filter(value =>{
    if(query == ""){
      return value;
    }
    else if (value.name.toLowerCase().includes(query.toLowerCase())){
      return value;
    }
  }).map((item)=>
  <tr>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.donates}</td>
    <td>{item.total}</td>
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
          <h4 className='text-nowrap offset-md-5'>Donation and Tax</h4>
          <div className='input-group'>
            <input className='form-control offset-md-6' autoComplete='off' type="text" onChange={(e) =>{setquery(e.target.value)}} placeholder='search' name="search"/>
            <button className='btn btn-primary'><CIcon icon={cilSearch}></CIcon></button>
          </div>
        </CCardHeader>
      <CCardBody>
        <table className="table table-bordered text-center">
          <thead>
            <tr>
              <th>#</th>
              <th>Donor Name</th>
              <th>Donates to</th>
              <th>Total Donations (Rs.)</th>
              <th >Actions</th>
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

export default Donation