export enum OptionsField {
    lowercase = 'lowercase',
    uppercase = 'uppercase',
    numbers = 'numbers',
    symbols = 'symbols',
}

export type PasswordGeneratorState = {
    password: string
    passwordLength: number
    options: Record<OptionsField, boolean>
  }