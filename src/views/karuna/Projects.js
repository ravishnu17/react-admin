import { cilChild, cilChildFriendly, cilFastfood, cilPeople, cilSearch, cilUserFemale } from '@coreui/icons'
import CIcon from '@coreui/icons-react'
import { CCard, CCardBody, CCardHeader, CCol, CImage, CRow, CWidgetStatsA } from '@coreui/react'
import React from 'react'

const Project = () => {
  return (
    <>
      <CCard>
        <CCardHeader className='d-flex justify-content-center bg-info'>
          <h4 className='text offset-md-5'>Projects</h4>
          <div className='input-group'>
            <input className='form-control offset-md-7' type="text" placeholder='search' name="search"/>
            <button className='btn btn-primary'><CIcon icon={cilSearch}></CIcon></button>
          </div>
        </CCardHeader>
        <CCardBody>
          <table className="table table-bordered">
            <thead>
            <tr>
              <th scope="col">Projects</th>
              <th>Description</th>
              <th>Raised Funds</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Children </td>
              <td>provide education to next generations</td>
              <td>INR 50,97,269</td>
            </tr>
            <tr>
              <td>Medical </td>
              <td>Help the people to save there life</td>
              <td>INR 32,43,544</td>
            </tr>
            <tr>
              <td>Education </td>
              <td>Provide education those who poor but needs education</td>
              <td>INR 45,32,230</td>
            </tr>
            <tr>
              <td>Food </td>
              <td>Help the elders and childrens by providing healthy food atleast once in a day</td>
              <td>INR 29,32,230</td>
            </tr>
            </tbody>
          </table>
        </CCardBody>
      </CCard>
    </>
  )
}

export default Project
