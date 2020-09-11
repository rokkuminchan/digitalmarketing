import styled from '@emotion/styled'
import {mq} from "../../helper/mediaQuery.js"
export const Wrapper = styled.div({
    width: "100vw",
    overflow: "hidden"
})

export const Container = styled.div({
    width: "100%",
    background: "#0C625E",
})

export const UniversitiesList = styled.div({
    display: "grid",
    gridTemplateAreas: `"list bookmark"`,
    gridTemplateColumns: `1fr 0.1fr`,
    gridAutoRows: `minmax(1fr max-content)`
})

export const Row = styled.div({
        gridArea: "list"
})

export const BookmarkList = styled.div({
    gridArea: "bookmark",
    position: "relative",
})

export const Bookmark = styled.div(props => ({
    
    position: "absolute",
    width: "2px",
    display: "flex",
    flexDirection: "column",
    alignSelf: "center",
    right: props.inner ? "30px" : "70px",
    top: "10vh",
    [mq[2]]: {
        right: props.inner ? "20px" : "50px",
    },
    [mq[0]]: {
        right: props.inner ? "10px" : "30px",
    },
    '&::before': {
        position: "absolute",
        left: "1px",
        top: "230px",
        content: `''`,
        width: "1px",
        height: props.inner ? "170px": "100px",
        background: "#fff",
        [mq[2]]: {
            top: "150px",
        },
        [mq[0]]: {
            top: "130px",
            height: props.inner ? "120px": "70px",
        },
        },
    '& span': {
        marginBottom: "25px",
        fontWeight: 700,
        fontSize: "15px",
        color: "#fff",
        transform: `rotate(90deg)`,
        [mq[2]]: {
            marginBottom: "10px",
            fontSize: "10px",
            fontWeight: 400,
        },
    }
}))