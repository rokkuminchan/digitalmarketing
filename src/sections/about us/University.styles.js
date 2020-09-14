import styled from '@emotion/styled'
import {mq} from "../../helper/mediaQuery.js"

export const UniversityInner = styled.div(props => ({
    display: "grid",
    width: "100%",
    alignItems: "center",
    gridTemplateAreas: props.index%2 === 0 ? `"image text"` : `"text image"`,
    gridTemplateColumns: "1.3fr 1fr",
    marginBottom: "130px",
     [mq[2]]: {
         
         gridGap: "90px",
         marginBottom: "90px",
     },
     [mq[1]]: {
        gridGap: "150px",
        marginBottom: "150px",
     },
     [mq[0]]: {
        alignItems: "start",
        gridTemplateAreas: `"image" "text"`,
        gridTemplateColumns: "1fr",
        gridAutoRows: 'minmax(1fr, max-content)',
        gridGap: "130px",
        marginBottom: "150px",
     },
     
 }))
 
export const UniversityImage = styled.div({
     gridArea: "image",
     position: "relative",
 })
 
export const UniversityImageInner = styled.div(props => ({
     position: "relative",
     height: 0,
     paddingBottom: "56.25%",
     [mq[2]]: {
         paddingBottom: "66.25%",
     },
     [mq[0]]: {
         paddingBottom: "96.25%",
     },
     '&>*': {
         width: props.index%2 === 0 ? "50%" : "55%",
         height: "60%",
         position: "absolute",
         top: "50%",
         left: props.index%2 === 0 ? "52%" : "50%",
         transform: `translate(-50%,-50%)`,
         objectFit: "cover",
         borderRadius: props.index%2 === 0 ? "25px 0 0 25px" : "0 25px 25px 0",
         [mq[2]]: {
             width: "45%",
             height: "45%",
             left: props.index%2 === 0 ? "60%" : "55%",
         },
         [mq[1]]: {
            width: "60%",
            height: "55%",
            left: props.index%2 === 0 ? "60%": "50%",
        },
        [mq[0]]: {
            width: "65%",
            height: "45%",
            left: props.index%2 === 0 ? "60%" : "50%",
        },
     }
 }))
 
export const UniversityImageBackground = styled.div(props => ({
     
     display: "flex",
     flexDirection: "column",
     width: "40%",
     height: "100%",
     position: "absolute",
     top: "50%",
     left: props.index%2 === 0 ? "40%" : "65%",
     transform: `translate(-50%,-50%)`,
     '& div:first-of-type': {
         width: "100%",
         height: "50%",
         background: props.color[0],
         border: 0
     },
     '& div:last-child': {
         width: "100%",
         height: "50%",
         background: props.color[1],
         border: 0,
         marginTop: "-1px"
     },
     [mq[2]]: {
         height: "65%",
         width: "30%",
         left: props.index%2 === 0 ? "45%" : "70%"
     },
     [mq[1]]: {
        height: "90%",
        width: "40%",
        left: props.index%2 === 0 ? "40%" : "70%"
    },
    [mq[0]]: {
        height: "75%",
        width: "45%",
        left: props.index%2 === 0 ? "40%" : "70%"
    },
 }))
 
export const UniversityContent = styled.div(props => ({
     gridArea: "text",
     position: "relative",
     '& > div': {
         position: "absolute",
         paddingTop: "100px",
         top: "50%",
         left: props.index%2 === 0 ? "35%" : "65%",
         transform: `translate(-50%,-50%)`,
         width: props.index%2 === 0 ? "100%" : "90%",
         [mq[2]]: {
             left: "50%",
             width: "90%",
             padding: "0 24px",
         },
     }
 }))