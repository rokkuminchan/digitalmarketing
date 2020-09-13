
import React from 'react';
import {Wrapper, LogoInner, Content, Background1, Background2, Image} from "./UniversityHeader.styles"

const UniversityHeader = (props) => {
  return (
      <Wrapper>
        <LogoInner>
            <img className="logo" src= {props.data.logo.src} alt={props.data.logo.alt}/>  
        </LogoInner>
        <Content>
            <p>{props.data.title}</p>
        </Content>
        <Background1 />
        <Background2 />
        <Image>
          <img src={props.data.img.src} alt={props.data.img.alt} /> 
        </Image>
      </Wrapper>
  );
}
export default UniversityHeader;