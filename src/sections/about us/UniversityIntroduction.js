import React from "react";
import {Wrapper, Title, Description} from "./UniversityIntroduction.styles"

const UniversityIntroduction = (props) => {
    const {subtitle, descriptions} = props.data
    
    return (
        <Wrapper>
            <Title><h1>{subtitle}</h1></Title>
            <Description>
                {
                    descriptions.map((item, index) => {
                        return <p key = {index}>{item}</p>
                    })
                }
            </Description>
        </Wrapper>
    )
}
export default UniversityIntroduction