import { State } from 'redux/state'

export type Action<T, P = undefined> = {
  type: T
  payload: P
}

export type StateGetter = () => State
