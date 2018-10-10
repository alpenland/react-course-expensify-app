import React from 'react';
import { shallow } from 'enzyme';
import ExpenseListItem from '../../components/ExpenseListItem';
import expenses from '../fixtures/expenses';

test('should render ExpenseListItem with expense data', () =>{
    const wrapper = shallow(<ExpenseListItem 
        description={expenses[0].description}
        amount= {expenses[0].amount}
        createdAt= {expenses[0].createdAt}
        id={expenses[0].id}
    />)
    expect(wrapper).toMatchSnapshot();
});

