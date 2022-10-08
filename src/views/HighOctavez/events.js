import { CCard, CCardBody, CCardHeader } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import { cilSearch } from "@coreui/icons";
import React from "react";

const Events = () => {
    return (
        <CCard>
        <CCardHeader className='d-flex justify-content-center bg-info'>
          <h4 className='text offset-md-5'>Events</h4>
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
                            <th>Event Name</th>
                            <th>Event Date</th>
                            <th>Event start time</th>
                            <th>Event end time</th>
                            <th>Available seats</th>
                            <th>Ticket cost (Rs.)</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>1</td>
                            <td>Rockstar party</td>
                            <td>15/10/2022</td>
                            <td>06:00 PM</td>
                            <td>10:00 PM</td>
                            <td>118</td>
                            <td>500</td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Walk with music</td>
                            <td>02/11/2022</td>
                            <td>02:00 PM</td>
                            <td>06:00 PM</td>
                            <td>199</td>
                            <td>300</td>
                        </tr>
                        <tr>
                            <td>3</td>
                            <td>Play with beats</td>
                            <td>10/11/2022</td>
                            <td>06:00 PM</td>
                            <td>08:00 PM</td>
                            <td>100</td>
                            <td>400</td>
                        </tr>
                        <tr>
                            <td>4</td>
                            <td>life of Rhythm</td>
                            <td>20/11/2022</td>
                            <td>05:00 PM</td>
                            <td>07:00 PM</td>
                            <td>100</td>
                            <td>300</td>
                        </tr>
                    </tbody>
                </table>
            </CCardBody>
        </CCard>
    )
}

export default Events