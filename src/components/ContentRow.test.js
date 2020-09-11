import React from "react";
import ReactDOM from "react-dom";

import ContentRow from "./ContentRow";
import { act } from "react-dom/test-utils";
import { render } from "@testing-library/react";

let container;

beforeEach(() => {
    container = document.createElement("div");
    document.body.appendChild(container);
});

afterEach(() => {
    document.body.removeChild(container);
    container = null;
});

const Item =
{
    title: "経歴",
	subtitle: [
        "1953 創立",
        "1951 abc"
    ]
};

it("can render a view component from data", () => {
    // act(() => {
    // });
    //const { getByText } = render(<Introduction data={introduction} />);
    
    const { getByText } =  render(<ContentRow item={Item}/>);

    const titleElement = getByText(new RegExp(Item.title,"g"));
    expect(titleElement).toBeInTheDocument();

    Item.subtitle.forEach(subtitle=>{
        const subTitleElement = getByText(new RegExp(subtitle,"g"));
        expect(subTitleElement).toBeInTheDocument();
    })

//   const titleElement = getByText(/経歴/i);
//   expect(titleElement).toBeInTheDocument();

})