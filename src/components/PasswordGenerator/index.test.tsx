import { render, screen } from "@testing-library/react"
import PasswordGenerator from "."

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
