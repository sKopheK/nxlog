import { PasswordGeneratorState } from './types'

export enum Action {
  SET_PASSWORD = 'SET_PASSWORD',
  SET_LENGTH = 'SET_LENGTH',
  SET_OPTION = 'SET_OPTION'
}

export type SetPasswordAction = {
  type: Action.SET_PASSWORD,
  payload: string
}

export type SetLengthAction = {
  type: Action.SET_LENGTH,
  payload: number
}

export type SetOptionAction = {
  type: Action.SET_OPTION,
  payload: [keyof PasswordGeneratorState['options'], boolean]
}

type PasswordGeneratorAction = SetPasswordAction | SetLengthAction | SetOptionAction

export const passwordGeneratorReducer = (
  state: PasswordGeneratorState,
  { type, payload }: PasswordGeneratorAction
): PasswordGeneratorState => {
  switch (type) {
    case 'SET_PASSWORD':
      return {
        ...state,
        password: payload,
      }
    case 'SET_LENGTH':
      return {
        ...state,
        passwordLength: payload,
      }
    case 'SET_OPTION': {
      const [option, value] = payload

      const updated = {
        ...state,
        options: {
          ...state.options,
          [option]: value
        }
      }
      // at least one option should be selected
      if (Object.values(updated.options).filter(Boolean).length === 0) {
        return state
      }

      return updated
    }
    default:
      return state
  }
}
