import { screen } from "@testing-library/dom";
import { render } from "@testing-library/react";

import Input from './Input';

it('should display input and copy button', () => {
    render(<Input value="123" />)

    screen.getByLabelText<HTMLInputElement>('Generated password')
    screen.getByTitle<HTMLButtonElement>('Copy password')
})