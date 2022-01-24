import checkPropTypes from 'check-prop-types';
import rootReduce from '../reducers';
import { createStore, applyMiddleware } from "redux";
import { middlewares } from '../configureStore';

export const storeFactory = (initialState) => {
    const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore);
    return createStoreWithMiddleware(rootReduce, initialState);
}


export const findByTestAtr = (wrapper, value) => {
    const compoent = wrapper.find(`[data-test="${value}"]`);
    return compoent
}
export const checkProps = (component, templateProps) => {
    const propError = checkPropTypes(component.propTypes, templateProps, 'prop', component.name);
    expect(propError).toBeUndefined()
}

