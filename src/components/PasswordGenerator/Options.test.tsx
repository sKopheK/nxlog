import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Options from "./Options"

beforeEach(() => render(<Options />))

it('should have Include Lowercase checked by default', () => {
    screen.getByRole('checkbox', { name: 'Include Lowercase', checked: true })
})

it('should change checkbox value when clicked', async () => {
    const checkboxUppercase = screen.getByRole('checkbox', { name: 'Include Uppercase' })
    await userEvent.click(checkboxUppercase)
    expect(checkboxUppercase).toBeChecked()
})

it('should have at least one option selected', async () => {
    const checkboxLowercase = screen.getByRole<HTMLInputElement>('checkbox', { name: 'Include Lowercase' })
    const checkboxUppercase = screen.getByRole<HTMLInputElement>('checkbox', { name: 'Include Uppercase' })
    const checkboxNumbers = screen.getByRole<HTMLInputElement>('checkbox', { name: 'Include Numbers' })
    const checkboxSymbols = screen.getByRole<HTMLInputElement>('checkbox', { name: 'Include Symbols' })

    await userEvent.click(checkboxLowercase)

    const checkedBoxes = [checkboxLowercase, checkboxUppercase, checkboxNumbers, checkboxSymbols].filter(checkbox => checkbox.checked)
    expect(checkedBoxes.length).toBeGreaterThan(0)
})