import { screen } from "@testing-library/dom"
import { render } from "@testing-library/react"

import Input from './Input'
import userEvent from "@testing-library/user-event"

it('should display input and copy button', () => {
    render(<Input value="123" />)

    screen.getByLabelText<HTMLInputElement>('Generated password')
    screen.getByTitle<HTMLButtonElement>('Copy password')
})

it('should copy input value to clipboard', async () => {
    const value = 'mYS3cr3t'
    const user = userEvent.setup()
    render(<Input value={value} />)

    const copyButton = screen.getByTitle<HTMLButtonElement>('Copy password')
    await user.click(copyButton)

    const clipboardText = await navigator.clipboard.readText()
    expect(clipboardText).toBe(value)
})