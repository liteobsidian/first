import React from "react";
import { create } from "react-test-renderer"
import Paginator from "./paginator";
import s from "./paginator.module.css";

describe ("Paginator component tests",()=>{
    test("Pages count is 11, but should be showed only 10",()=>{
        const component = create(<Paginator totalItemsCount={11} pageSize={1} portionSize={10} />);
        const root = component.root;
        let pages = root.findAllByType("div", {"class":s.selectedPage||s.pageNumber});
        expect(pages.length).toBe(10)
    })
})