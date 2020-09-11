import React from "react";
import ReactDOM from "react-dom";

import ContentRow from "./ContentRow";
import { act } from "react-dom/test-utils";

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
        "1953 創立"
    ]
};

it("can render a view component from data", () => {
    act(() => {
        ReactDOM.render(<ContentRow item={Item}/>, container);
    });

    const title = container.querySelector("h6");
    const subTags = container.querySelectorAll("p");

    expect(title.textContent).toBe(Item.title);
    expect(subTags.length).toBe(Item.subtitle.length);
    expect(subTags[0].textContent).toBe(Item.subtitle[0]);
    //expect(subTags[1].textContent).toBe(Item.subtitle[1]);

})