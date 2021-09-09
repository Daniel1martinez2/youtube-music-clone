import React, {Fragment} from 'react'; 
import arrowSvg from './arrow.svg'; 

const CarrouselArrow  = () => {
  return(
    <Fragment>
      <button  className="carrousel__arrow carrousel__arrow--right">
        <img src={arrowSvg} alt="arrow" />
      </button>

      <button className="carrousel__arrow carrousel__arrow--left">
        <img src={arrowSvg} alt="arrow" />
      </button>
    </Fragment>
  ); 
}; 

export default CarrouselArrow; 