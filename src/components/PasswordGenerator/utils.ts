import { OptionsField } from "./types"

const chars: Record<OptionsField, string> = {
  [OptionsField.lowercase]: 'abcdefghijklmnopqrstuvwxyz',
  [OptionsField.uppercase]: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  [OptionsField.numbers]: '0123456789',
  [OptionsField.symbols]: '!@#$%^&*()_+~`|}{[]\\:;?><,./-='
}

export const generatePassword = (length: number, options: Record<OptionsField, boolean>) => {
  let charset = ''

  Object.entries(options).forEach(([option, isEnabled]) => {
    if (!isEnabled) return
    charset += chars[option as OptionsField]
  })

  let password = ''
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    password += charset[randomIndex]
  }
  return password
}