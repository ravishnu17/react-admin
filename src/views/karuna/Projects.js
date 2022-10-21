import { cilChild, cilChildFriendly, cilFastfood, cilNotes, cilPen, cilPencil, cilPeople, cilSearch, cilTrash, cilUserFemale } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CCardBody, CCardHeader, CCol, CImage, CRow, CWidgetStatsA } from '@coreui/react'
import React, { useState } from 'react'

const Project = () => {

  const [query , setquery] = useState("");

  const data = [{"id":1,"project":"Children","description":"provide education to next generations","fund":37648653},{"id":2,"project":"Medical","description":"Help the people to save there life","fund":7678564},{"id":3,"project":"Education","description":"Provide education those who poor but needs education","fund":5329879},{"id":4,"project":"Food","description":"Help the elders and childrens by providing healthy food atleast once in a day","fund":9777662}];

    const table = data.filter(value =>{
    if(query == ""){
        return value;
    }
    else if (value.project.toLowerCase().includes(query.toLowerCase())){
        return value;
    }
    }).map((item)=>
    <tr>
        <td>{item.id}</td>
        <td>{item.project}</td>
        <td>{item.description}</td>
        <td>{item.fund}</td>
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
    <>
      <CCard>
        <CCardHeader className='d-flex justify-content-center bg-info'>
          <h4 className='text offset-md-5'>Projects</h4>
          <div className='input-group'>
            <input className='form-control offset-md-7' type="text" placeholder='search by project' name="search" onChange={(e)=>{setquery(e.target.value)}}/>
            <button className='btn btn-primary'><CIcon icon={cilSearch}></CIcon></button>
          </div>
        </CCardHeader>
        <CCardBody>
          <table className="table table-bordered text-center">
            <thead>
            <tr>
              <th>#</th>
              <th>Projects</th>
              <th>Description</th>
              <th>Raised Funds</th>
              <th>Actions</th>
            </tr>
            </thead>
            <tbody>
              {table  }
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Project
