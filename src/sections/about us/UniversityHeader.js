
import React from 'react';
import {Wrapper, LogoInner, Logo, Content, Background1, Background2, Image} from "./UniversityHeader.styles"

const UniversityHeader = (props) => {
  return (
      <Wrapper>
        <LogoInner>
            <Logo upper><p>WORLD</p></Logo>
            <Logo><p>WORKS</p></Logo>
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