import React from "react";
import ContentRow from "../../components/ContentRow"
import {UniversityInner, UniversityImage, UniversityImageInner, UniversityImageBackground, UniversityContent} from "./University.styles"

const University = (props) => {
    const {name, description, img, color} = props.item
    const index = props.index
    return (
        <UniversityInner index = {index}>
            <UniversityImage>
                <UniversityImageBackground index = {index} color = {color}>
                    <div></div>
                    <div></div>
                </UniversityImageBackground>
                <UniversityImageInner index = {index}>
                        <img src={img.src} alt={name} />
                </UniversityImageInner>
            </UniversityImage>
            <UniversityContent index = {index}>
                <div>
                    {
                        description.map((item,index) => {
                            return <ContentRow key = {index} item = {item} />
                        })
                    }
                </div>
            </UniversityContent>
        </UniversityInner>
    )
}
export default University