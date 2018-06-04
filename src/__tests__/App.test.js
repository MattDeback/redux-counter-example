import React from 'react';
import Enzyme, {mount} from 'enzyme';
import renderer from 'react-test-renderer';
import Adapter from 'enzyme-adapter-react-16';
import {App} from '../App';

Enzyme.configure({ adapter: new Adapter() });

const todos = [
  {id: 1, name: "Todo 1", done: false},
  {id: 2, name: "Todo 2", done: true}
];

test("App displays well", () => {
  const updateHandler = jest.fn();

  const app = renderer.create(
    <App  />
  ).toJSON();

  expect(app).toMatchSnapshot();
});

test("App interaction works", () => {
  const reset = jest.fn();

  const wrapper = mount(<App isFetching="true" />);

  wrapper
    .find('click')
    .simulate('change', {target: {value: "Todo 3"}});

  wrapper
    .find('button')
    .simulate('click');

  expect(updateHandler).toHaveBeenCalled();
});
