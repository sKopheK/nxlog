import { render, screen } from "@testing-library/react"
import userEvent from '@testing-library/user-event'
import Options from "./Options"

describe('Default state', () => {
    beforeEach(() => render(<Options selected={{
        lowercase: true,
        uppercase: false,
        numbers: false,
        symbols: false,
    }} setSelected={() => { }} />))

    it('should have Include Lowercase checked by default', () => {
        screen.getByRole('checkbox', { name: 'Include Lowercase', checked: true })
    })

    it('should have other checkboxes unchecked by default', () => {
        screen.getByRole('checkbox', { name: 'Include Uppercase', checked: false })
        screen.getByRole('checkbox', { name: 'Include Numbers', checked: false })
        screen.getByRole('checkbox', { name: 'Include Symbols', checked: false })
    })
})

it('should call change handler when clicked', async () => {
    const handler = jest.fn(() => { })
    render(<Options selected={{
        lowercase: true,
        uppercase: false,
        numbers: false,
        symbols: false,
    }} setSelected={handler} />)

    const checkboxUppercase = screen.getByRole('checkbox', { name: 'Include Uppercase' })
    await userEvent.click(checkboxUppercase)

    expect(handler).toHaveBeenCalled()
})