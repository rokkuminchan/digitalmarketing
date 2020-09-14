// テストの項目
// 1. タイトルが正しく表示されます
// 2. 段落は正しく表示されます
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import RoundTitleListItem from "./RoundTitleListItem";
import AboutUsData from "/.AboutUsData";

let container;

const RoundTitleListItem = [
  {
    philosophy: {
      title: "PHILOSOPHY",
      mindsets: [
        {
          title: "MISSION",
          description: "日本のに求められる高度IT人材を派遣する。",
        },
        {
          title: "VISION",
          description:
            "外国人IT技術者の「３つの壁」を乗り超える、最先端のIT技術を駆使して日本をサポートする。",
        },
      ],
      
    },
  },

];

beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  document.body.removeChild(container);
  container = null;
});

it("can render a view component from data", () => {
    
  act(() => {
    ReactDOM.render(<RoundTitleListItem data={Data} />, container);
  });
  const RoundTitle = container.querySelector("h1") ;
  const Description = container.querySelector("p");

  expect(RoundTitle.textContent).toBe(RoundTitleListItem.title);
  expect(Description.textContent).toBe(RoundTitleListItem.Description);
});

