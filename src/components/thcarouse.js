import React from 'react';

import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Ticket from '../assets/img/ticket.png'
import Calendar from '../assets/img/calendar.png'

const SpecCarousel = ({posts}) => {
 
  const [currentPost, setCurrentPost] = React.useState(0);

  const handleClick = (index) => {
    setCurrentPost(index);
  };

  return (
    <div className="SpecCarousel">
      <div className="posts">
        {posts.slice(currentPost, currentPost + 3).map((post, index) => (
          <div key={index} className="post">
            <div className="imageconatiner">
            <img className='imagespec' src={post.image} alt={post.title} />
            </div>
            <div style={{fontWeight:"700",fontSize:"20px",marginBottom:"2px"}}>{post.title}</div>
            <div style={{marginBottom:'16px'}}>
              {post.presenter}
            </div>
            <div style={{display:'flex'}}>
              <div style={{display:'flex',backgroundColor:'white',borderRadius:'10px',alignItems:'center',paddingRight:'12px'}}>
                <div style={{padding:'2px',margin:'10px',backgroundColor:'#BFDAF7',borderRadius:'10px'}}>
                  <img src={Ticket} alt="ticket Icon"  />
                </div>
                <div>
                  <div >Max Seats</div>
                  <div style={{fontWeight:'600',fontSize:'14px'}}>{post.seats} Seats</div>                
                </div>
                
              </div>
              <div style={{display:'flex',backgroundColor:'white',borderRadius:'10px',alignItems:'center',paddingRight:'12px',marginLeft:'12px'}}>
                <div style={{padding:'2px',margin:'10px',backgroundColor:'#BFDAF7',borderRadius:'10px'}}>
                  <img src={Calendar} alt="Calendar Icon" />
                </div>
                <div>
                  <div>Event Date</div>
                  <div style={{fontWeight:'600',fontSize:'14px'}}>{post.date}</div>                
                </div>
                
              </div>
          
            </div>
            
          </div>
        ))}
      </div>
      <div className="buttons">
        {currentPost > 0 && (
          <FontAwesomeIcon style={{position:'absolute',top:'50%',left:'-12px'}} size='3x' icon={faAngleLeft} onClick={() => handleClick(currentPost - 1)} />
        )}
        {currentPost < posts.length - 3 && (
          <FontAwesomeIcon style={{position:'absolute',top:'50%',right:'0'}} size='3x' icon={faAngleRight} onClick={() => handleClick(currentPost + 1)} />
        )}
      </div>
    </div>
  );
};

export default SpecCarousel;
