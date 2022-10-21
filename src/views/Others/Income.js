import { CCard, CCardBody, CCardHeader } from '@coreui/react';
import CIcon from "@coreui/icons-react";
import { cilClearAll, cilCloudDownload, cilCloudUpload, cilLevelDown, cilNotes, cilPencil, cilPlus, cilSave, cilSearch, cilTrash } from "@coreui/icons";
import React, { useState } from 'react';
import Payment from '../Payments/Payment';

function Income() {

  const data  = [
    {"id":1,"event":"Rockerz star","date": "2022-09-05","income":60000,"expense":10000},
    {"id":2,"event":"Music party","date": "2022-09-20","income":106000,"expense":24500},
    {"id":3,"event":"Disco Rhythms","date": "2022-10-01","income":63000,"expense":14560}
  ];

  const [query , setquery] = useState("");
  const [isadd , setAdd] = useState(false);
  const [editID , setEditID] = useState();
  const [newValue , setNewValue]=useState({"event":"sample"});

  function AddItem(){

    const setValue = (e) =>{
      const name = e.target.name;
      const value = e.target.value;
      setNewValue(values=>({...values , [name]:value}))
      console.log(newValue);
    }

    return (
        <tr>
        <td></td>
        <td>
          <input className="form-control" type="text" value={newValue.event}  onChange={(e)=>{setNewValue(values =>({...values,"event":e.target.value}))}} />
        </td>
        <td>
          <input className="form-control" value={newValue.date} name="date" type="date" onChange={(e)=>{setNewValue(value=>({...value,"date":e.target.value}))}} />
        </td>
        <td>
          <input className="form-control" name="income" type="text" onChange={(e)=>{setNewValue(value=>({...value,"income":e.target.value}))}} />
        </td>
        <td>
          <input className="form-control" name="expense" type="text" onChange={(e)=>{setNewValue(value=>({...value,"expense":e.target.value}))}} />
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
      <td><input className="form-control" type="text" value={newValue.event || item.event} onChange={(e)=>{setNewValue(value =>({...value,"event":e.target.value}))}} /></td>
      <td><input className="form-control" type="date" value={newValue.date || item.date} onChange={(e)=>{setNewValue(value =>({...value,"date":e.target.value}))}} /></td>
      <td><input className="form-control" type="number" value={newValue.income || item.income} onChange={(e)=>{setNewValue(value =>({...value,"income":e.target.value}))}} /></td>
      <td><input className="form-control" type="number" value={newValue.expense   || item.expense} onChange={(e)=>{setNewValue(value =>({...value,"expense":e.target.value}))}} /></td>
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
    return <tr key={index}>
      <td>{item.id}</td>
      <td>{item.event}</td>
      <td>{item.date}</td>
      <td>{item.income}</td>
      <td>{item.expense}</td>
      <td>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-sm btn-success text-white' onClick={(e)=>{setEditID(item.id),setNewValue({})}}>
            <CIcon icon={cilPencil} width={20}></CIcon> Edit
          </button>
          <button className='btn btn-sm btn-danger text-white' style={{"marginLeft":20}} onClick={()=>{alert(item.id + " will delete")}}>
            <CIcon icon={cilTrash} width={20}></CIcon>Delete
          </button>
        </div>
      </td>
    </tr>
    }    
  }

  const tableData = data.filter(value =>{
    if(query == ""){
      return value;
    }
    else if (value.event.toLowerCase().includes(query.toLowerCase())){
      return value;
    }
  }).map((item,index )=>{
    return Edit(item,index);
  });

  return (
    <div>
      <CCard>
      <CCardHeader className='d-flex justify-content-center bg-info'>
          <h4 className='text text-nowrap offset-md-5'>Income and Expense</h4>
          <div className='input-group'>
            <input className='form-control offset-md-5' autoComplete='off' type="text" onChange={ (e)=>{setquery(e.target.value),setNewValue({})}} placeholder='search by event name' name="search"/>
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
                <th>Action <button className='btn btn-link' onClick={(e)=>{setAdd(true),setNewValue({})} }> <CIcon icon={cilPlus}></CIcon>Add</button></th>
              </tr>
            </thead>
            <tbody>
              {tableData}
              {isadd ?<AddItem/> :""}
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </div>
  )
}

export default Income