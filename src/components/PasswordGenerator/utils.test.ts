import { OptionsField } from "./types"
import { generatePassword } from "./utils"

it('generates password with lowercase', () => {
    const output = generatePassword(100, {
        [OptionsField.lowercase]: true,
        [OptionsField.uppercase]: false,
        [OptionsField.numbers]: false,
        [OptionsField.symbols]: false,
    })

    expect(output).toMatch(/[a-z]/)
})

it('generates password with uppercase', () => {
    const output = generatePassword(100, {
        [OptionsField.lowercase]: false,
        [OptionsField.uppercase]: true,
        [OptionsField.numbers]: false,
        [OptionsField.symbols]: false,
    })

    expect(output).toMatch(/[A-Z]/)
})

it('generates password with numbers', () => {
    const output = generatePassword(100, {
        [OptionsField.lowercase]: false,
        [OptionsField.uppercase]: false,
        [OptionsField.numbers]: true,
        [OptionsField.symbols]: false,
    })

    expect(output).toMatch(/[0-9]/)
})

it('generates password with symbols', () => {
    const output = generatePassword(100, {
        [OptionsField.lowercase]: false,
        [OptionsField.uppercase]: false,
        [OptionsField.numbers]: false,
        [OptionsField.symbols]: true,
    })

    expect(output).toMatch(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)
})

it('generates password with all options', () => {
    const output = generatePassword(100, {
        [OptionsField.lowercase]: true,
        [OptionsField.uppercase]: true,
        [OptionsField.numbers]: true,
        [OptionsField.symbols]: true,
    })

    expect(output).toMatch(/[a-z]/)
    expect(output).toMatch(/[A-Z]/)
    expect(output).toMatch(/[0-9]/)
    expect(output).toMatch(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)
})

it('generates password with lowercase and uppercase', () => {
    const output = generatePassword(100, {
        [OptionsField.lowercase]: true,
        [OptionsField.uppercase]: true,
        [OptionsField.numbers]: false,
        [OptionsField.symbols]: false,
    })

    expect(output).toMatch(/[a-z]/)
    expect(output).toMatch(/[A-Z]/)
})

it('generates password with lowercase and numbers', () => {
    const output = generatePassword(100, {
        [OptionsField.lowercase]: true,
        [OptionsField.uppercase]: false,
        [OptionsField.numbers]: true,
        [OptionsField.symbols]: false,
    })

    expect(output).toMatch(/[a-z]/)
    expect(output).toMatch(/[0-9]/)
})

it('generates password with lowercase and symbols', () => {
    const output = generatePassword(100, {
        [OptionsField.lowercase]: true,
        [OptionsField.uppercase]: false,
        [OptionsField.numbers]: false,
        [OptionsField.symbols]: true,
    })

    expect(output).toMatch(/[a-z]/)
    expect(output).toMatch(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)
})

it('generates password with uppercase and numbers', () => {
    const output = generatePassword(100, {
        [OptionsField.lowercase]: false,
        [OptionsField.uppercase]: true,
        [OptionsField.numbers]: true,
        [OptionsField.symbols]: false,
    })

    expect(output).toMatch(/[A-Z]/)
    expect(output).toMatch(/[0-9]/)
})

it('generates password with uppercase and symbols', () => {
    const output = generatePassword(100, {
        [OptionsField.lowercase]: false,
        [OptionsField.uppercase]: true,
        [OptionsField.numbers]: false,
        [OptionsField.symbols]: true,
    })

    expect(output).toMatch(/[A-Z]/)
    expect(output).toMatch(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)
})

it('generates password with numbers and symbols', () => {
    const output = generatePassword(100, {
        [OptionsField.lowercase]: false,
        [OptionsField.uppercase]: false,
        [OptionsField.numbers]: true,
        [OptionsField.symbols]: true,
    })

    expect(output).toMatch(/[0-9]/)
    expect(output).toMatch(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)
})

it('generates password with lowercase, uppercase, and numbers', () => {
    const output = generatePassword(100, {
        [OptionsField.lowercase]: true,
        [OptionsField.uppercase]: true,
        [OptionsField.numbers]: true,
        [OptionsField.symbols]: false,
    })

    expect(output).toMatch(/[a-z]/)
    expect(output).toMatch(/[A-Z]/)
    expect(output).toMatch(/[0-9]/)
})

it('generates password with lowercase, uppercase, and symbols', () => {
    const output = generatePassword(100, {
        [OptionsField.lowercase]: true,
        [OptionsField.uppercase]: true,
        [OptionsField.numbers]: false,
        [OptionsField.symbols]: true,
    })

    expect(output).toMatch(/[a-z]/)
    expect(output).toMatch(/[A-Z]/)
    expect(output).toMatch(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)
})

it('generates password with lowercase, numbers, and symbols', () => {
    const output = generatePassword(100, {
        [OptionsField.lowercase]: true,
        [OptionsField.uppercase]: false,
        [OptionsField.numbers]: true,
        [OptionsField.symbols]: true,
    })

    expect(output).toMatch(/[a-z]/)
    expect(output).toMatch(/[0-9]/)
    expect(output).toMatch(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)
})

it('generates password with uppercase, numbers, and symbols', () => {
    const output = generatePassword(100, {
        [OptionsField.lowercase]: false,
        [OptionsField.uppercase]: true,
        [OptionsField.numbers]: true,
        [OptionsField.symbols]: true,
    })

    expect(output).toMatch(/[A-Z]/)
    expect(output).toMatch(/[0-9]/)
    expect(output).toMatch(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)
})
