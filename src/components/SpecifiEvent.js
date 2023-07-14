import React, { useEffect, useRef, useState } from 'react'
import SpecificEventCard from './SpecificEventCard';


const SpecifiEvent = ({posts, type}) => {
    const [scrollLeft, setScrollLeft] = useState(0);
    const scrollContainer = useRef()
  const handleKeyDown = (event) => {
    const scrollAmount = 1400; // Adjust the scroll amount based on your desired increment
    console.log(event.key)
    if (event.key === 'ArrowLeft') {
      setScrollLeft((prevScrollLeft) => prevScrollLeft - scrollAmount); // Scroll left
    } else if (event.key === 'ArrowRight') {
      setScrollLeft((prevScrollLeft) => prevScrollLeft + scrollAmount); // Scroll right
    }
  };

  useEffect(()=>{
    if(scrollContainer.current){
        scrollContainer.current.scrollLeft = scrollLeft
    }
  },[scrollLeft])


  return (
    <div className={type==="eventlist" ?"row d-flex custom-scrollbar":"row d-flex custom-scrollbar flex-nowrap" } ref={scrollContainer} tabIndex="1" onKeyDown={handleKeyDown} style={{overflow:'scroll'}}>
        {posts && posts.map((post,index) =><SpecificEventCard post={post}/>)}
        
    </div>
  )
}

export default SpecifiEvent