
import React from 'react';
import "./UniversityHeader.css";


const UniversityHeader = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        <div id="text">
          <div className="logo__inner">
            <img className="logo"
                  src= {props.data.logo.src}
                  alt={props.data.logo.alt}/> 
          </div>  
        </div>
        <div id="content">
          <div className="content__inner">
            <p>{props.data.title}</p>
          </div>
        </div>
        <div id="img">
          <div className =" bg1"></div>
          <div className =" bg2"></div>
          < div className="img__inner">
              <img 
                src={props.data.img.src}
                alt={props.data.img.alt}
              />  
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default UniversityHeader;