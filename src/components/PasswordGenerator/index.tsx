import { FC, useReducer } from 'react';

import { PasswordGeneratorState } from './types';

import { Action, passwordGeneratorReducer, SetLengthAction, SetOptionAction } from './reducer';
import { generatePassword } from './utils';

import LengthSlider from './LengthSlider';
import Options from './Options';

import Input from './Input';
import styles from './styles.module.scss';

const initialState: PasswordGeneratorState = {
    password: '',
    passwordLength: 8,
    options: {
        lowercase: true,
        uppercase: false,
        numbers: false,
        symbols: false,
    },
}

const PasswordGenerator: FC = () => {
    const [{ password, passwordLength, options }, dispatch] = useReducer(passwordGeneratorReducer, initialState)

    const handleLengthChange= (payload: SetLengthAction['payload']) => {
        dispatch({ type: Action.SET_LENGTH, payload })
    }

    const handleGenerate = () => {
        dispatch({ type: Action.SET_PASSWORD, payload: generatePassword(passwordLength, options) })
    }

    const handleOnOptionChange = (payload: SetOptionAction['payload']) => {
        dispatch({ type: Action.SET_OPTION, payload })
    }

    return (
        <div className={styles.wrapper}>
            <Input value={password} />
            <LengthSlider value={passwordLength} onChange={handleLengthChange} />
            <Options selected={options} setSelected={handleOnOptionChange} />
            <button type="button" onClick={handleGenerate}>Generate</button>
        </div>
    );
};

export default PasswordGenerator;