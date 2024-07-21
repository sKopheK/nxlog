import { ChangeEventHandler, FC } from 'react';
import styles from './Options.module.scss';
import { SetOptionAction } from './reducer';
import { OptionsField } from './types';

const optionFieldLabels: Record<OptionsField, string> = {
    [OptionsField.lowercase]: 'Include Lowercase',
    [OptionsField.uppercase]: 'Include Uppercase',
    [OptionsField.numbers]: 'Include Numbers',
    [OptionsField.symbols]: 'Include Symbols',
}

type OptionsProps = {
    selected: Record<OptionsField, boolean>
    setSelected: (payload: SetOptionAction['payload']) => void
}

const Options: FC<OptionsProps> = ({ selected, setSelected }) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = ({ target: { checked, id } }) => {
        setSelected([id as OptionsField, checked])
    }

    return (
        <ul className={styles.options}>
            {Object.values(OptionsField).map((key) => (
                <li key={key}>
                    <input type="checkbox" id={key} checked={selected[key]} onChange={handleChange} />
                    <label htmlFor={key}>{optionFieldLabels[key]}</label>
                </li>
            ))}
        </ul>
    );
};

export default Options;