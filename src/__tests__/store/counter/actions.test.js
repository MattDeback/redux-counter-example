import {increment, decrement, fetching, reset}
  from "../../../store/counter/actions";

const nb = 2;

test("increment de 2", () => {
  expect(increment(nb))
    .toEqual({type: "INCREMENT",
    incrementBy: 2});
})

test("decrement de 2", () => {
  expect(decrement(nb))
    .toEqual({type: "DECREMENT", decrementBy: 2});
})

test("reset", () => {
  expect(reset())
    .toEqual({type: "RESET"});
})

test("fetching", () => {
  expect(fetching())
    .toEqual({type: "FETCHING"});
})
