import { FC } from 'react';

import styles from './Input.module.scss';

type InputProps = {
    value: string
}

const Input: FC<InputProps> = ({ value }) => {
    return (
        <div className={styles.inputWrapper}>
            <input type="text" aria-label="Generated password" value={value} readOnly className={styles.password} />
            <button type="button" title="Copy password" className={styles.copyBtn}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
                    <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
                </svg>
            </button>
        </div>
    );
};

export default Input;