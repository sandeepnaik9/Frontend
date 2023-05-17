import React, { useEffect, useRef } from "react";



const CustomToggle = React.forwardRef(({ children, onClick }, ref) => {
    const TGLREF = useRef(null);

    useEffect(()=>{
        console.log(TGLREF.current.scrollWidth)
        if(TGLREF){
        const toggleBTN = TGLREF.current;
        if(toggleBTN)
        if (toggleBTN.scrollWidth > toggleBTN.clientWidth) {
            toggleBTN.classList.add('togglebtn'); // Add ellipsis class if overflowed
          } else {
            toggleBTN.classList.remove('togglebtn'); // Remove ellipsis class if not overflowed
          }}
    },[])


    return(
  <a
    href="a"
    ref={TGLREF}
    className='btn'
    style={{width:"150px",whiteSpace:'nowrap',overflow:'hidden'}}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    
  </a>
)}
);

export default CustomToggle;
