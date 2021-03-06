import React from "react"
import Input from "../input"
import { shallow } from "enzyme"
import { findByTestAtr, storeFactory } from './../../../test/testUtils';

const setup = (initialState = {}) => {
    const store = storeFactory(initialState)
    const wrapper = shallow(<Input store={store} />).dive().dive();
    return wrapper;
}

describe("render", () => {
    describe("word has not been guessed", () => {
        let wrapper;
        beforeEach(() => {
            const initialState = { success: false };
            wrapper = setup(initialState);
        })
        test("renders component without error", () => {
            const compoent = findByTestAtr(wrapper, "componen-input");
            expect(compoent.length).toBe(1)
        })
        test("renders input box", () => {
            const inputBox = findByTestAtr(wrapper, "input-box");
            expect(inputBox.length).toBe(1)
        })
        test("renders submit button", () => {
            const submitBtn = findByTestAtr(wrapper, "submit-button");
            expect(submitBtn.length).toBe(1)
        })
    })
    describe("word has  been guessed", () => {
        let wrapper;
        beforeEach(() => {
            const initialStore = { success: true };
            wrapper = setup(initialStore)
        })
        test("renders component without error", () => {
            const compoent = findByTestAtr(wrapper, "componen-input");
            expect(compoent.length).toBe(1)
        })
        test("does not render input box", () => {
            const inputBox = findByTestAtr(wrapper, "input-box");
            expect(inputBox.length).toBe(0)
        })
        test("does not  render submit button", () => {
            const submitBtn = findByTestAtr(wrapper, "submit-button");
            expect(submitBtn.length).toBe(0)
        })
    })
})
