import reducer from "../../../store/counter/reducer";
import {increment, decrement, fetching, reset}
from "../../../store/counter/actions";

const counter1 = {counter: 1, fetching: false};
const counter2 = {...counter1, counter: 3 };
const counter3 = {...counter2, counter: 0};
const counterFetch = {...counter1, fetching: true};
const nb = 2

test('Increment de 2', () => {
  const initialState = counter1;
  const action = increment(nb);
  const expectedState = counter2;
  expect(reducer(initialState, action))
    .toEqual(expectedState);
});


test('Decrement de 2', () => {
  const initialState = counter2;
  const action = decrement(nb);
  const expectedState = counter1;
  expect(reducer(initialState, action))
    .toEqual(expectedState);
});


test('Reset à 0', () => {
  const initialState = counter2;
  const action = reset();
  const expectedState = counter3;
  expect(reducer(initialState, action))
    .toEqual(expectedState);
});

test('Fetch', () => {
  const initialState = counter1;
  const action = fetching();
  const expectedState = counterFetch;
  expect(reducer(initialState, action))
    .toEqual(expectedState);
});
