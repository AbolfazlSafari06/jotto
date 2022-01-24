import React from 'react'
import { shallow } from 'enzyme';
import Congrats from './../Congrats';
import { checkProps, findByTestAtr } from '../../../test/testUtils';

const defaultProps = { success: true }

const setup = (props = {}, state = null) => {
    const setupProps = { ...defaultProps, ...props }
    const wra = shallow(<Congrats {...props} />);
    return wra;
}
test("render Congrats Component without error", () => {
    const wrapper = setup({ success: true });
    const component = findByTestAtr(wrapper, "component-congrats");
    expect(component.length).toBe(1)
})

test("render message congratulation when 'success' prop  true ", () => {

    const wrapper = setup({ success: true });
    const component = findByTestAtr(wrapper, 'congrats-message');
    expect(wrapper.text()).not.toBe('');
})
test("no  render message congratulation when 'success' prop  false ", () => {

    const wrapper = setup({ success: false });

    const component = findByTestAtr(wrapper, "component-congrats");
    expect(wrapper.text()).toBe('');
})

test("I want check props type and prevent error", () => {
    const exeptedProps = { success: false };

    checkProps(Congrats, exeptedProps);
})