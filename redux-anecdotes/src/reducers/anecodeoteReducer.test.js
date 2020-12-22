import reducer from './anecdoteReducer'
import deepFreeze from 'deep-freeze'

describe('anecodoteReducer', () => {
  test('returns new state with action NEW_ANECDOTE', () => {
    const state = []
    const action = {
      type: 'NEW_ANECDOTE',
      data: {
        content: 'the app state is in redux store',
        id: 69,
        votes: 59
      }
    }

    deepFreeze(state)
    const newState = reducer(state, action)

    expect(newState).toHaveLength(1)
    expect(newState).toContainEqual(action.data)
  })
  test('returns new state with action VOTE', () => {
  const state = [
    {
      content: 'the app state is in redux store',
      id: 1,
      votes: 0
    },
    {
      content: 'state changes are made with actions',
      id: 2,
      votes: 0
    }]

  const action = {
    type: 'VOTE',
    data: {
      id: 2
    }
  }

  deepFreeze(state)
  const newState = reducer(state, action)

  expect(newState).toHaveLength(2)

  expect(newState).toContainEqual(state[0])

  expect(newState).toContainEqual({
    content: 'state changes are made with actions',
    id: 2,
    votes: 1
  })
})
})