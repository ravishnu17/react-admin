import { CCard , CCardHeader , CCardBody } from '@coreui/react';
import CIcon from "@coreui/icons-react";
import { cilBackspace, cilCloudUpload, cilDelete, cilMinus, cilNoteAdd, cilNotes, cilPencil, cilPlus, cilSearch, cilTrash, cilUserPlus } from "@coreui/icons";
import React, { useState } from 'react';

function remove(id){
  alert("remove " +id)
}

function Donation() {

  const [query , setquery] = useState("");
  const [newValue , setNewValue] = useState({});
  const [add , setAdd] = useState(false);
  const [editID , setEditID] = useState();

  
  const data =[{"id":"1","name":"Bosco","donates_to":"Education","total_donations":"1200000"},{"id":"2","name":"Fransis","donates_to":"Medical","total_donations":"700000"},{"id":"3","name":"Guezou foundation","donates_to":"Education,Medical","total_donations":"2200000"}]

  function AddItem(){

    const setValue = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setNewValue(values=>({...values , [name]:value}))
      console.log(newValue);
    }

    return (
        <tr key ="new">
        <td></td>
        <td>
          <input className="form-control" type="text" name="name" placeholder='Donor name' value={newValue.name}  onChange={(e)=>{setNewValue(values =>({...values,"name":e.target.value}))}} />
        </td>
        <td>
          <input className="form-control" value={newValue.donates_to} name="donates-to" placeholder='Donates to' type="text" onChange={(e)=>{setNewValue(value=>({...value,"donates_to":e.target.value}))}} />
        </td>
        <td>
          <input className="form-control" name="totalDonations" value={newValue.total_donations} type="number" placeholder='Total donations' onChange={(e)=>{setNewValue(value=>({...value,"total_donations":e.target.value}))}} />
        </td>
        <td>
          <button className='btn btn-success' onClick={()=>{setAdd(false),console.log(newValue)}}>save</button>
          <button className='btn btn-secondary' onClick={()=>{setAdd(false)}} style={{marginLeft:20}}>cancel</button>
        </td>
      </tr>      
    )
  }

  function Edit(item ,index){
    if(editID == item.id)
    {
      return <tr key={index}>
      <td>{item.id}</td>
      <td>
        <input className="form-control" type="text" value={newValue.name || item.name} placeholder="Donor name" onChange={(e)=>{setNewValue(value =>({...value,"name":e.target.value}))}} />
      </td>
      <td>
        <input className="form-control" type="text" value={newValue.donates_to || item.donates_to} onChange={(e)=>{setNewValue(value =>({...value,"donates_to":e.target.value}))}} />
      </td>
      <td>
        <input className="form-control" type="number" value={newValue.total_donations || item.total_donations} onChange={(e)=>{setNewValue(value =>({...value,"total_donations":e.target.value}))}} />
      </td>
      <td>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-sm btn-success text-white' onClick={(e)=>{console.log(newValue);setEditID()}}>
            <CIcon icon={cilCloudUpload} width={20}></CIcon> Save
          </button>
          <button className='btn btn-sm btn-secondary' style={{"marginLeft":20}} onClick={()=>{setEditID()}}>
          Cancel
          </button>
        </div>
      </td>
    </tr> 
    }
    else if(item.id != editID){
    return <tr key = {index}>
    <td>{item.id}</td>
    <td>{item.name}</td>
    <td>{item.donates_to}</td>
    <td>{item.total_donations}</td>
    <td>
      <div className='d-flex justify-content-center'>
        <button className='btn btn-sm btn-success text-white' onClick={(e)=>{setEditID(item.id),setNewValue({})}}>
          <CIcon icon={cilPencil} width={20}></CIcon> Edit
        </button>
        <button className='btn btn-sm btn-danger text-white' style={{"marginLeft":20}} onClick={()=>remove(item.id)}>
          <CIcon icon={cilTrash} width={20} ></CIcon>Delete
        </button>
      </div>
    </td>
  </tr>
    }    
  }

  const table = data.filter(value =>{
    if(query == ""){
      return value;
    }
    else if (value.name.toLowerCase().includes(query.toLowerCase())){
      return value;
    }
  }).map((item , index)=>{
    return Edit(item,index);
  }
  );

  return (
    <div>
    <CCard>
    <CCardHeader className='d-flex justify-content-center bg-info'>
          <h4 className='text-nowrap offset-md-5'>Donation and Tax</h4>
          <div className='input-group'>
            <input className='form-control offset-md-6' autoComplete='off' type="text" onChange={(e) =>{setquery(e.target.value)}} placeholder='search by donor name' name="search"/>
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
            <th>Action <button className='btn btn-link' onClick={(e)=>{setAdd(true),setNewValue({})} }> <CIcon icon={cilPlus}></CIcon>Add</button></th>
            </tr>
          </thead>
          <tbody>
            {table}
            {add ? <AddItem /> :""}
          </tbody>
        </table>
      </CCardBody>
    </CCard>
  </div>
  )
}

export default Donation