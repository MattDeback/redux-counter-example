import {
  delayedIncrement,
} from "../../../store/counter/asyncActions";

import {
  fetching, increment,
} from "../../../store/counter/actions";

let originalFetch = null;

beforeEach(() => {
  originalFetch = window.setTimeout;
  window.setTimeout = (fct, nbDeMiliSecondes) => fct();
})

afterEach(() => { window.setTimeout = originalFetch; })

test('Toggle a todo item when it was marked as done', () => {
  const expectedFetching = fetching();
  const expectedIncrement = increment(2);
  const mockDispatcher = jest.fn();

  const thunk = delayedIncrement(2);

  thunk(mockDispatcher)

  expect(mockDispatcher.mock.calls[0])
        .toEqual([expectedFetching]);
  expect(mockDispatcher.mock.calls[1])
        .toEqual([expectedIncrement]);
});
