import styled from '@emotion/styled'
import {mq} from "../../helper/mediaQuery.js"

export const Wrapper = styled.div({
   display: "grid",
   width: "100vw",
   gridTemplateAreas: `
        "logo background1"
        "content background2"
   `,
   gridTemplateColumns: "1fr 1.5fr",
   gridTemplateRows: "1fr 1.4fr",
   fontSize: "16px",
   fontWeight: 700,
   [mq[2]]: {
        gridTemplateAreas: `
            "logo"
            "content"
            "background1"
            "background2"
        `,
        gridTemplateColumns: "1fr",
        gridTemplateRows: "1fr 0.5fr 1fr 1fr"
    },
    [mq[0]]: {
        gridTemplateRows: "1fr 1fr 1fr 1fr"
    },
})

export const LogoInner = styled.div({
   gridArea: "logo",
   background: "#f8fcff",
   position: "relative",
   width: "100%",
   height: "440px",
   [mq[3]]: {
        height: "350px",
    },
    [mq[2]]: {
        height: "250px",
    },
    [mq[0]]: {
        height: "200px",
    },
})

export const Logo = styled.div(props => ({
    position: "absolute",
    fontSize: "90px",
    color: props.upper ? "#fff" : "#053C76",
    top: props.upper ? "62%" : "70%",
    left: props.upper ? "50%" : "49%",
    transform: `translate(-50%, -50%)`,
    [mq[3]]: {
        left: props.upper ? "62%" : "61%",
    },
    [mq[2]]: {
        top: props.upper ? "35%" : "50%",
        left: props.upper ? "50%" : "49%",
    },
    '& p': {
        textShadow: props.upper ? `
            -1px -1px 0 #C3C6C6,
            1px -1px 0 #C3C6C6,
            -1px 1px 0 #C3C6C6,
            1px 1px 0 #C3C6C6
        `: "none"
    }
 }))

export const Content = styled.div({
   background: "#0c625e",
   gridArea: "content",
   fontSize: "16px",
   fontWeight: 700,
   position: "relative",
   [mq[2]]: {
        background: "#f8fcff",
    },
   '& p': {
       width: "60%",
       margin: "0 auto",
       color: "#fff",
       textAlign: "justify",
       position: "absolute",
       top: "30%",
       left: "50%",
       transform: `translate(-50%, -50%)`,
       [mq[3]]: {
        left: "60%",
        },
       [mq[2]]: {
            color: "#17427A",
            left: "50%",
        },
   }

})

export const Background1 = styled.div({
   gridArea: "background1",
   background: "#f8fcff",
})

export const Background2 = styled.div({
    gridArea: "background2",
    background: "#0c625e",
})

export const Image = styled.div({
    gridRow: `background1-start / background2-end`,
    gridColumn: `background1-start / background2-end`,
    width: "100%",
     height: "100%",
     position: "relative",
   '& img': {
       objectFit: "cover",
       width: "60%",
       height: "80%",
       position: "absolute",
       top: "50%",
       left: "50%",
       transform: `translate(-50%, -50%)`,
       [mq[2]]: {
            width: "80%",
        },
   }
})