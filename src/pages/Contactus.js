import React from 'react'

const Contactus = () => {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center container form-group">
    <div className="row ">
    <div className="col-md-4">
          <input type="text" className="form-control" placeholder="Name" />
      </div>
      <div className="col-md-4">
          <input type="email" name="" className='form-control' placeholder="Email" />
      </div>
      <div className="col-md-4">
          <input type="number" name="" className="form-control" placeholder="Phone Number" />
      </div>
      <div className="col-md-12 mt-4">
          <textarea  className='form-control' rows="8" placeholder="Write you review here"></textarea>
      </div>
    </div>
    <div className='mt-4'>
      <button type="" className='btn p-3 rounded-pill' style={{backgroundColor:'#BFDAF7',width:'150px'}}>Send mail</button>        
  </div>
  </div>
  )
}

export default Contactus