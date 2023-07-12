import React from 'react'
import Ticket from '../assets/img/ticket.png'
import Calendar from '../assets/img/calendar.png'
import { Link } from 'react-router-dom'


const SpecificEventCard = ({post}) => {
    // console.log(post._id);
    const evLink = post.imgs ? `http://localhost:8000/${post.imgs[0]}` : '';

    
  return (
    <div className="col-md-4 flex-column card-content">
    <Link className="card-item btn" to={`/event/${post._id}`} style={{backgroundColor:'#BFDAF7',margin:'20px',borderRadius:"20px",padding:"20px"}}>

    <div style={{height:"300px",borderRadius:"10px"}}>
        <img src={evLink} style={{height:"100%",width:'100%',objectFit:"cover"}} alt="" />
        </div>
        <div>
            <h4><strong>{post.eventTitle}</strong></h4>
        </div>
        <div>
            {post.hostname}
        </div>
        <div className="row">
            <div className="d-flex col-md-6" style={{}}>
                <div className="featuredButton p-2 d-flex">
                        <img className='iconholder' src={Ticket} alt="Ticket Icon" />
                        <div className="d-flex flex-column">
                            Max Seats
                            <strong>
                                {post.seats}
                            </strong>
                        </div>
                </div>  
                    
            </div>
            <div className="col-md-6 d-flex">
                <div className="featuredButton p-1 d-flex">    
                    <img className="iconholder" src={Calendar} alt="Calendar Icon" />
                        <div className="d-flex flex-column">
                        Event Date 
                        <strong>{post.date}</strong>   
                        </div>
                </div>            
            </div>
        </div>

    </Link>
    
</div>

  )
}

export default SpecificEventCard