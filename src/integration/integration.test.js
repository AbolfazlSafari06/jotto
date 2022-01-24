import { storeFactory } from "../test/testUtils";
import { gueesWord } from '../actions/index';

describe("guessword action dispatcher", () => {
    const secretWord = 'party';
    const unSuccessfulGuess = "train"
    describe("no guessed word", () => {
        let store;
        const initialStore = { secretWord };
        beforeEach(() => {
            store = storeFactory(initialStore)
        })
        test("updates state corectly for unsuccessful guess ", () => {
            store.dispatch(gueesWord(unSuccessfulGuess));
            const newState = store.getState();
            const expetedState = {
                ...initialStore,
                success: false,
                gueesWords: [{
                    gueesWord: unSuccessfulGuess,
                    LetterMatchCount: 3
                }]
            }
            expect(newState).toEqual(expetedState);
        })
        test("updates state corectly for successful guess ", () => {
            store.dispatch(gueesWord(secretWord));
            const newState = store.getState();
            const expetedState = {
                ...initialStore,
                success: true,
                gueesWords: [{
                    gueesWord: secretWord,
                    LetterMatchCount: 5
                }]
            }
            expect(newState).toEqual(expetedState);
        })
    })
    describe("some guess word", () => {

        const guessWords = [{ guessWord: "agile", letterMatchCount: 1 }]
        const initialState = { guessWords, secretWord }
        let store;
        beforeEach(() => {
            store = storeFactory(initialState)
        })

        test("updates state corectly for unsuccessful guess ", () => {
            store.dispatch(gueesWord(unSuccessfulGuess));
            const newState = store.getState();
            const expetedState = {
                secretWord,
                success: false,
                guessWords: [...guessWords, {
                    guessWord: unSuccessfulGuess,
                    letterMatchCount: 3
                }]
            }
            expect(newState).toEqual(expetedState);
        })
        test("updates state corectly for successful guess ", () => {
            store.dispatch(gueesWord(secretWord));
            const newState = store.getState();
            const expetedState = {
                secretWord,
                success: true,
                guessWords: [...guessWords, {
                    guessWord: secretWord,
                    letterMatchCount: 5
                }]
            }
            expect(newState).toEqual(expetedState);
        })
    })
})