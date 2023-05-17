import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import featuredEventData from '../data/featuredEventdata'
import Image from '../assets/img/images/carousel4.jpg'
import Carousel1 from '../assets/img/images/carousel1.jpeg'
import Carousel2 from '../assets/img/images/carousel2.jpeg'
import Carousel3 from '../assets/img/images/carousel3.jpeg'
import Carousel4 from '../assets/img/images/carousel4.jpg'
import { Carousel } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCalendar } from '@fortawesome/free-regular-svg-icons'
import { faArrowRight, faClock, faLink, faLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGoogle, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons'


const EvenDetails = () => {
   const {id} = useParams()
   
   const Images = [Carousel1, Carousel2, Carousel3, Carousel4]


    const data = featuredEventData.filter(post=>post.id === parseInt(id))[0]


    // useEffect(()=>{
    //     setData()
    // },[id])
  return (
    <div>
        <section style={{width:'100%',height:"60vh",display:'flex'}}>
        {data?<img src={data.image} style={{objectFit:'cover',width:'100%',height:'100%'}}  alt="" />:""}
        </section>
        <section className="container-fluid mt-3">
            <h5>Featured Event</h5>
            <div className="row container-fluid">
                <div className="col-md-7">
                    <div>
                    <section className="container-fluid" id="upcomingevents">
      <div className="heading">UPCOMING <span className="subheading">EVENTS</span></div>
      <div style={{height:"60vh"}}>

      <Carousel variant='dark' className='rounded-0 carouselUpcoming' style={{height:'100vh'}} autoPlay={true}
      interval={5000}
      controls={false}
      indicators={false} >
      {Images.map(image=>(<Carousel.Item className="w-100 h-100">
        <img
        style={{width:'100%',height:"100%",objectFit:'contain'}}
        clssName = "d-block h-100" 
        src={image}
        />
      </Carousel.Item>))}

    </Carousel>

      </div>
      
  
    </section>

    </div>
                    <div className="row ">
                        <div className="col-md-4 d-flex justify-content-center align-items-center p-5" style={{backgroundColor:"#D9D9D9"}}>
                            <FontAwesomeIcon className="me-3" icon={faCalendar} />
                            <div>
                                <p className="p-0 m-0">Event Date</p>
                                <strong>
                                    {data.date}
                                </strong>
                            </div> 
                        </div>
                        <div className="col-md-4">
                            <div className="d-flex justify-content-center align-items-center p-5" style={{backgroundColor:"#D9D9D9"}}>
                                
                            
                                <FontAwesomeIcon className="me-3" icon={faClock} />
                                    <div>
                                        <p className="p-0 m-0">Event Time</p>
                                        <strong>
                                            {data.date}
                                        </strong>
                                    </div>
                            </div>         
                        </div>
                        <div className="col-md-4 d-flex justify-content-center align-items-center p-5" style={{backgroundColor:"#D9D9D9"}}>
                        <FontAwesomeIcon className="me-3" icon={faLocationDot} />
                            <div>
                                <p className="p-0 m-0">Event Location</p>
                                <strong>
                                    {data.date}
                                </strong>
                            </div>
                        </div>
                    </div>
                    <h3>Event Descirption</h3>
                    <p>
                        Description of Event
                    </p>
                    <h3>
                        Event Summary
                    </h3>
                    <div style={{border:"1px solid black",padding:'20px',display:'flex',borderRadius:'10px',flexDirection:'column',justifyContent: 'center'}}>
                        <div className="row d-flex">
                            <div className="col-md-6 p-2">
                                Event Type
                            </div>
                            <div className="col-md-6 p-2">
                                Competitions
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-6 p-2">
                                Event 1 Name
                            </div>
                            <div className="col-md-6 p-2">
                                Competitions 1
                            </div>
                        </div>
                    </div>
                    <div className="d-flex align-items-center p-5">
                <div>
                <button type="" className="btn me-3" style={{backgroundColor:"#BFDAF7",fontWeight:"600",fontSize:'24px',width:'200px',height:"80px"}}>Attend</button>
                </div>
                <button type="" className='btn me-3' style={{backgroundColor:"#BFDAF7",fontWeight:"600",height:'50px', width:"20%"}}>Contact Us</button>

                <div className="">
                    -Attended by: faiz_ahsan,mamas.boy22,pappa.ki.pari and 200 others
                </div>

            </div>

                </div>
                <div className="col-md-4 offset-1">
                    <h3 className="d-flex justify-content-center">
                        <strong>
                        Event Detials
                        </strong>
                    </h3>
                    <div className="d-flex justify-content-center align-items-center p-5" style={{backgroundColor:"#D9D9D9",marginBottom:"1.5px"}}>
                        <FontAwesomeIcon icon={faLocationDot} size={'2xl'} />
                        <div className="ms-4">
                            <div>Event Location</div>
                            <strong>Volta Hotel, Moghal pura</strong>
                        </div>
                    </div>
                    <div className="align-items-center p-5" style={{backgroundColor:"#D9D9D9",marginBottom:"1.5px"}}>
                        <div className='mb-3'>
                            <div>
                            <strong style={{width:"100%",marginRight:"2px"}}><FontAwesomeIcon size={'xl'} icon={faArrowRight}/> Type of the Event:</strong>
                            Short term Training Programme               
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div>
                            <strong style={{width:"100%",marginRight:"2px"}}><FontAwesomeIcon size={'xl'} icon={faArrowRight}/> Title of the Event:</strong>
                            {data.title}               
                            </div>
                        </div>
                        <div className='mb-3'>
                            <div>
                            <strong style={{width:"100%",marginRight:"2px"}}><FontAwesomeIcon size={'xl'} icon={faArrowRight}/> Organized by:</strong>
                            {data.presenter}               
                            </div>
                        </div>
                    </div>
                    <div className="align-items-center p-5 " style={{backgroundColor:"#D9D9D9",marginBottom:"1.5px"}}>
                        <div className="d-flex mb-4">
                            <FontAwesomeIcon size={'lg'} className="me-3" icon={faLink} />
                            <div>
                                <div>
                                Contact information
                                </div> 
                                <strong>
                                    Event Head
                                </strong>
                            </div>
                            
                        </div>
                        <div className="d-flex">
                            <FontAwesomeIcon size={'lg'} className="me-3" icon={faLink} />
                            <div>
                                <div>
                                For more Details
                                </div> 
                                <strong>
                                    Event Head
                                </strong>
                            </div>
                            
                        </div>
                    </div>
                    <h3 className="d-flex justify-content-center my-5">
                        <strong>
                        College Handles
                        </strong>
                    </h3>
                    <div className="justify-content-center p-5" style={{backgroundColor:"#D9D9D9",marginBottom:"1.5px"}}>
                        <div className="d-flex m-4 align-items-center">
                            <FontAwesomeIcon icon={faFacebook} size={'2xl'} />
                                <div className="ms-3">
                                    <div>@hyev_official</div>
                                </div>    
                        </div>
                        <div className="d-flex m-4 align-items-center">
                            <FontAwesomeIcon icon={faTwitter} size={'2xl'} />
                                <div className="ms-3">
                                    <div>@hyev_official</div>
                                </div>    
                        </div>
                        <div className="d-flex m-4 align-items-center">
                            <FontAwesomeIcon icon={faGoogle} size={'2xl'} />
                                <div className="ms-3">
                                    <div>@hyev_official</div>
                                </div>    
                        </div>
                        <div className="d-flex m-4 align-items-center">
                            <FontAwesomeIcon icon={faInstagram} size={'2xl'} />
                                <div className="ms-3">
                                    <div>@hyev_official</div>
                                </div>    
                        </div>
                    </div>

                </div>                
            </div>
            <div>
               <h3> Write <strong>a Comment</strong> </h3>
            </div>
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
                <button type="" className='btn p-3 rounded-pill' style={{backgroundColor:'#BFDAF7',width:'150px'}}>Submit</button>        
            </div>
            </div>
        </section>    
    </div>
    
  )
}

export default EvenDetails