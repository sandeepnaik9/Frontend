import React, { useState } from 'react'
import { Carousel, Dropdown } from 'react-bootstrap'
import CustomToggle from '../components/CustomToggle'
import CustomMenu from '../components/CustomMenu'
import SpecifiEvent from '../components/SpecifiEvent'
import featuredEventData from '../data/featuredEventdata'
import Pagination from '../components/Pagination'
import Carousel1 from '../assets/img/images/carousel1.jpeg'
import Carousel2 from '../assets/img/images/carousel2.jpeg'
import Carousel3 from '../assets/img/images/carousel3.jpeg'
import Carousel4 from '../assets/img/images/carousel4.jpg'

const EventList = () => {
  const [selectedVal,setSelectedVal] = useState(null);
  const [currentPage,setCurrentPage] = useState(1)
  const postsPerPage = 6;

  const data = featuredEventData;
  const handleSelect = (e) => {
    setSelectedVal(e)
  }

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;

  const currentData = data.slice(firstPostIndex, lastPostIndex)

  const Images = [Carousel1, Carousel2, Carousel3, Carousel4]

  return (
    <>
    <section className='container-fluid p-0'>
      <div style={{height:"60vh"}}>
    
      <Carousel variant='dark' className='rounded-0 carouselUpcoming' autoPlay={true}
      interval={4000}
      controls={false}
      indicators={false} >
      {Images.map(item=>(<Carousel.Item className="w-100 h-100">
        <img
        style={{width:'100%',height:"100%",objectFit:'cover'}}
        clssName = "d-block h-100" 
        src={item}
        alt="HYEV Carousel"
        />
      </Carousel.Item>))}

    </Carousel>

      </div>
      
  
    </section>
    <section className='container-fluid' >
    <div className="heading">EVENTS <span className="subheading">LIST</span></div>
    <div style={{display: 'flex', justifyContent: 'end'}}>
        <div className="d-flex justify-content-between">
            <button className="btn rounded-pill" style={{backgroundColor: '#BFDAF7',fontWeight: 'bold'}}>
                + Create Event
            </button>
            <Dropdown onSelect={handleSelect}>
        <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
          {selectedVal?selectedVal:'Pick an option'}
        </Dropdown.Toggle>

        <Dropdown.Menu as={CustomMenu}>
          <Dropdown.Item eventKey="Technical">Technical</Dropdown.Item>
          <Dropdown.Item eventKey="Non-Technical">Non-Technical</Dropdown.Item>
          <Dropdown.Item eventKey="Cultural">Cultural</Dropdown.Item>
          <Dropdown.Item eventKey="Sports">Sports</Dropdown.Item>
          <Dropdown.Item eventKey="Seminar">Seminar</Dropdown.Item>
          <Dropdown.Item eventKey="Workshop">Workshop</Dropdown.Item>
          <Dropdown.Item eventKey="Other">Other</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
        </div>
    </div>
    <SpecifiEvent posts={currentData} type="eventlist" />
    <Pagination totalPosts={featuredEventData.length} postsPerPage={postsPerPage} setCurrentPage={setCurrentPage} currentPage={currentPage} />
    </section>
    </>
  )
}

export default EventList