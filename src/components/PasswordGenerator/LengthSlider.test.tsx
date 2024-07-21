import { fireEvent, screen } from "@testing-library/dom"
import { render } from "@testing-library/react"

import LengthSlider from './LengthSlider';

it('should display min and max values', async () => {
    render(<LengthSlider value={8} onChange={() => { }} />)

    const passwordLength = screen.getByRole<HTMLInputElement>('slider', { name: 'Password length' })
    screen.getByText(passwordLength.getAttribute('min')!)
    screen.getByText(passwordLength.getAttribute('max')!)
})

it('should call change handler when slid', async () => {
    const handler = jest.fn(() => { })
    render(<LengthSlider value={8} onChange={handler} />)

    const passwordLength = screen.getByRole<HTMLInputElement>('slider', { name: 'Password length' })
    fireEvent.change(passwordLength, { target: { value: '10' } })
    expect(handler).toHaveBeenCalled()
})