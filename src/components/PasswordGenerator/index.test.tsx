import { fireEvent, render, screen } from "@testing-library/react"
import PasswordGenerator from "."
import userEvent from "@testing-library/user-event"

beforeEach(() => render(<PasswordGenerator />))

it('renders all required elements', () => {
    screen.getByRole('textbox', { name: 'Generated password' })
    screen.getByRole('button', { name: 'Copy password' })
    screen.getByRole('slider', { name: 'Password length' })
    screen.getByRole('checkbox', { name: 'Include Lowercase' })
    screen.getByRole('checkbox', { name: 'Include Uppercase' })
    screen.getByRole('checkbox', { name: 'Include Numbers' })
    screen.getByRole('checkbox', { name: 'Include Symbols' })
    screen.getByRole('button', { name: 'Generate' })
})

it('does not allow to edit password field', async () => {
    const input = screen.getByRole<HTMLInputElement>('textbox', { name: 'Generated password' })
    const textInput = 'myOwnStrongPassword'
    await userEvent.type(input, textInput)
    expect(input).not.toHaveValue(textInput)
})

it('should have always at least one option selected', async () => {
    const checkboxLowercase = screen.getByRole<HTMLInputElement>('checkbox', { name: 'Include Lowercase' })
    const checkboxUppercase = screen.getByRole<HTMLInputElement>('checkbox', { name: 'Include Uppercase' })
    const checkboxNumbers = screen.getByRole<HTMLInputElement>('checkbox', { name: 'Include Numbers' })
    const checkboxSymbols = screen.getByRole<HTMLInputElement>('checkbox', { name: 'Include Symbols' })

    await userEvent.click(checkboxLowercase)

    const checkedBoxes = [checkboxLowercase, checkboxUppercase, checkboxNumbers, checkboxSymbols].filter(checkbox => checkbox.checked)
    expect(checkedBoxes.length).toBeGreaterThan(0)
})

describe('Password length slider', () => {
    it('displays min and max values', async () => {
        const passwordLength = screen.getByRole<HTMLInputElement>('slider', { name: 'Password length' })
        screen.getByText(passwordLength.getAttribute('min')!)
        screen.getByText(passwordLength.getAttribute('max')!)
    })

    it('updates value on slider change', async () => {
        const passwordLength = screen.getByRole<HTMLInputElement>('slider', { name: 'Password length' })
        fireEvent.change(passwordLength, { target: { value: '10' } })
        expect(passwordLength).toHaveValue('10')
    })

    it('does not allow to change outside of range', async () => {
        const passwordLength = screen.getByRole<HTMLInputElement>('slider', { name: 'Password length' })

        const min = passwordLength.getAttribute('min') ?? '0'
        fireEvent.change(passwordLength, { target: { value: Number(min) - 10 } })
        expect(passwordLength).toHaveValue(min)

        const max = passwordLength.getAttribute('max')
        if (max) {
            fireEvent.change(passwordLength, { target: { value: Number(max) + 10 } })
            expect(passwordLength).toHaveValue(max)
        }
    })
})

describe('Password generation', () => {
    const click = async () => {
        const btn = screen.getByRole('button', { name: 'Generate' })
        await userEvent.click(btn)
    }

    it('generates password upon button click', async () => {
        const input = screen.getByRole('textbox', { name: 'Generated password' })
        await click()
        expect(input).toHaveValue()
    })

    it('generates password of given length', async () => {
        const passwordLength = screen.getByRole<HTMLInputElement>('slider', { name: 'Password length' })
        const input = screen.getByRole<HTMLInputElement>('textbox', { name: 'Generated password' })
        await click()
        expect(input.value).toHaveLength(Number(passwordLength.value))
    })

    it('generates password with lowercase', async () => {
        const checkboxLowercase = screen.getByRole<HTMLInputElement>('checkbox', { name: 'Include Lowercase' })

        if (!checkboxLowercase.checked) {
            await userEvent.click(checkboxLowercase)
        }

        const input = screen.getByRole<HTMLInputElement>('textbox', { name: 'Generated password' })
        await click()
        expect(input.value).toMatch(/[a-z]/)
    })

    it('generates password with uppercase', async () => {
        const checkboxUppercase = screen.getByRole<HTMLInputElement>('checkbox', { name: 'Include Uppercase' })

        if (!checkboxUppercase.checked) {
            await userEvent.click(checkboxUppercase)
        }

        const input = screen.getByRole<HTMLInputElement>('textbox', { name: 'Generated password' })
        await click()
        expect(input.value).toMatch(/[A-Z]/)
    })

    it('generates password with numbers', async () => {
        const checkboxNumbers = screen.getByRole<HTMLInputElement>('checkbox', { name: 'Include Numbers' })

        if (!checkboxNumbers.checked) {
            await userEvent.click(checkboxNumbers)
        }

        const input = screen.getByRole<HTMLInputElement>('textbox', { name: 'Generated password' })
        await click()
        expect(input.value).toMatch(/[0-9]/)
    })

    it('generates password with symbols', async () => {
        const checkboxSymbols = screen.getByRole<HTMLInputElement>('checkbox', { name: 'Include Symbols' })

        if (!checkboxSymbols.checked) {
            await userEvent.click(checkboxSymbols)
        }

        const input = screen.getByRole<HTMLInputElement>('textbox', { name: 'Generated password' })
        await click()
        expect(input.value).toMatch(/[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]/)
    })
})