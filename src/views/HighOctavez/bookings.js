import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import { cilSearch } from "@coreui/icons";
import CIcon from "@coreui/icons-react";
import React from "react";

const Bookings = () => {
    return (
        <CCard>
        <CCardHeader className='d-flex justify-content-center bg-info'>
          <h4 className='text offset-md-5'>Bookings</h4>
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
                        <th>Name</th>
                        <th>Booked event</th>
                        <th>Event date</th>
                        <th>Event timing</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td>Anto</td>
                        <td>Rockerstar</td>
                        <td>15/10/2022</td>
                        <td>06:00PM - 10:00PM</td>
                        <td>Reserved</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Muni</td>
                        <td>walk with music</td>
                        <td>02/11/2022</td>
                        <td>02:00PM - 06:00PM</td>
                        <td>Reserved</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Karthi</td>
                        <td>Rockerstar</td>
                        <td>15/10/2022</td>
                        <td>06:00PM - 10:00PM</td>
                        <td>Reserved</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Arun</td>
                        <td>life of Rhythm</td>
                        <td>120/11/2022</td>
                        <td>05:00PM - 07:00PM</td>
                        <td>Reserved</td>
                    </tr>
                </tbody>
            </table>
        </CCardBody>
        </CCard>
    )
}

export default Bookings