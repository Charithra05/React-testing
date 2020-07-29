import React from 'react';
import CommentBox from '../CommentBox';
import {mount} from 'enzyme';
import { unmountComponentAtNode } from 'react-dom';

let wrapped;
beforeEach(()=>{
    wrapped=mount(<CommentBox/>);
});

it('has a text area and a button',()=>{

    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);

});
//describe function for giving some common code
//inside decribe we can give another beforeEach() which is only gng to be applicable for next it( functions)
describe('the text area',()=>{
    beforeEach(()=>{
        wrapped.find('textarea').simulate('change',{
            target:{value:'new comment'}
        });
        wrapped.update();
    });
})

it('has a text area that users can type',()=>{
    expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
});

it('when form is submitted text area gets emptied',()=>{
    wrapped.find('form').prop('submit')
    wrapped.update();
    expect(wrapped.find('textarea').prop('value')).toEqual('');
})
afterEach(()=>{
    wrapped.unmount();

})
//Find not only finds the instances but also the HTML elements
