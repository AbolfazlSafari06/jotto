import { getLetterMatchCount } from "./indexHelper";

describe(" get letter match count", () => {
    const secretWord = "party";

    test("returns correct whene there are  not matching letters", () => {
        const letterMatchCount = getLetterMatchCount('bones', secretWord);
        expect(letterMatchCount).toBe(0)
    })
    test("returns corect  correct whene there are  3 matching letters", () => {
        const letterMatchCount = getLetterMatchCount('trian', secretWord);
        expect(letterMatchCount).toBe(3)
    })
    test("returns correct whene there are duplicated lettersin the guess", () => {
        const letterMatchCount = getLetterMatchCount('parka', secretWord);
        expect(letterMatchCount).toBe(3)
    })
})