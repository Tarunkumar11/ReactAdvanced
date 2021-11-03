import React from 'react'
import { shallow } from 'enzyme'
import App from 'components/App'
import CommentList from 'components/CommentList'
import CommentBox from 'components/CommentBox'

let wrapped;
beforeEach(() => {
    wrapped = shallow(<App/>)
});

it("Check comment box exist or not", () => {
    
    expect(wrapped.find(CommentBox).length).toEqual(1)
})


it("Check comment list exist or not", () => {
    expect(wrapped.find(CommentList).length).toEqual(1)
})