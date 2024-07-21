import { OptionsField } from "./types"

const chars: Record<OptionsField, string> = {
  [OptionsField.lowercase]: 'abcdefghijklmnopqrstuvwxyz',
  [OptionsField.uppercase]: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  [OptionsField.numbers]: '0123456789',
  [OptionsField.symbols]: '!@#$%^&*()_+~`|}{[]\\:;?><,./-='
}

export const generatePassword = (length: number, options: Record<OptionsField, boolean>) => {
  const charset: string[] = []
  const requiredChars: string[] = []

  Object.entries(options).forEach(([option, isEnabled]) => {
    const optionField = option as OptionsField
    if (!isEnabled || !chars[optionField] || !chars[optionField].length) return
    charset.push(...chars[optionField].split(''))
    requiredChars.push(chars[optionField][Math.floor(Math.random() * chars[optionField].length)])
  })

  const password = [...requiredChars]
  for (let i = requiredChars.length; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length)
    password.push(charset[randomIndex])
  }

  password.sort(() => Math.random() - 0.5)

  return password.join('')
}