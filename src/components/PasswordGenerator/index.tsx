import { ChangeEventHandler, FC, useReducer } from 'react';
import Options from './Options';
import { Action, passwordGeneratorReducer, SetOptionAction } from './reducer';
import styles from './styles.module.scss';
import { PasswordGeneratorState } from './types';
import { generatePassword } from './utils';

const MIN_PASSWORD_LENGTH = 6
const MAX_PASSWORD_LENGTH = 20

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

    const handleLengthChange: ChangeEventHandler<HTMLInputElement> = ({target: {value}}) => {
        dispatch({ type: Action.SET_LENGTH, payload: Number(value) })
    }

    const handleGenerate = () => {
        dispatch({ type: Action.SET_PASSWORD, payload: generatePassword(passwordLength, options) })
    }

    const handleOnOptionChange = (payload: SetOptionAction['payload']) => {
        dispatch({ type: Action.SET_OPTION, payload })
    }

    return (
        <div className={styles.wrapper}>
            <div className={styles.inputWrapper}>
                <input type="text" aria-label="Generated password" value={password} readOnly className={styles.password} />
                <button type="button" title="Copy password" className={styles.copyBtn}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                        <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                    </svg>
                </button>
            </div>
            <div className={styles.formField}>
                <label htmlFor="passwordLength">Password length</label>
                <input type="range" id="passwordLength" onChange={handleLengthChange} value={passwordLength} min={MIN_PASSWORD_LENGTH} max={MAX_PASSWORD_LENGTH} />
                <div className={styles.sliderLegend}>
                    <span>{MIN_PASSWORD_LENGTH}</span>
                    <span>{MAX_PASSWORD_LENGTH}</span>
                </div>
            </div>
            <Options selected={options} setSelected={handleOnOptionChange} />
            <button type="button" onClick={handleGenerate}>Generate</button>
        </div>
    );
};

export default PasswordGenerator;