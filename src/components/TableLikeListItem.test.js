
// テストの項目
// 1. タイトルが正しく表示されます
// 2. 段落は正しく表示されます
import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import TableLikeListItem from "./TableLikeListItem";
import AboutUsData from "/.AboutUsData";


let container;

const TableLikeListItem = [
  {
    values: [
      {
        title: "言葉の壁",
        description:
          "普通の日本人と同じように、日本語の読み書きや会話ができる。",
        css: "round-title-list-item__title--greenbg",
      },
      {
        title: "文化の壁",
        css: "round-title-list-item__title--bluebg",
        description: "日本の文化を理解し、尊重しする。",
      },
      {
        title: "業務の壁",
        css: "round-title-list-item__title--redbg",
        description: "日本人の働き方を学び、仕事に役立つシステムを設計する。",
      },
    ],
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
    ReactDOM.render(<TableLikeListItem data={Data} />, container);
  });
  const TableTitle = container.querySelector("h1") ;
  const Description = container.querySelector("p");


  expect(TableTitle.textContent).toBe(TableLikeListItem.title);
  expect(Description.textContent).toBe(TableLikeListItem.Description);
});
