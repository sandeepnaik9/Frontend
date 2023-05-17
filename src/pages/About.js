import React from 'react'
import image from '../assets/Aboutus.png'
import USer from '../assets/user.png'
const About = () => {
  return (
    <div>
       <section className="container-fluid p-0" style={{height:'100vh'}} id="topsectionaboutus" >
   
     
        <img
        style={{width:'100%',height:'100%',objectFit:'cover'}}
        clssName = "d-block h-100" 
        src={image}
        />
    
    <p id="bannertext1" style={{display:'block',whiteSpace:'pre-line'}}>About US</p>
    </section>
    <section className="container-fluid p-5">
        <h3 className="my-4"><strong>Our goal:</strong></h3>
        <div style={{textAlign:'justify'}}>
        Welcome to the ultimate event planning platform! Our website is the go-to destination for individuals, organizations, and businesses looking to plan, promote, and execute unforgettable events of all kinds. We offer an extensive range of top-notch tools and resources to make event planning a breeze, including expert guidance, ticket sales and distribution, marketing services, and seamless communication between event organizers, vendors, and attendees. Our mission is to make event planning a stress-free and enjoyable experience for everyone involved. So, whether you're organizing a small gathering or a large-scale event, join us and let us help you make your event a success!
        </div>
        <h3 className="my-4"><strong>Services:</strong></h3>
        <div style={{textAlign:'justify'}}>
        Our website provides comprehensive event planning services to assist individuals and businesses in organizing successful events of all sizes. We offer a wide range of services, including venue selection, event design, budget management, logistics planning, and more. Our team of experienced event planners works closely with clients to understand their unique needs and preferences, ensuring that every aspect of their event is tailored to their vision. Whether you're planning a corporate event, or social gathering, we're here to help make your event a success from start to finish.
        </div>
        <h3 className="my-4"><strong>Our Team:</strong></h3>
        <div className="row">
        <div className="col-md-4" style={{marginTop:'80px'}}>
                <div className="d-flex flex-column align-items-center justify-content-center">

                    <div className="userImage rounded-circle" style={{height:'150px',width:'150px',backgroundColor:'gray'}}>
                        <img style={{width:'100%',height:"100%",objectFit:''}} src={USer} alt="" />
                    </div>
                    <strong className="mt-3"> Fayz Ahasan</strong>

                </div>
                 
        </div>
        <div className="col-md-4" style={{marginTop:'80px'}}>
                <div className="d-flex flex-column align-items-center justify-content-center">

                    <div className="userImage rounded-circle" style={{height:'150px',width:'150px',backgroundColor:'gray'}}>
                        <img style={{width:'100%',height:"100%",objectFit:''}} src={USer} alt="" />
                    </div>
                    <strong className="mt-3"> Mohd Amir Ali</strong>

                </div>
                 
        </div>
        <div className="col-md-4" style={{marginTop:'80px'}}>
                <div className="d-flex flex-column align-items-center justify-content-center">

                    <div className="userImage rounded-circle" style={{height:'150px',width:'150px',backgroundColor:'gray'}}>
                        <img style={{width:'100%',height:"100%",objectFit:''}} src={USer} alt="" />
                    </div>
                    <strong className="mt-3"> R Sai Sandeep</strong>

                </div>
                 
        </div>
        <div className="col-md-4" style={{marginTop:'80px'}}>
                <div className="d-flex flex-column align-items-center justify-content-center">

                    <div className="userImage rounded-circle" style={{height:'150px',width:'150px',backgroundColor:'gray'}}>
                        <img style={{width:'100%',height:"100%",objectFit:''}} src={USer} alt="" />
                    </div>
                    <strong className="mt-3"> Muzammil Ahmed Khan</strong>

                </div>
                 
        </div>
        <div className="col-md-4" style={{marginTop:'80px'}}>
                <div className="d-flex flex-column align-items-center justify-content-center">

                    <div className="userImage rounded-circle" style={{height:'150px',width:'150px',backgroundColor:'gray'}}>
                        <img style={{width:'100%',height:"100%",objectFit:''}} src={USer} alt="" />
                    </div>
                    <strong className="mt-3"> Mohammed Mehtab</strong>

                </div>
                 
        </div>
        <div className="col-md-4" style={{marginTop:'80px'}}>
                <div className="d-flex flex-column align-items-center justify-content-center">

                    <div className="userImage rounded-circle" style={{height:'150px',width:'150px',backgroundColor:'gray'}}>
                        <img style={{width:'100%',height:"100%",objectFit:''}} src={USer} alt="" />
                    </div>
                    <strong className="mt-3"> Mohd Moiz Uddin</strong>

                </div>
                 
        </div>
        <div className="col-md-4" style={{marginTop:'80px'}}>
                <div className="d-flex flex-column align-items-center justify-content-center">

                    <div className="userImage rounded-circle" style={{height:'150px',width:'150px',backgroundColor:'gray'}}>
                        <img style={{width:'100%',height:"100%",objectFit:''}} src={USer} alt="" />
                    </div>
                    <strong className="mt-3"> Mohammed Muzammil Ali</strong>

                </div>
                 
        </div>
        <div className="col-md-4" style={{marginTop:'80px'}}>
                <div className="d-flex flex-column align-items-center justify-content-center">

                    <div className="userImage rounded-circle" style={{height:'150px',width:'150px',backgroundColor:'gray'}}>
                        <img style={{width:'100%',height:"100%",objectFit:''}} src={USer} alt="" />
                    </div>
                    <strong className="mt-3"> Haseeba Fatima</strong>

                </div>
                 
        </div>
        <div className="col-md-4" style={{marginTop:'80px'}}>
                <div className="d-flex flex-column align-items-center justify-content-center">

                    <div className="userImage rounded-circle" style={{height:'150px',width:'150px',backgroundColor:'gray'}}>
                        <img style={{width:'100%',height:"100%",objectFit:''}} src={USer} alt="" />
                    </div>
                    <strong className="mt-3"> Yousuf Ahmed</strong>

                </div>
                 
        </div>
        
        </div>
    </section>
    </div>
  )
}

export default About