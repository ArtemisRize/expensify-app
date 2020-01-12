import React from 'react'
import {shallow} from 'enzyme'
import {AddPage} from '../../components/AddPage'
import expenses from '../fixtures/expenes'

let addExpense, history, wrapper

beforeEach(() => {
    addExpense = jest.fn()
    history = {push:jest.fn()}
    wrapper = shallow(<AddPage addExpense={addExpense} history={history}/>)
})


test('should render addpage correctly', () => {
    expect(wrapper).toMatchSnapshot()
})


test('should handle onSubmit', () => {
    wrapper.find('ExpenseForm').prop('onSubmit')(expenses[0])
    expect(history.push).toHaveBeenLastCalledWith('/')
    expect(addExpense).toHaveBeenLastCalledWith(expenses[0])
})