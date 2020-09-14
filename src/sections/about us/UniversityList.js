import React, { useRef, useEffect} from "react";

import gsap from 'gsap'
import { ScrollTrigger } from "gsap/ScrollTrigger";
import University from './University'
import UniversityHeader from "./UniversityHeader"
import {Wrapper, Container, UniversitiesList, Row, BookmarkList, Bookmark} from "./UniversityList.styles"

gsap.registerPlugin(ScrollTrigger)


const UniversityList = (props) => {
    const {universityItem} = props.data
    let bookmarkRef = useRef(null)
    let rowRef = useRef(null)
    let universityRefs = useRef([])
    universityRefs.current = []
    
    const addToRefs = (el) => {
        if (el && !universityRefs.current.includes(el)) {
            universityRefs.current.push(el)
        }
    }
    useEffect(() => {
        let height = rowRef.clientHeight
        // let tl = gsap.timeline({
        //     paused: true,
        //     scrollTrigger: {
        //         trigger: rowRef,
        //         start: "top 70%",
        //         end: "80% center",
        //         scrub: 0.3,
        //         markers: true
        //     }
        // })
        // let uni = gsap.utils.toArray(universityRefs.current)
        // // console.log(uni);
        // uni.forEach(el => {
        //     let section = el.querySelectorAll('div img')
           
        //     console.log(section);
        //     tl.fromTo (el, {opacity: 0}, {opacity: 1, duration: 3, stagger: {
        //         from: "start", each: .1, repeat: 0
        //       }},0)
        // })
        
        // ScrollTrigger.create({
        //     trigger: bookmarkRef,
        //     start: "top center",
        //     // end: "bottom center",
        //     end: () => `+=${height/1.45}`,
        //     pin: true,
        //     // pinReparent: true,
        //     markers: true,
        // });
    },[])
    return (
        <Wrapper className ="wrapper">
            <Container>
                <UniversitiesList>
                    <Row className="row" ref={el => (rowRef = el)}>
                        {
                            universityItem.map((item, index) => {
                                return(
                                    <div key = {index} ref={addToRefs}>
                                       <University item = {item} index ={index} />         
                                    </div>
                                )
                            })
                        }
                    </Row>
                    <BookmarkList ref={el => (bookmarkRef = el)}>
                        <div id="bookmark">
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