import { cilNotes, cilPencil, cilSearch, cilTrash } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import React, { useState } from "react";

function remove(id){
    alert("remove -"+id);
}

const Patients = () => {

    const [query , setquery] = useState("");

    const data =[{"id":1,"fname":"Ravishnu","lname":"A","DOB":"17/07/2002","age":"20","problem":"Medical","days":"30","need":"5,00,000"},{"id":2,"fname":"Anto","lname":"A","DOB":"12/05/2002","age":"20","problem":"Education","days":"15","need":"1,00,000"},{"id":3,"fname":"Jeeva","lname":"M","DOB":"10/10/2003","age":"19","problem":"Medical","days":"30","need":"2,50,000"},{"id":4,"fname":"Vimal","lname":"C","DOB":"07/03/2002","age":"20","problem":"Education","days":"30","need":"3,00,000"},]

    const table = data.filter(value =>{
    if(query == ""){
        return value;
    }
    else if (value.fname.toLowerCase().includes(query.toLowerCase())){
        return value;
    }
    }).map((item)=>
    <tr>
        <td>{item.id}</td>
        <td>{item.fname}</td>
        <td>{item.lname}</td>
        <td>{item.DOB}</td>
        <td>{item.age}</td>
        <td>{item.problem}</td>
        <td>{item.days} days left</td>
        <td>{item.need} </td>
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
          <h4 className='text offset-md-5'>Patients</h4>
          <div className='input-group'>
            <input className='form-control offset-md-7' autoComplete="off"
            onChange={(e)=>{setquery(e.target.value)}} type="text" placeholder='search by name' name="search"/>
            <button className='btn btn-primary'><CIcon icon={cilSearch}></CIcon></button>
          </div>
        </CCardHeader>
            <CCardBody>
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>#</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>DOB</th>
                            <th>Age</th>
                            <th>Poblems</th>
                            <th>Days</th>
                            <th>Needs in ( ₹ Rs.)</th>
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

export default Patients