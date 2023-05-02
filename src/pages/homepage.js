import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import Carousel from '../components/carousel';
import Carousel1 from '../assets/img/images/carousel1.jpeg'
import Carousel2 from '../assets/img/images/carousel2.jpeg'
import Carousel3 from '../assets/img/images/carousel3.jpeg'
import Carousel4 from '../assets/img/images/carousel4.jpg'
import Featured from '../components/featuredcard';
import bgc1 from '../assets/img/bgc1.jpeg'
import bgc2 from '../assets/img/bgc2.jpeg'
import bgc3 from '../assets/img/bgc3.jpeg'
import bgc4 from '../assets/img/bgc4.jpeg'
import bgc5 from '../assets/img/bgc5.jpeg'
import bgc6 from '../assets/img/bgc6.jpeg'
import bgc7 from '../assets/img/bgc7.jpg'
import featuredEventData from '../data/featuredEventdata'
import Specificcard from '../components/specificcard';

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
    
  
    <section className="container" id="topsection" style={{backgroundImage:`url(${bgc[currentSlide]})`,backgroundColor:'black'}}>
    <Navbar />
    {/* <img src={BannerImage} id="banner" alt="" /> */}
    <p id="bannertext1"><span className="differnetFont">Go</span> Together,</p><p id="bannertext2"><span className="differnetFont">Go</span> Better</p>
    </section>
    <section className='container' id="upcomingevents">
      <div className="heading">UPCOMING <span className="subheading">EVENTS</span></div>
      {console.log(Images)}
      <Carousel images={Images}/>
    </section>
    <section className='container' id="featuredevents">
    <div className="heading">Featured <span className="subheading">EVENTS</span></div>
      <div className="featuredCard">
      {featuredEventData.map((item,index)=>(<Featured key={index} title={item.title} image={item.image} description={item.description} price={item.price} seats={item.seats} presenter={item.presenter} date={item.date} paid={item.paid}/>))}
      
      </div>
    </section>
    <section className='container' id="specevents">
    <div className="heading">FOR <span className="subheading">FOODIES</span></div>
      <div className="speceventsCard">
      {featuredEventData.map((item,index)=>(<Specificcard key={index} title={item.title} image={item.image} description={item.description} price={item.price} seats={item.seats} presenter={item.presenter} date={item.date} paid={item.paid}/>))}
      
      </div>
    </section>
    </>
  )
}

export default Homepage