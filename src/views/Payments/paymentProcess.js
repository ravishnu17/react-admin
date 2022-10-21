import React, { useEffect, useState } from 'react'
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import Axios from 'axios';
import success_png from '../../assets/images/success.png';
import fail_png from '../../assets/images/fail.png';
import loading_gif from '../../assets/images/loading.gif';

function paymentProcess() {

  const [loading , setLoading] = useState(true);
  const [state , setState] = useState({"id":1});

    // const navigate = useNavigate();

    const query = useLocation().search;
    const id = new URLSearchParams(query).get('PayerID');
    console.log("payer_id:"+id);

  function success(){
    if(loading){
      return (
        <div style={{position: "absolute",top: "50%",left: "50%", transform: "translate(-50%, -50%)"}}>
        <img src={loading_gif} width={100} />
        </div> 
        )
    }else{
      //payment failed
      if(state.message){
          return(
            <div className='container'>
              <div className='row d-flex justify-content-center'>
                <div className='col-xl-5'>
                  <div className='card'>
                    <div className='card-header' style={{"color":"red"}}>
                      <h4 className='text-center'>Payment Failed</h4>
                    </div>
                    <div className='card-body text-center p-4'>
                      <div className='row'>
                        <div className='col-md'><img src={fail_png} width={80}/></div>
                      </div>
                      <div className='mt-2'>
                        <label className='text' style={{"fontSize":20,"color":"red"}}>Can't process your payment!</label>
                      </div>
                      <div className='row mt-3'>  
                        <div className='col-md text-start' style={{"fontWeight":"bold"}}>
                          Payer Name 
                        </div>
                        <div className='col-md text-end'>
                          {state.name}
                        </div>
                      </div>
                      <div className='row mt-2'>  
                        <div className='col-md text-start' style={{"fontWeight":"bold"}}>
                          Payer Email ID 
                        </div>
                        <div className='col-md text-end'>
                          {state.emailId}
                        </div>
                      </div>
                      <div className='row mt-2'>  
                        <div className='col-md text-start' style={{"fontWeight":"bold"}}>
                          Payer Mobile No. 
                        </div>
                        <div className='col-md text-end'>
                          {state.mobileNumber}
                        </div>
                      </div>
                      <div className='row mt-2'>  
                        <div className='col-md text-start' style={{"fontWeight":"bold"}}>
                          Payment mode 
                        </div>
                        <div className='col-md text-end'>
                          Paypal
                        </div>
                      </div>
                      <div className='row mt-2'>  
                        <div className='col-md text-start' style={{"fontWeight":"bold"}}>
                          Payment status 
                        </div>
                        <div className='col-md text-end text-danger' style={{"fontWeight":"bold"}}>
                          failed
                        </div>
                      </div>
                      <div className='row mt-3'>  
                        <div className='col-md text-start' style={{"fontWeight":"bold"}}>
                          Amount
                        </div>
                        <div className='col-md text-end' style={{"fontWeight":"bold"}}>
                          {state.amount} $
                        </div>
                      </div>
                      <div className='text text-sm mt-3 text-start'>Note :<br/><span className='text' style={{"fontSize":15}}>Will send payment details to your mail, if paid.</span></div>
                      <label className='text mt-3'><a href='#/others/payment'>Click here</a> to go home</label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )
      }//payment success
      else if(state.paid_to){
        return(
          <div className='container'>
            <div className='row d-flex justify-content-center'>
              <div className='col-xl-5'>
                <div className='card'>
                  <div className='card-header' style={{"color":"green"}}>
                    <h4 className='text-center'>Payment Successfull</h4>
                  </div>
                  <div className='card-body text-center p-4'>
                    <div className='row'>
                      <div className='col-md'><img src={success_png} width={80}/></div>
                    </div>
                    <div className='row mt-3'>  
                      <div className='col-md text-start' style={{"fontWeight":"bold"}}>
                        Payer Name 
                      </div>
                      <div className='col-md text-end'>
                        {state.firstname} {state.lastname}
                      </div>
                    </div>
                    <div className='row mt-2'>  
                      <div className='col-md text-start' style={{"fontWeight":"bold"}}>
                        Payer Email ID 
                      </div>
                      <div className='col-md text-end'>
                        {state.email}
                      </div>
                    </div>
                    <div className='row mt-2'>  
                      <div className='col-md text-start' style={{"fontWeight":"bold"}}>
                        Payer Mobile No. 
                      </div>
                      <div className='col-md text-end'>
                        {state.mobile}
                      </div>
                    </div>
                    <div className='row mt-2'>  
                      <div className='col-md text-start' style={{"fontWeight":"bold"}}>
                        Payment mode 
                      </div>
                      <div className='col-md text-end'>
                        {state.payment_method}
                      </div>
                    </div>
                    <div className='row mt-2'>  
                      <div className='col-md text-start' style={{"fontWeight":"bold"}}>
                        Payment status 
                      </div>
                      <div className='col-md text-end text-success' style={{"fontWeight":"bold"}}>
                        Success
                      </div>
                    </div>
                    <div className='row mt-2'>  
                      <div className='col-md text-start' style={{"fontWeight":"bold"}}>
                        Paid to
                      </div>
                      <div className='col-md text-end'>
                        {state.paid_to}
                      </div>
                    </div>
                    <div className='row mt-2'>  
                      <div className='col-md text-start' style={{"fontWeight":"bold"}}>
                        ID
                      </div>
                      <div className='col-md text-end' >
                        {state.paypal_id}
                      </div>
                    </div>
                    <div className='row mt-3'>  
                      <div className='col-md text-start' style={{"fontWeight":"bold"}}>
                        Amount paid
                      </div>
                      <div className='col-md text-end' style={{"fontWeight":"bold"}}>
                        {state.amount} $
                      </div>
                    </div>
                    <div className='text text-sm mt-3 text-start'>Note :<br/><span className='text' style={{"fontSize":15}}>Will send payment details to your mail,if paid.</span></div>
                    <label className='text mt-3'><a href='#/others/payment'>Click here</a> to go home</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )
      }
    }
  }

  if (state.id==1){
    Axios.post('http://127.0.0.1:8000/execute',{"payer_id":id}).then((response)=>{
      setLoading(false);
      console.log(response.data);
      setState(response.data);
      console.log(state);

    },(error)=>{
      setState({"message":"failed"});
      setLoading(false);
    });
  }else{
    console.log("Else part");
    console.log(state);
  }

  return (
    <div>
      {success()}
    </div>
  )
}

export default paymentProcess