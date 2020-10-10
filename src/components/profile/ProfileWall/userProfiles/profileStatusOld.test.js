import React from "react";
import {create} from "react-test-renderer"
import ProfileStatusOld from "./profileStatusOld";

describe("ProfileStatus component", () => {
    test("status from props should be in the state", () => {
        const component = create(<ProfileStatusOld status="lol kek"/>);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("lol kek");
    });
});