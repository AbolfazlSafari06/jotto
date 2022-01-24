import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAtr, checkProps } from '../../../test/testUtils';
import GuessWord from '../guessWord';
import App from '../../../App';

const defaultProps = {
    guesseWords: [{ guesseWord: "train", letterMatchCount: 3 }],
}


const setup = (props = {}) => {
    const setupProps = { ...defaultProps, ...props }
    const wra = shallow(<GuessWord guesseWords={setupProps.guesseWords} />);
    return wra;
}



test("does not throw error with exepted props", () => {
    checkProps(GuessWord, defaultProps)
})


describe("if there not words guess", () => {
    let wrapper =
        beforeEach(() => {
            wrapper = setup({ guesseWords: [] });
        })
    test("render without error ", () => {
        const component = findByTestAtr(wrapper, 'component-gussed-words');
        expect(component.length).toBe(1);
    })
    test("render instruction to guess word ", () => {
        const insttruction = findByTestAtr(wrapper, "guess-instructions");
        expect(insttruction.text().lenght).not.toBe(1);
    })
})

describe("if there  words guess", () => {
    let wrapper;
    const guesseWordsProp = [
        { guesseWord: "train", letterMatchCount: 1 },
        { guesseWord: "apple", letterMatchCount: 4 },
        { guesseWord: "orange", letterMatchCount: 3 },
        { guesseWord: "party", letterMatchCount: 7 },
    ]
    beforeEach(() => {
        wrapper = setup({ guesseWords: guesseWordsProp });
    })
    test("render without error ", () => {
        const component = findByTestAtr(wrapper, 'component-gussed-words');
        expect(component.length).toBe(1);
    })
    test("render 'guess words' without error ", () => {
        const guessWordsSection = findByTestAtr(wrapper, 'gussed-words');
        expect(guessWordsSection.length).toBe(1);
    })
    test("correct number of guessed words ", () => {
        const guessWordsNumbers = findByTestAtr(wrapper, 'guess-Word');
        expect(guessWordsNumbers.length).toBe(guesseWordsProp.length);
    })
})