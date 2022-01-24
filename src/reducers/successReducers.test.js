import { actionTypes } from "../actions";
import successReducer from "./successReducers";

test("returns default initial state if 'false' whene no action is passed", () => {
    const newState = successReducer(undefined, {});
    expect(newState).toBe(false);
})
test("returns state state of 'true' whene receiving an action type of 'CORRECT_GUESS'", () => {
    const newState = successReducer(undefined, { type: actionTypes.CORRECT_GUESS });
    expect(newState).toBe(true);
})