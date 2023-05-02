import { faBookmark as FaSolid} from '@fortawesome/free-solid-svg-icons'
import { faBookmark as FaRegular } from '@fortawesome/free-regular-svg-icons'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'
import Ticket from '../assets/img/ticket.png'
import Calendar from '../assets/img/calendar.png'
const Featuredcard = ({image,title,presenter,description,seats,date,price,paid}) => {
    const [bookmark,setBookmark] = useState(false);

    const handleBookmark = () => {
        setBookmark(!bookmark)
    }

  return (
    <div className="wrapper featuredcard">
        <div className="imagewrapper">
            {/* Image */}
            <img className="featuredImage" src={image} alt="" />
        </div>
        {/* Internal wrapper */}
        <div>
            <div className="wrapper">
                <div className="wrapper feturedCardtop">
                    <div>
                        <div className="featuredHeading">
                        {title}                    
                        </div>{paid?(
                        <div className="featuredPrice">
                            TICKETS STARTS FROM &#8377; {price}
                        </div>):(<></>)}
                    </div>
                    <div className="featuredPresenter">
                        -presented by {presenter}
                    </div>
                    <div className="featuredBookmark">
                        <FontAwesomeIcon style={{cursor:"pointer"}} size="2x" onClick={handleBookmark} icon={bookmark?FaSolid:FaRegular} />
                    </div>
                </div>
            </div>
            <div className="para">
           {description}
            </div>
            <div className="wrapper featureButtonwrapper">
                <div className='wrapper'>
                    <div className="wrapper featuredButton">
                        <div className="iconholder">
                            {/* Icon */}
                            <img src={Ticket} alt="" />
                        </div>
                        <div>
                            <div>
                            Max Seats                            
                            </div>
                            <div>
                                {seats} seats
                            </div>
                        </div>
                    </div>
                    <div className="wrapper featuredButton">
                        <div className='iconholder'>
                            {/* Icon */}
                            <img src={Calendar} alt="" />

                        </div>
                        <div>
                            <div>
                            Event Date                            
                            </div>
                            <div>
                                {date}
                            </div>
                        </div>
                    </div>
                
                    
                </div>
                <div className="fetaureTicketButton">
                    TICKETS & DETAILS
                </div>
            </div>
        </div>
    </div>
  )
}

export default Featuredcard