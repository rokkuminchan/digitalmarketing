import styled from '@emotion/styled'
import {mq} from "../../helper/mediaQuery.js"

export const Wrapper = styled.div({
   display: "grid",
   width: "100vw",
   gridTemplateAreas: `
        "logo background1"
        "content background2"
   `,
   gridTemplateRows: "1fr 1.5fr",
   gridAutoColumns: "1fr 1fr",
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
        gridTemplateRows: "1fr 1.5fr 1fr 1fr"
    },
   '& p': {
       color: "#fff",
       textAlign: "justify",
   }
})

export const LogoInner = styled.div({
   gridArea: "logo",
   background: "#f8fcff",
   textAlign:"center",
   '& img': {
       width: "70%",
   },
   [mq[2]]: {
    '& img': {
        width: "50%",
        },
    },
})

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
       margin: "auto",
       color: "#fff",
       textAlign: "justify",
       position: "absolute",
       top: "50%",
       left: "50%",
       transform: `translate(-50%, -50%)`,
       [mq[2]]: {
            color: "#17427A",
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
     height: "90%",
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