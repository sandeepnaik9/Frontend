import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark as FaSolid} from '@fortawesome/free-solid-svg-icons'
import { faBookmark as FaRegular } from '@fortawesome/free-regular-svg-icons'
import Ticket from '../assets/img/ticket.png'
import Calendar from '../assets/img/calendar.png'

import React, { useState } from 'react'

const FeaturedData = ({image,title,presenter,description,seats,date,price,paid}) => {
    const [bookmark,setBookmark] = useState(false);

    const handleBookmark = () => {
        setBookmark(!bookmark)
    }
    return (
    <div className="row featuredcard">
		<div className="col-md-2 p-0">
            <div className='imagewrapper'>
            <img src={image} className="featuredImage" style={{width:"100%",objectFit:'cover'}} alt="" />
            </div>
        </div>
		<div className="col-md-10 d-flex flex-column p-t-10">
			<div className="row">
				<div className="col-md-3 text-truncate" style={{textOverflow:'ellipsis'}}>
                    <h4><strong>{title}</strong></h4>
				</div>
				<div className="col-md-7">
                    - {presenter}
				</div><div className="col-md-2 d-flex justify-content-end">
                <FontAwesomeIcon style={{cursor:"pointer"}} size="2x" onClick={handleBookmark} icon={bookmark?FaSolid:FaRegular} />
				</div>
			</div>
			<div className="row" style={{marginTop:'20px'}}>
				<div className="col-md-12">
                    <strong>{description}</strong>
				</div>
			</div>
			<div className="row mt-auto">
				<div className="col-md-6">
					<div className="row">
						<div className="d-flex col-md-5" style={{}}>
                            <div className="featuredButton d-flex">
                                <img className='iconholder' src={Ticket} alt="Ticket Icon" />
                                <div className="d-flex flex-column">
                                Max Seats
                                    <strong>
                                        {seats}
                                    </strong>
                                </div> 
                            </div>
                        
				        </div>
						<div className="col-md-5 d-flex">
                            <div className="d-flex featuredButton">
                            <img className="iconholder" src={Calendar} alt="Calendar Icon" />
                                <div className="d-flex flex-column">
                                    Event Date 
                                    <strong>{date}</strong>   
                                </div>
                            </div>    
                                
                            
						</div>
					</div>
				</div>
				<div className="col-md-6 d-flex justify-content-end">
                    <div className="fetaureTicketButton">
                    Ticket Details
                    </div> 
				</div>
			</div>
		</div>
	</div>
  )
}

export default FeaturedData