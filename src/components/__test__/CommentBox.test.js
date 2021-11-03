import React from "react";
import { shallow } from 'enzyme'
import CommentBox from "components/CommentBox";

let wrapped;
beforeEach(() => {
    wrapped = shallow(<CommentBox />)
})

afterEach(() => {
    wrapped.unmount()
})
it("Has a textarea and button", () => {
    
    expect(wrapped.find('textarea').length).toEqual(1)
    expect(wrapped.find('button').length).toEqual(1)

})