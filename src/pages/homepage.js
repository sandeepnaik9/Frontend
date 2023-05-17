import React, { useEffect, useState } from 'react'
import Carousel from 'react-bootstrap/Carousel';
import Carousel1 from '../assets/img/images/carousel1.jpeg'
import Carousel2 from '../assets/img/images/carousel2.jpeg'
import Carousel3 from '../assets/img/images/carousel3.jpeg'
import Carousel4 from '../assets/img/images/carousel4.jpg'
import Featured from '../components/FeaturedData';
import bgc1 from '../assets/img/bgc1.jpeg'
import bgc2 from '../assets/img/bgc2.jpeg'
import bgc3 from '../assets/img/bgc3.jpeg'
import bgc4 from '../assets/img/bgc4.jpeg'
import bgc5 from '../assets/img/bgc5.jpeg'
import bgc6 from '../assets/img/bgc6.jpeg'
import bgc7 from '../assets/img/bgc7.jpg'
import featuredEventData from '../data/featuredEventdata'
import Footer from '../components/Footer';
import SpecifiEvent from '../components/SpecifiEvent';

const Images = [Carousel1, Carousel2, Carousel3, Carousel4]
const bgc = [bgc1,bgc2,bgc3,bgc4,bgc5,bgc6,bgc7]

const Homepage = () => {

  const [currentSlide, setCurrentSlide] = useState(0);



  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentSlide((currentSlide + 1) % bgc.length);
     
    }, 5000);
    return () => clearInterval(intervalId);
  }, [currentSlide]);

  return (<>
    
  
    <section className="container-fluid p-0" style={{height:'100vh'}} id="topsection" >
    <Carousel variant='dark' className='rounded-0 hero' style={{height:'100vh'}} autoPlay={true}
      interval={5000}
      controls={false}
      indicators={false} >
      {bgc.map(image=>(<Carousel.Item className="w-100 h-100">
        <img
        style={{width:'100%'}}
        clssName = "d-block h-100" 
        src={image}
        />
      </Carousel.Item>))}

    </Carousel>
    {/* <img src={BannerImage} id="banner" alt="" /> */}
    <p id="bannertext1" style={{display:'block',whiteSpace:'pre-line'}}><span className="differnetFont">Go</span> Together,{'\n'}<span style={{marginLeft:"5.5em"}} className="differnetFont">Go</span> Better</p>
    </section>
    <section className='container-fluid' id="upcomingevents">
      <div className="heading">UPCOMING <span className="subheading">EVENTS</span></div>
      <div style={{height:"60vh"}}>
    
      <Carousel variant='dark' className='rounded-0 carouselUpcoming' autoPlay={true}
      interval={4000}
      controls={true}
      indicators={true} >
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
    <section className='container-fluid' id="featuredevents">
    <div className="heading">Featured <span className="subheading">EVENTS</span></div>
      <div className="featuredCard">
      {featuredEventData.map((item,index)=>(<Featured key={index} title={item.title} image={item.image} description={item.description} price={item.price} seats={item.seats} presenter={item.presenter} date={item.date} paid={item.paid}/>))}
      
      </div>
    </section>
    <section className='container-fluid' id="specevents">
    <div className="heading">FOR <span className="subheading">FOODIES</span></div>
      <div className="speceventscontainer-fluid">
      {/* {featuredEventData.map((item,index)=>(<Specificcard key={index} title={item.title} image={item.image} description={item.description} price={item.price} seats={item.seats} presenter={item.presenter} date={item.date} paid={item.paid}/>))} */}
      <SpecifiEvent posts={featuredEventData} />
      </div>
    </section>
    <section className='container-fluid' id="specevents">
    <div className="heading">FOR <span className="subheading">SPORTS LOVERS</span></div>
      <div className="specevents container-fluid">
      {/* {featuredEventData.map((item,index)=>(<Specificcard key={index} title={item.title} image={item.image} description={item.description} price={item.price} seats={item.seats} presenter={item.presenter} date={item.date} paid={item.paid}/>))} */}
      <SpecifiEvent posts={featuredEventData} />
      </div>
    </section>
    <section className='container-fluid' id="specevents">
    <div className="heading">FOR <span className="subheading">TECH BEES</span></div>
      <div className="specevents container-fluid">
      {/* {featuredEventData.map((item,index)=>(<Specificcard key={index} title={item.title} image={item.image} description={item.description} price={item.price} seats={item.seats} presenter={item.presenter} date={item.date} paid={item.paid}/>))} */}
      <SpecifiEvent posts={featuredEventData} />
      </div>
    </section>
    
    </>
  )
}

export default Homepage