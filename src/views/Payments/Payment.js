import React, { useState } from 'react';
import Axios from 'axios';
import { CButton, CCard, CCardBody, CCardTitle } from '@coreui/react';
import loading_gif from '../../assets/images/loading.gif';

function Payments() {

    const load =()=>{
      if(loading){
        return(<div style={{position: "absolute",top: "50%",left: "50%", transform: "translate(-50%, -50%)"}}>
        <img src={loading_gif} width={90} />
      </div>)
      }
      else{
        //code here
      }
    }

    const [values, setValues] = useState({});
    const [loading , setLoading] = useState(false);

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setValues(values => ({ ...values, [name]: value }))
    }
    const handleSubmit = (event) => {
      setLoading(true);
      event.preventDefault();
      console.log(values);
      Axios.post('http://127.0.0.1:8000/getToken',values).then((response)=>{
        console.log(response.data);
        // setLoading(false);
        window.open(response.data[1]['href'],"_self");
      },(error)=>{
        console.log(error);
        setLoading(false);
      })
    }

    return (
        <CCard className='p-5'>
          {load()}
            <div className='row mt-5'>
                <div className='col-md-3'></div>
                <div className='col-md-6'>
            <CCardBody className='container rounded' style={{ backgroundColor: 'powderblue' }}>
                <h3 className='text-center'>Donation</h3>
                <form onSubmit={handleSubmit}>
                    <div className='row mt-3 d-flex align-items-center'>
                        <div className='col-md-2'></div>
                        <div className='col-md-3'>
                            <label>Email Id:</label>
                        </div>
                        <div className='col-md-6'>
                            <input type="email" className='form-control'
                                name="emailId"
                                placeholder='Enter your email id'
                                value={values.emailId || ""}
                                onChange={handleChange} />
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-md-2'></div>
                        <div className='col-md-3'>
                            <label>Name:</label>
                        </div>
                        <div className='col-md-6'>
                            <input type='text'
                                name="name" className='form-control'
                                placeholder='Enter your name'

                                value={values.name || ""}
                                onChange={handleChange} /><br />
                        </div>
                    </div>

                    <div className='row'>
                        <div className='col-md-2'></div>
                        <div className='col-md-3'>
                        <label>Mobile Number:</label>
                        </div>
                        <div className='col-md-6'>
                        <input type="number"
                            name="mobileNumber" className='form-control'
                            placeholder='Enter your mobile number'
                            value={values.mobileNumber || ""}
                            onChange={handleChange} />
                        </div>
                    </div>

                    <div className='row mt-3'>
                        <div className='col-md-2'></div>
                        <div className='col-md-3'>
                            <label>Donation Amount</label>
                        </div>
                        <div className='col-md-6'>
                          <div className='input-group'>
                            <input type='number' name='amount' className='form-control'
                                placeholder='Enter in dollar($)'
                             value={values.amount || ""}
                             onChange={handleChange}/>
                            <span className='input-group-text'>$</span>
                          </div>
                        </div>
                    </div><br/>
                    <div className='d-flex justify-content-center'>
                    <CButton type='submit'>Donate Now</CButton>
                    </div>  
                </form>
            </CCardBody>
            </div>
            <div className='col-md-3'></div>
            </div>
        </CCard>
    )
}

export default Payments
