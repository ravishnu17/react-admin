import { cilSearch } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import React from "react";

const Patients = () => {
    return (
        <CCard>
            <CCardHeader className='d-flex justify-content-center bg-info'>
          <h4 className='text offset-md-5'>Patients</h4>
          <div className='input-group'>
            <input className='form-control offset-md-7' type="text" placeholder='search' name="search"/>
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
                        <tr>
                            <td>1</td>
                            <td>Ravishnu</td>
                            <td>A</td>
                            <td>17/07/2002</td>
                            <td>20</td>
                            <td>Medical</td>
                            <td>30 days left</td>
                            <td>5,00,000</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Vimal Raj</td>
                            <td>C</td>
                            <td>10/10/2002</td>
                            <td>20</td>
                            <td>Education</td>
                            <td>10 days left</td>
                            <td>2,00,000</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Jeeva</td>
                            <td>M</td>
                            <td>05/08/2003</td>
                            <td>19</td>
                            <td>Medical</td>
                            <td>15 days left</td>
                            <td>10,00,000</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>Sarath</td>
                            <td>S</td>
                            <td>10/05/1998</td>
                            <td>22</td>
                            <td>Medical</td>
                            <td>10 days left</td>
                            <td>5,00,000</td>
                        </tr>
                    </tbody>
                </table>
            </CCardBody>
        </CCard>
    )
}

export default Patients