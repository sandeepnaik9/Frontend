import Ticket from '../assets/img/ticket.png'
import Calendar from '../assets/img/calendar.png'
const Specificcard = ({image,title,presenter,description,seats,date,price,paid}) => {
    

  return (
    <div className="speccard">
        <div className="specimgwrap">
            {/* Image */}
            <img className="featuredImage" src={image} alt="" />
        </div>
        {/* Internal wrapper */}
        <div>
            <div className="">
                <div className="">
                    <div>
                        <div className="featuredHeading">
                        {title}                    
                        </div>
                    </div>
                    <div className="featuredPresenter">
                        -presented by {presenter}
                    </div>
                </div>
            </div>
            <div className="wrapper featureButtonwrapper">
                <div className='wrapper'>
                    <div className="wrapper featuredButton">
                        <div className="iconholder">
                            {/* Icon */}
                            <img src={Ticket} alt="" />
                        </div>
                        <div className="specseatf">
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
                        <div className="speceventf">
                            <div>
                            Event Date                            
                            </div>
                            <div>
                                {date}
                            </div>
                        </div>
                    </div>
                
                    
                </div>
            </div>
        </div>
    </div>
  )
}

export default Specificcard