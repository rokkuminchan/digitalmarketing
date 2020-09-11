import React, { useRef, useEffect} from "react";

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import University from './University'
import {Wrapper, Container, UniversitiesList, Row, BookmarkList, Bookmark} from "./UniversityList.styles"

gsap.registerPlugin(ScrollTrigger)


const UniversityList = (props) => {
    const {universityItem} = props.data
    let bookmarkRef = useRef(null)
    let rowRef = useRef(null)
    useEffect(() => {
        let height = rowRef.clientHeight
        ScrollTrigger.create({
            trigger: bookmarkRef,
            start: 'top start',
            end: () => `+=${height/1.45}`,
            pin: true,
            markers: true,
        });
    },[])
    return (
        <Wrapper className ="wrapper">
            <Container>
                <UniversitiesList>
                    <Row ref={el => (rowRef = el)}>
                        {
                            universityItem.map((item, index) => {
                                return(
                                    <University key = {index} item = {item} index ={index} />
                                )
                            })
                        }
                    </Row>
                    <BookmarkList>
                        <div ref={el => (bookmarkRef = el)}>
                            <Bookmark>
                                <span>W</span>
                                <span>O</span>
                                <span>R</span>
                                <span>L</span>
                                <span>D</span>
                            </Bookmark>
                            <Bookmark inner>
                                <span>W</span>
                                <span>O</span>
                                <span>R</span>
                                <span>K</span>
                                <span>S</span>
                            </Bookmark>
                        </div>
                   </BookmarkList>
                </UniversitiesList>
            </Container>    
        </Wrapper> 
    )
}

  export default UniversityList